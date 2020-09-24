import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default class Match extends Component {
  render() {
    return (
      <View
        style={{
          flexDirection: "column",
          marginLeft: 10,
          marginRight: 5
        }}
      >
        <View style={styles.circle}>
          <View style={{ marginLeft: 13, marginTop: 9 }}>
            <Ionicons name={this.props.icon} color="#9B51E0" size={30} />
          </View>
        </View>
        <Text style={styles.listTitle}> {this.props.content} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  circle: {
    width: 56,
    height: 56,
    borderWidth: 2,
    borderRadius: 200,
    marginTop: 25,
    marginLeft: 12,
    marginBottom: 15,
    borderColor: "#D87FF9"
  },
  listTitle: {
    fontSize: 16,
    lineHeight: 18,
    color: "#F2F2F2"
  }
});
