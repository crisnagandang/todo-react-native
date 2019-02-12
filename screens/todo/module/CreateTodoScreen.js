import React from "react";
import { View, Button } from "react-native";

import EditableTodoInputForm from "../component/EditableTodoInputForm";

class CreateTodoScreen extends React.Component {
  static navigationOptions = {
    title: "Create a task"
  };

  constructor(props) {
    super(props);
    this.state = { id: "", task: "" };
  }

  handlePress = () => {
    const { save } = this.props.navigation.state.params;
    save(this.state);
  };

  _handleUpdate = obj => {
    this.setState({ [obj.hashKey]: obj.value });
  };

  render() {
    return (
      <View>
        <EditableTodoInputForm
          todo={this.state}
          onFieldUpdate={this._handleUpdate}
        />
        <Button title="Create" onPress={this.handlePress} />
      </View>
    );
  }
}

export default CreateTodoScreen;
