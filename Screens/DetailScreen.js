import React from "react";
import { View, Text, Button } from "react-native";

import { ShoppingContext } from "../ShoppingProvider";

export default class DetailScreen extends React.Component {
  // create the title for the screen
  static navigationOptions = {
    title: "Details"
  };

  // create constructor to get access to props
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ShoppingContext.Consumer>
        {({ currentItem }) => (
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Detail Screen Stack Navigation Sample</Text>
            <Text>{currentItem.name}</Text>
          </View>
        )}
      </ShoppingContext.Consumer>
    );
  }
}
