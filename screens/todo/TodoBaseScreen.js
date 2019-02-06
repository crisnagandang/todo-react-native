import React from "react";
import { Button, View, FlatList, Alert } from "react-native";
import ListTodoItemRenderer from "./component/ListTodoItemRenderer";

class TodoBaseScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "List",
      headerRight: (
        <Button
          onPress={navigation.getParam("handleNavigateCreate")}
          title="Add"
          color="#000"
        />
      )
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      todos: [{ key: "1", task: "First ", completed: false }]
    };
  }

  componentDidMount() {
    this.props.navigation.setParams({
      handleNavigateCreate: this._handleNavigateCreate
    });
  }

  _createTodoItem = obj => {
    const todo = { key: `${this.state.todos.length + 1}`, task: obj.task };
    this.setState(prevState => ({
      todos: [...prevState.todos, todo]
    }));
    this.props.navigation.navigate("todoScreen");
  };

  _deleteTodoItem = () => {
    // handle delete
  };

  _updateTodoItem = todo => {
    this._updateTodoItemAttribute(todo.key, todo);
    this.props.navigation.navigate("todoScreen");
  };

  _completeTodoItem = key => {
    this._updateTodoItemAttribute(key, { completed: true });
  };

  _updateTodoItemAttribute = (key, attr) => {
    const index = this.state.todos.findIndex(x => x.key === key);
    if (index === -1) {
      // handle error
    } else {
      const state = Object.assign({}, this.state);
      this.setState({
        todos: [
          ...this.state.todos.slice(0, index),
          Object.assign({}, this.state.todos[index], attr),
          ...this.state.todos.slice(index + 1)
        ]
      });
      this.props.navigation.navigate("todoScreen");
    }
  };

  _handleNavigateCreate = () => {
    this.props.navigation.navigate("createTodoScreen", {
      onSave: this._createTodoItem
    });
  };

  _handleNavigateDetail = todo => {
    this.props.navigation.navigate("detailsTodoScreen", {
      todo,
      updateTodoItem: this._updateTodoItem
    });
  };

  render() {
    return (
      <View>
        <FlatList
          data={this.state.todos}
          renderItem={({ item }) => (
            <ListTodoItemRenderer
              todo={item}
              onPress={this._handleNavigateDetail}
              completeTodo={this._completeTodoItem}
            />
          )}
        />
      </View>
    );
  }
}

export default TodoBaseScreen;
