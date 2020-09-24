import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { height, width } = Dimensions.get("window");

class Cylinder extends Component {
  render() {
    return (
      <View style={styles.cylinder}>
        <Text
          style={{
            fontSize: 14,
            color: "#D87FF9",
            marginLeft: 15,
            marginTop: 6
          }}
        >
          {" "}
          {this.props.content}{" "}
        </Text>
        <View style={{ marginLeft: 10, marginTop: 6 }}>
          <Ionicons name="md-arrow-dropright" color="#D87FF9" size={20} />
        </View>
      </View>
    );
  }
}

export default Cylinder;

const styles = StyleSheet.create({
  cylinder: {
    flexDirection: "row",
    width: 88,
    height: 32,
    borderRadius: 100,
    marginLeft: 40,
    marginTop: -5,
    backgroundColor: "#360673"
  }
});
