import React from "react";
import { createStackNavigator } from "react-navigation"; // Version can be specified in package.json

// SCREENS
import HomeScreen from "./Screens/HomeScreen";
import DetailScreen from "./Screens/DetailScreen";

// Context Provider
import ShoppingProvider from "./ShoppingProvider";

const RootStack = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Detail: {
    screen: DetailScreen
  }
});

export default (Root = () => {
  return (
    <ShoppingProvider>
      <RootStack />
    </ShoppingProvider>
  );
});
