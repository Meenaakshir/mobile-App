import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default class Chat extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            marginTop: 60,
            marginLeft: 20,
            height: 50
          }}
        >
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Notification")}
          >
            <View style={{ marginLeft: 10 }}>
              <Ionicons name="md-arrow-back" color="black" size={28} />
            </View>
          </TouchableOpacity>
          <Image
            source={require("../assets/Saree.jpg")}
            style={{
              width: 40,
              height: 40,
              borderRadius: 200,
              marginHorizontal: 20
            }}
          />
          <Text style={styles.notiText}>Kungumam Sarees</Text>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          style={{ backgroundColor: "#404040", height: 400 }}
        >
          <View style={styles.sponcerText}>
            <Text style={styles.DialogText}>
              Congratulations, Kungumam Inc. is interested in sponsoring your
              music video for Best Friends
            </Text>
          </View>
          <View style={{ marginLeft: 10 }}>
            <View style={styles.chat}></View>
          </View>
          <View style={styles.artistText}>
            <Text style={styles.DialogText}>Thank you</Text>
          </View>
          <View>
            <View style={styles.artistChat}></View>
          </View>
        </ScrollView>
        <View style={{ backgroundColor: "#9966ff" }}>
          <View
            style={{
              marginLeft: 14,
              marginTop: 20,
              marginBottom: 20,
              flexDirection: "row"
            }}
          >
            <View
              style={{
                marginLeft: 20,
                width: 300,
                height: 30,
                borderWidth: 2,
                backgroundColor: "white",
                borderRadius: 30,
                marginRight: 20
              }}
            ></View>
            <Ionicons name="md-send" color="black" size={28} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9966ff"
  },
  sponcerText: {
    marginTop: 30,
    marginLeft: 20,
    width: 250,
    height: 90,
    backgroundColor: "white"
  },
  artistText: {
    marginTop: 30,
    marginLeft: 170,
    width: 200,
    height: 60,
    backgroundColor: "white"
  },
  DialogText: {
    marginTop: 7,
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 18,
    fontStyle: "normal",
    marginLeft: 15,
    marginBottom: 10
  },
  chat: {
    marginTop: -20,
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderBottomWidth: 10,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "white",
    transform: [{ rotate: "-90deg" }]
  },
  artistChat: {
    marginLeft: 370,
    marginTop: -20,
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderBottomWidth: 10,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "white",
    transform: [{ rotate: "90deg" }]
  },
  notiText: {
    marginTop: 10,
    width: 318,
    height: 38,
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 19,
    fontStyle: "normal"
  }
});
