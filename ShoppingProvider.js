import React from "react";

export const ShoppingContext = React.createContext();

export default class ShoppingProvider extends React.Component {
  constructor(props) {
    super(props);
    // list data for FlatList to render
    this.state = {
      listData: [
        { key: "user1", name: "Aaron Saunders" },
        { key: "user2", name: "Andrea Saunders" },
        { key: "user3", name: "Bryce Saunders" }
      ],
      // which item is selected
      currentItem: null
    };
  }

  /**
   * function to set which item is the currently selected item
   * this way we are managing the object(s) here in the context
   */
  setCurrentItem = currentItem => {
    this.setState({ currentItem });
  };

  render() {
    let value = {
      ...this.state,
      setCurrentItem: this.setCurrentItem
    };
    return (
      <ShoppingContext.Provider value={value}>
        {this.props.children}
      </ShoppingContext.Provider>
    );
  }
}
