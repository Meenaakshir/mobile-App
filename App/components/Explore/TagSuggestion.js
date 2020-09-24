import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  BoxShadow
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Cylinder from "./Cylinder";

const { height, width } = Dimensions.get("window");

export default class TagSuggestion extends Component {
  render() {
    return (
      <View>
        <View style={styles.cylinder}>
          <Text style={styles.Text}> {this.props.Suggestion} </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cylinder: {
    width: 110,
    height: 32,
    borderRadius: 26,
    marginLeft: 18,
    backgroundColor: "#141A45"
  },
  Text: {
    textAlign: "center",
    marginTop: 8,
    color: "#828282",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 16,
    fontStyle: "normal"
  }
});
