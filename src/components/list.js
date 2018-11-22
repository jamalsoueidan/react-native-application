import React from "react";
import { FlatList } from "react-native";
import MessageRow from "./row";

export default class List extends React.Component {
  renderItem = ({ item, index }) => {
    return (
      <MessageRow
        item={item}
        data={this.props.data}
        index={index}
        currentUserId={this.props.currentUserId}
      />
    );
  };

  render() {
    return (
      <FlatList
        renderItem={this.renderItem}
        ref={e => this.props.refReference(e)}
        keyExtractor={item => item.id.toString()}
        onEndReachedThreshold={0.1} //I could have used onrefresh/refreshing, but right now there is no delay
        inverted
        {...this.props}
      />
    );
  }
}
