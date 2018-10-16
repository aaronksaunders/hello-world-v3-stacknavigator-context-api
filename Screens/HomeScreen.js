import React from "react";
import { View, Text, Button, FlatList, TouchableOpacity } from "react-native";

import { ShoppingContext } from "../ShoppingProvider";

export default class HomeScreen extends React.Component {
  // create the title for the screen
  static navigationOptions = {
    title: "Home"
  };

  // create constructor to get access to props
  constructor(props) {
    super(props);
  }

  onItemPressed = _item => {
    console.log(_item);
    this.props.navigation.navigate("Detail");
  };

  render() {
    return (
      <ShoppingContext.Consumer>
        {({ listData, setCurrentItem }) => (
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text style={{ fontSize: 18, padding: 16, fontWeight: "bold" }}>
              Home Screen Stack Navigation Sample
            </Text>
            <FlatList
              style={{ padding: 10 }}
              data={listData}
              renderItem={_data => {
                return (
                  <RowItem
                    // pass in all of the data that goes to rowItem
                    {..._data}
                    // pass in function to call onPress
                    onItemPressed={this.onItemPressed}
                    // Pass the context function into component
                    // as a property
                    setCurrentItem={setCurrentItem}
                  />
                );
              }}
            />
          </View>
        )}
      </ShoppingContext.Consumer>
    );
  }
}

/**
 *
 * @param {*} param0
 */
const RowItem = ({ setCurrentItem, item, index, onItemPressed }) => {

  /**
   * when pressed set current item in context and then call the 
   * handler that was passed in
   */
  onPressed = () => {
    console.log("RowItem: onPressed", item);
    setCurrentItem(item);
    onItemPressed();
  };

  // use properties that were passed in to render the row item
  return (
    <TouchableOpacity
      style={{ flex: 1, flexDirection: "row", paddingBottom: 4 }}
      onPress={onPressed}>
      <Text style={{ width: "5%" }}>{index}</Text>
      <Text style={{ width: "15%" }}>{item.key}</Text>
      <Text style={{ width: "80%" }}>{item.name}</Text>
    </TouchableOpacity>
  );
};
