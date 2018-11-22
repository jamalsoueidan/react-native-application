import React from "react";
import { Icon } from "react-native-elements";

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity
} from "react-native";

export default class Footer extends React.Component {
  state = {
    typing: ""
  };

  submit = () => {
    const typing = this.state.typing;
    this.props.onSubmit(typing);
    this.setState({ typing: "" });
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding">
        <View style={styles.footer}>
          <View style={styles.inputWrapper}>
            <TextInput
              value={this.state.typing}
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="Message"
              onChangeText={text => this.setState({ typing: text })}
              onSubmitEditing={this.submit}
            />
          </View>

          <TouchableOpacity onPress={this.submit}>
            <View style={styles.icon}>
              <Icon name="send" color="#ff9935" />
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    height: 55,
    padding: 10
  },
  inputWrapper: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#ccc",
    borderStyle: "solid",
    height: 30,
    padding: 4
  },
  input: {
    fontSize: 16,
    flex: 1
  },
  icon: {
    width: 40,
    height: 30,
    paddingLeft: 8
  }
});
