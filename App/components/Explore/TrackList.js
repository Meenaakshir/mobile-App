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

export default class TrackList extends Component {
  render() {
    return (
      <View>
        <Image
          style={{
            width: 188,
            height: 132,
            borderRadius: 8,
            marginRight: 15
          }}
          source={this.props.FeedsImg}
        />
        <View>
          <Text style={styles.name}> {this.props.name} </Text>
          <Text style={styles.concertname}> {this.props.concertname} </Text>
          <Text style={styles.playCount}> {this.props.playCount} </Text>
          <View style={{ flexDirection: "row", marginTop: 6, marginLeft: 4 }}>
            <Ionicons name={this.props.icon} color="#55EE1F" size={18} />
            <Text style={styles.range}> {this.props.range} </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  name: {
    marginTop: 15,
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 19,
    fontStyle: "normal"
  },
  concertname: {
    marginTop: 5,
    color: "#BDBDBD",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 19,
    fontStyle: "normal"
  },
  listTitle: {
    fontSize: 16,
    marginLeft: 10,
    color: "#F2F2F2"
  },
  circle: {
    width: 45,
    height: 45,
    borderRadius: 200,
    marginTop: 100,
    marginLeft: 235,
    backgroundColor: "#FFFFFF"
  },

  listPlace: {
    fontSize: 14,
    color: "#BDBDBD",
    lineHeight: 16,
    fontWeight: "normal",
    fontStyle: "normal",
    marginLeft: 10
  },
  listCountry: {
    fontSize: 14,
    color: "#828282",
    lineHeight: 16,
    fontWeight: "normal",
    fontStyle: "normal",
    marginLeft: 10,
    marginTop: 2
  },
  list: {
    flexDirection: "row",
    marginTop: 5
  },
  playCount: {
    marginTop: 15,
    color: "#F2994A",
    fontSize: 16,
    fontWeight: "normal",
    lineHeight: 18,
    fontStyle: "normal"
  },
  range: {
    marginTop: 2,
    color: "#55EE1F",
    fontSize: 14,
    lineHeight: 14
  }
});
