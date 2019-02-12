import React, { Component } from "react";
import { View, FlatList, Button, Alert } from "react-native";
import DeleteTodoItemsRenderer from "../component/DeleteTodoItemsRenderer";

class DeleteTodoScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Delete tasks",
      headerRight: (
        <Button
          onPress={navigation.getParam("handleDeleteAction")}
          title="Delete"
          color="#000"
        />
      )
    };
  };

  constructor(props) {
    super(props);

    const newTodos = props.navigation.state.params.todos;

    newTodos.forEach(item => (item.selected = false));

    this.state = {
      todos: newTodos
    };
  }

  componentDidMount() {
    this.props.navigation.setParams({
      handleDeleteAction: this._delete
    });
  }

  _delete = () => {
    const { deleteItems } = this.props.navigation.state.params;

    const selectedKeys = this.state.todos
      .filter(todo => todo.selected)
      .map(todo => todo.key);

    deleteItems(selectedKeys);
  };

  _handleOnTick = key => {
    const index = this.state.todos.findIndex(x => x.key === key);
    if (index === -1) {
      // handle error
    } else {
      this.setState({
        todos: [
          ...this.state.todos.slice(0, index),
          Object.assign({}, this.state.todos[index], {
            selected: !this.state.todos[index].selected
          }),
          ...this.state.todos.slice(index + 1)
        ]
      });
    }
  };

  render() {
    const { todos } = this.state;

    return (
      <View>
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <DeleteTodoItemsRenderer todo={item} onTick={this._handleOnTick} />
          )}
        />
      </View>
    );
  }
}

export default DeleteTodoScreen;
