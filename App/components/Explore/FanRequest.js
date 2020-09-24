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

export default class FanRequest extends Component {
  render() {
    return (
      <View
        style={{
          flexDirection: "row",
          height: 160,
          width: 240,
          marginTop: 5
        }}
      >
        <View style={{ flexDirection: "column" }}>
          <View style={styles.square}>
            <Image
              style={{
                width: 82,
                height: 82,
                borderRadius: 8
              }}
              source={this.props.FansImg}
            />
          </View>
          <View style={styles.cylinderCost}>
            <Image
              style={{
                width: 10,
                height: 10,
                marginLeft: 8,
                marginTop: 10
              }}
              source={require("../../assets/rup.png")}
            />
            <Text style={styles.cost}> {this.props.cost} </Text>
          </View>
        </View>
        <View style={{ marginTop: 10, marginLeft: 10 }}>
          <Text style={styles.RequestTitle}> {this.props.RequestTitle} </Text>
          <Text style={styles.Request}> {this.props.Request} </Text>
        </View>
        <View style={{ marginTop: 70, marginLeft: 20 }}>
          <Ionicons name="md-arrow-dropright" color="#828282" size={22} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cylinderCost: {
    width: 72,
    height: 32,
    borderRadius: 16,
    marginHorizontal: 15
  },
  square: {
    backgroundColor: "#141A45",
    width: 82,
    height: 82,
    borderRadius: 8,
    elevation: 6,
    marginVertical: 12,
    marginHorizontal: 6
  },
  cost: {
    textAlign: "center",
    marginTop: -12,
    color: "#F2994A",
    fontSize: 14,
    fontWeight: "bold",
    lineHeight: 16,
    fontStyle: "normal"
  },
  RequestTitle: {
    marginTop: 8,
    color: "#E0E0E0",
    fontSize: 18,
    fontWeight: "500",
    lineHeight: 18,
    fontStyle: "normal"
  },
  Request: {
    marginTop: 8,
    color: "#E0E0E0",
    fontSize: 16,
    fontWeight: "300",
    lineHeight: 19,
    fontStyle: "italic"
  }
});
