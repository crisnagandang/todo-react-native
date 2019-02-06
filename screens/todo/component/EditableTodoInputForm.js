import React from "react";
import { View, TextInput } from "react-native";

class EditableTodoInputForm extends React.Component {
  render() {
    const { onFieldUpdate, todo } = this.props;
    return (
      <View>
        <TextInput
          placeholder={todo.task === "" ? "Enter a task" : null}
          value={todo.task === "" ? null : todo.task}
          onChangeText={e =>
            onFieldUpdate({ key: todo.key, hashKey: "task", value: e })
          }
        />
      </View>
    );
  }
}

export default EditableTodoInputForm;
