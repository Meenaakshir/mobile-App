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

class BrandList extends Component {
  render() {
    return (
      <View>
        <View style={styles.square}>
          <View style={{ alignItems: "center", marginTop: 15 }}>
            <Image
              source={this.props.imageURI}
              style={{
                width: 60,
                height: 60,
                borderRadius: 10
              }}
            />
            <Text style={styles.brandName}> {this.props.brandname} </Text>
            <Text style={styles.capacity}> {this.props.capacity} plays </Text>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.triangle}></View>
              <Text style={styles.triText}>
                {this.props.percent}% last week
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default BrandList;

const styles = StyleSheet.create({
  square: {
    backgroundColor: "#141A45",
    width: 141,
    height: 176,
    borderRadius: 8,
    marginVertical: 12,
    marginHorizontal: 8
  },
  list: {
    flexDirection: "row",
    marginLeft: -10
  },
  triangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 6,
    borderRightWidth: 6,
    borderBottomWidth: 10,
    borderBottomColor: "#7FC566",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    marginTop: 10,
    marginRight: 3
  },
  triText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#55EE1F",
    lineHeight: 16,
    marginTop: 8
  },
  brandName: {
    fontSize: 14,
    fontWeight: "500",
    color: "#F2F2F2",
    lineHeight: 18,
    marginTop: 8
  },
  capacity: {
    fontSize: 14,
    fontWeight: "300",
    color: "#E0E0E0",
    lineHeight: 16,
    marginTop: 8
  }
});
