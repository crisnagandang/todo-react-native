import React from "react";
import { View, Text, CheckBox } from "react-native";

class ListTodoItemRenderer extends React.Component {
  _handleOnPress = () => {
    const { todo, onPress } = this.props;
    onPress(todo);
  };

  _handleCompleteTodo = () => {
    const { todo, completeTodo } = this.props;
    completeTodo(todo.key);
  };

  render() {
    const { todo } = this.props;
    return todo.completed ? null : (
      <View style={{ display: "flex", flexDirection: "row" }}>
        <CheckBox onChange={this._handleCompleteTodo} />
        <View style={{ padding: 10, flex: 2 }}>
          <Text onPress={this._handleOnPress}>{todo.task}</Text>
        </View>
      </View>
    );
  }
}

export default ListTodoItemRenderer;
