import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default class Search extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Search Page - Development In-Progress </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    ...Platform.select({
      ios: {
        fontFamily: "Arial"
      },
      android: {
        fontFamily: "Roboto"
      }
    })
  }
});
