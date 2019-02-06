import React from "react";
import { View, Text } from "react-native";

class ReadonlyTodoForm extends React.Component {
  render() {
    const { todo } = this.props;
    return (
      <View>
        <Text>{todo.task}</Text>
      </View>
    );
  }
}

export default ReadonlyTodoForm;
