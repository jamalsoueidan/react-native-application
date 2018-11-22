import React from "react";
import { Header, Footer, List, ScrollButton } from "./src/components";
import { Icon } from "react-native-elements";
import { fetch, create } from "./src/core/fetch";

import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Animated,
  Text
} from "react-native";

export default class App extends React.Component {
  state = {
    typing: "",
    currentUserId: 2,
    showScrollButton: false,
    page: 0,
    data: []
  };

  onEndReached = info => {
    const { data, page } = this.state;
    const newData = fetch(page + 1);
    if (newData) {
      this.setState({ data: [...data, ...newData], page: this.state.page + 1 });
    }
  };

  componentDidMount() {
    const { data, page } = this.state;
    const newData = fetch(page);
    this.setState({ data: [...data, ...newData] });
  }

  submitMessage = value => {
    if (value !== "") {
      const message = create(value);
      this.setState({ data: [message, ...this.state.data] });
    }
  };

  onScroll = e => {
    const scrollPosition = e.nativeEvent.contentOffset.y;
    if (scrollPosition > 150) {
      this.setState({ showScrollButton: true });
    } else {
      this.setState({ showScrollButton: false });
    }
  };

  scrollEnd = () => {
    if (this.flatList) {
      this.flatList.scrollToItem({
        animated: true,
        item: this.state.data[0]
      });
    }
  };

  refList = e => {
    this.flatList = e;
  };

  render() {
    const { data, currentUserId, showScrollButton } = this.state;

    return (
      <View style={styles.container}>
        <Header title="testerne" subtitle={data.length} />

        <List
          data={data}
          refReference={this.refList}
          onEndReached={this.onEndReached}
          onScroll={this.onScroll}
          currentUserId={currentUserId}
        />

        <ScrollButton onPress={this.scrollEnd} visible={showScrollButton} />

        <Footer onSubmit={this.submitMessage} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
