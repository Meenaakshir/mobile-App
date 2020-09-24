import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  KeyboardAvoidingView
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";

const { height, width } = Dimensions.get("window");

export default class Login extends Component {
  componentDidMount() {
    Font.loadAsync({
      "ultra-regular": require("../../assets/fonts/Ultra-Regular.ttf")
    });
  }
  render() {
    return (
      <ImageBackground
        source={require("../assets/AR.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <Text style={styles.Title}> maajja </Text>
        <Text style={styles.textTitle}> build your music tribe</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Home")}
        >
          <View style={styles.CylinderLogin}>
            <Text
              style={{
                fontSize: 18,
                lineHeight: 18,
                fontWeight: "500",
                color: "#FFFFFF",
                textAlign: "center",
                marginTop: 16
              }}
            >
              Login
            </Text>
          </View>
        </TouchableOpacity>

        <View style={{ flexDirection: "row", marginLeft: 25 }}>
          <View style={styles.line}></View>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "normal",
              color: "#BDBDBD",
              textAlign: "center",
              marginTop: 20
            }}
          >
            {"   "}
            OR{"   "}
          </Text>
          <View style={styles.line}></View>
        </View>
        <TouchableOpacity>
          <View style={styles.CylinderAccount}>
            <Text
              style={{
                fontSize: 18,
                lineHeight: 18,
                fontWeight: "normal",
                color: "#D87FF9",
                textAlign: "center",
                marginTop: 17
              }}
            >
              Create an account
            </Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  Title: {
    width: 251,
    height: 56,
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: 32,
    lineHeight: 37,
    textAlign: "center",
    letterSpacing: 9,
    marginTop: 235,
    marginLeft: 80,
    color: "#FFFFFF"
  },
  textTitle: {
    width: 379,
    height: 47,
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: 24,
    lineHeight: 31,
    textAlign: "center",
    marginTop: 10,
    marginLeft: 16,
    color: "#F2994A"
  },
  CylinderLogin: {
    width: 350,
    height: 52,
    borderRadius: 30,
    marginLeft: 25,
    backgroundColor: "#9B51E0",
    marginTop: 180
  },
  line: {
    marginTop: 30,
    height: 2,
    width: 150,
    backgroundColor: "#5D387E"
  },
  CylinderAccount: {
    width: 350,
    height: 52,
    borderRadius: 26,
    marginLeft: 25,
    backgroundColor: "#360673",
    marginTop: 20
  }
});
