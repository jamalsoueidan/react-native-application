import React from "react";
import { Icon } from "react-native-elements";
import { View, Text, StyleSheet } from "react-native";

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <View style={styles.leaveScreen}>
          <Icon name="clear" color="#ff9935" />
        </View>
        <Text style={styles.title}>{this.props.title}</Text>
        <Text style={styles.subtitle}>{this.props.subtitle}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: 10
  },
  leaveScreen: {
    position: "absolute",
    height: 65,
    top: 0,
    left: 0,
    justifyContent: "flex-end"
  },
  title: {
    fontWeight: "bold",
    fontSize: 15
  },
  subtitle: {
    fontSize: 12,
    color: "#ccc"
  }
});
