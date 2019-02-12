import React from "react";
import { View, Button } from "react-native";

import EditableTodoInputForm from "../component/EditableTodoInputForm";
import ReadonlyTodoForm from "../component/ReadonlyTodoForm";

class DetailsTodoScreen extends React.Component {
  static navigationOptions = {
    title: "Details"
  };

  constructor(props) {
    super(props);
    this.state = { editable: false, todo: props.navigation.state.params.todo };
  }

  _toggleEdit = () => {
    this.setState({ editable: true });
  };

  _handleUpdate = obj => {
    this.setState({ todo: { ...this.state.todo, [obj.hashKey]: obj.value } });
  };

  _handleSubmit = () => {
    const { update } = this.props.navigation.state.params;
    const { todo } = this.state;
    update(todo);
  };

  _readonlyView() {
    const { todo } = this.props.navigation.state.params;
    return (
      <View>
        <ReadonlyTodoForm todo={todo} />
        <Button title="Edit" onPress={this._toggleEdit} />
      </View>
    );
  }

  _editView() {
    const { todo } = this.state;
    return (
      <View>
        <EditableTodoInputForm todo={todo} onFieldUpdate={this._handleUpdate} />
        <Button title="Save" onPress={this._handleSubmit} />
      </View>
    );
  }

  render() {
    const { editable } = this.state;
    return (
      <View style={{ padding: 20 }}>
        {editable ? this._editView() : this._readonlyView()}
      </View>
    );
  }
}

export default DetailsTodoScreen;
