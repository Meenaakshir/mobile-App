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

export default class ConcertList extends Component {
  render() {
    return (
      <View>
        <View style={styles.square}>
          <Image
            style={{
              width: 304,
              height: 175,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20
            }}
            source={this.props.FeedsImg}
          />
          <View style={styles.cylinderDate}>
            <Text style={styles.dateSize}> {this.props.date} </Text>
          </View>
          <View style={styles.circle}>
            <View style={{ alignItems: "center", marginTop: 10 }}>
              <Ionicons name="md-heart" color="red" size={28} />
            </View>
          </View>
          <Text style={styles.listTitle}> {this.props.title} </Text>
          <Text style={styles.listPlace}> {this.props.place} </Text>
          <View style={{ flexDirection: "row", marginLeft: 20, marginTop: 6 }}>
            <View>
              <Ionicons name="md-pin" color="#828282" size={18} />
            </View>
            <Text style={styles.listCountry}>{this.props.country} </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cylinder: {
    width: 88,
    height: 32,
    borderRadius: 100,
    marginTop: 10,
    backgroundColor: "white"
  },
  square: {
    backgroundColor: "#141A45",
    width: 304,
    height: 272,
    borderRadius: 20,
    elevation: 6,
    marginVertical: 12,
    marginHorizontal: 6
  },
  cylinderDate: {
    width: 75,
    height: 32,
    borderRadius: 8,
    marginTop: -155,
    marginLeft: 20,
    backgroundColor: "#34395A"
  },
  dateSize: {
    textAlign: "center",
    marginTop: 8,
    color: "#F2994A",
    fontSize: 14,
    fontWeight: "bold",
    lineHeight: 16,
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
  }
});
