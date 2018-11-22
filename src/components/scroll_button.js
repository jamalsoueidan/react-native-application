import React from "react";
import { Icon } from "react-native-elements";

import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Animated,
  Text
} from "react-native";

class ScrollButton extends React.Component {
  componentWillMount() {
    this.animatedValue = new Animated.Value(0);
  }

  componentDidUpdate(prevProps) {
    if (this.props.visible && !this.started) {
      this.started = Animated.timing(this.animatedValue, {
        toValue: 1,
        duration: 1000
      });
      this.started.start();
    }

    if (!this.props.visible && this.started) {
      this.started.stop();
      Animated.timing(this.animatedValue, {
        toValue: 0,
        duration: 1000
      }).start();
      this.started = null;
    }
  }

  render() {
    return (
      <Animated.View
        style={[
          styles.scrollButton,
          {
            opacity: this.animatedValue
          }
        ]}
      >
        <TouchableOpacity onPress={this.props.onPress}>
          <Icon name="expand-more" />
        </TouchableOpacity>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  scrollButton: {
    position: "absolute",
    right: 20,
    bottom: 70,
    height: 30,
    width: 30,
    zIndex: 1000,
    justifyContent: "center",
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#eee",
    borderStyle: "solid",
    backgroundColor: "#fff"
  }
});

export default ScrollButton;
