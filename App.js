/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import TodoBaseScreen from "./screens/todo/TodoBaseScreen";
import createTodoScreen from "./screens/todo/module/CreateTodoScreen";
import detailsTodoScreen from "./screens/todo/module/DetailsTodoScreen";
import deleteTodoScreen from "./screens/todo/module/DeleteTodoScreen";

type Props = {};
class App extends React.Component<Props> {
  render() {
    return <AppStackContainer />;
  }
}

const AppStackNavigator = createStackNavigator({
  todoScreen: { screen: TodoBaseScreen },
  createTodoScreen: { screen: createTodoScreen },
  detailsTodoScreen: { screen: detailsTodoScreen },
  deleteTodoScreen: { screen: deleteTodoScreen }
});

const AppStackContainer = createAppContainer(AppStackNavigator);

export default AppStackContainer;
