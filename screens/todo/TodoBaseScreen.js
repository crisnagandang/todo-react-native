import React from "react";
import { Button, View, FlatList } from "react-native";
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
      todos: [{ key: "1", task: "First ", selected: false, completed: false }]
    };
  }

  componentDidMount() {
    this.props.navigation.setParams({
      handleNavigateCreate: this._handleNavigateCreate
    });
  }

  _createTodoItem = obj => {
    const { todos } = this.state;
    const getLastItem = todos.length > 0 ? todos[todos.length - 1] : "0";
    const todo = { key: `${parseInt(getLastItem.key) + 1}`, task: obj.task };
    this.setState(prevState => ({
      todos: [...prevState.todos, todo]
    }));
    this.props.navigation.navigate("todoScreen");
  };

  _deleteTodoItems = keys => {
    const filtered = this.state.todos.filter(todo => !keys.includes(todo.key));
    this.setState({ todos: filtered });
    this.props.navigation.navigate("todoScreen");
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
      this.setState({
        todos: [
          ...this.state.todos.slice(0, index),
          Object.assign({}, this.state.todos[index], attr),
          ...this.state.todos.slice(index + 1)
        ]
      });
    }
  };

  _handleNavigateCreate = () => {
    this.props.navigation.navigate("createTodoScreen", {
      saveItem: this._createTodoItem
    });
  };

  _handleNavigateDetail = todo => {
    this.props.navigation.navigate("detailsTodoScreen", {
      todo,
      updateItem: this._updateTodoItem
    });
  };

  _handleDeleteItems = () => {
    this.props.navigation.navigate("deleteTodoScreen", {
      todos: this.state.todos,
      deleteItems: this._deleteTodoItems
    });
  };

  render() {
    const { todos } = this.state;

    return (
      <View>
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <ListTodoItemRenderer
              todo={item}
              onPress={this._handleNavigateDetail}
              onLongPress={this._handleDeleteItems}
              onTick={this._completeTodoItem}
            />
          )}
        />
      </View>
    );
  }
}

export default TodoBaseScreen;
