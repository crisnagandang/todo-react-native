import React from "react";
import { View, Text, CheckBox } from "react-native";

class ListTodoItemRenderer extends React.Component {
  _handleOnPress = () => {
    const { todo, onPress } = this.props;
    onPress(todo);
  };

  _handleTick = () => {
    const { todo, onTick } = this.props;
    onTick(todo.key);
  };

  _handleOnLongPress = () => {
    this.props.onLongPress();
  };

  render() {
    const { todo } = this.props;
    return todo.completed ? null : (
      <View style={{ display: "flex", flexDirection: "row" }}>
        <CheckBox onChange={this._handleTick} />
        <View style={{ padding: 10, flex: 2 }}>
          <Text
            onPress={this._handleOnPress}
            onLongPress={this._handleOnLongPress}
          >
            {todo.task}
          </Text>
        </View>
      </View>
    );
  }
}

export default ListTodoItemRenderer;
