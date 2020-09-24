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

export default class Artist extends Component {
  render() {
    return (
      <View>
        <View>
          <Image
            style={{
              width: 72,
              height: 72,
              borderRadius: 200,
              marginLeft: 17,
              marginRight: 13
            }}
            source={this.props.ArtImg}
          />
        </View>
        <Text style={styles.artistName}>{this.props.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  circle: {
    width: 72,
    height: 72,
    borderRadius: 200,
    padding: 25,
    backgroundColor: "#FFFFFF"
  },

  artistName: {
    fontSize: 14,
    color: "#BDBDBD",
    lineHeight: 16,
    fontWeight: "500",
    fontStyle: "normal",
    textAlign: "center",
    marginTop: 10
  }
});
