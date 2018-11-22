import React from "react";
import { StyleSheet, View, Text } from "react-native";
import moment from "moment";

export default class MessageRow extends React.Component {
  get renderMessage() {
    const { item, currentUserId } = this.props;

    if (currentUserId === item.sender.id) {
      return (
        <View style={styles.alignItemsStart}>
          <View style={[styles.messageRow, styles.receiverMessageRow]}>
            <Text style={[styles.message, styles.receiverMessage]}>
              {item.message}
            </Text>
          </View>
        </View>
      );
    }

    return (
      <View style={styles.alignItemsEnd}>
        <View style={[styles.messageRow, styles.senderMessageRow]}>
          <Text style={[styles.message, styles.senderMessage]}>
            {item.message}
          </Text>
        </View>
      </View>
    );
  }

  get renderDate() {
    const { item } = this.props;
    const before = this.props.data[this.props.index + 1];
    const created_at = (before && before.created_at) || null;

    if (!moment(created_at).isSame(item.created_at, "day") || !before) {
      return (
        <View style={styles.datetimeRow}>
          <Text style={styles.datetime}>
            {moment(item.created_at).format("ddd, MMM D, YYYY")}
          </Text>
        </View>
      );
    }
  }

  // TODO: render time out of the row!
  get renderTime() {
    const { item } = this.props;
    return (
      <View style={styles.timeRow}>
        <Text style={styles.time}>4:43 pm</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.row}>
        {this.renderDate}
        {this.renderMessage}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "column",
    margin: 5
  },
  datetimeRow: {
    flex: 1,
    width: "100%",
    marginBottom: 15,
    alignItems: "center"
  },
  datetime: {
    color: "#666"
  },
  messageRow: {
    padding: 4,
    borderRadius: 12
  },
  receiverMessageRow: {
    backgroundColor: "#eee"
  },
  senderMessageRow: {
    backgroundColor: "#ff9935"
  },
  message: {
    padding: 4
  },
  receiverMessage: {},
  senderMessage: {
    color: "#fff"
  },
  alignItemsStart: {
    alignItems: "flex-start"
  },
  alignItemsEnd: {
    alignItems: "flex-end"
  },
  timeRow: {
    padding: 8,
    position: "absolute",
    right: -60
  }
});
