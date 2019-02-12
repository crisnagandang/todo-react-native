import React from "react";
import { View, Text, CheckBox } from "react-native";

class DeleteTodoItemsRenderer extends React.Component {
  _handleTick = () => {
    const { onTick, todo } = this.props;
    onTick(todo.key);
  };

  render() {
    const { todo } = this.props;
    return todo.completed ? null : (
      <View style={{ display: "flex", flexDirection: "row" }}>
        <CheckBox onValueChange={this._handleTick} value={todo.selected} />
        <View style={{ padding: 10, flex: 2 }}>
          <Text>{todo.task}</Text>
        </View>
      </View>
    );
  }
}

export default DeleteTodoItemsRenderer;
