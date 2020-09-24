import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

class Category extends Component {
  render() {
    return (
      <View>
        <View style={styles.square}>
          <Image
            source={this.props.imageUri}
            style={{
              width: 190,
              height: 150,
              borderRadius: 10
            }}
          />
        </View>
        <View style={{ flexDirection: "column", marginLeft: 10 }}>
          <Text style={styles.listText}>{this.props.name}</Text>
          <View style={{ flexDirection: "row", marginTop: 5 }}>
            <Text style={styles.triText}>{this.props.count} plays</Text>
            <View style={{ marginLeft: 15, flexDirection: "row" }}>
              <View style={styles.triangle}>
                <Text>HI</Text>
              </View>
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

export default Category;

const styles = StyleSheet.create({
  square: {
    width: 190,
    height: 150,
    borderRadius: 10,
    backgroundColor: "white",
    elevation: 6,
    marginHorizontal: 5
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
    marginTop: 3,
    marginRight: 3
  },
  triText: {
    fontSize: 14,
    fontWeight: "300",
    color: "#F2F2F2",
    lineHeight: 16
  },
  listText: {
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 19,
    marginTop: 15,
    color: "#F2F2F2"
  }
});
