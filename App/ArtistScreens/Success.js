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
  Animated,
  Dimensions,
  KeyboardAvoidingView
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Category from "../components/Explore/Category";
import ConcertList from "../components/Explore/ConcertList";
import Feeds from "../components/Explore/Feeds";
import Cylinder from "../components/Explore/Cylinder";
import FanRequest from "../components/Explore/FanRequest";
import BrandList from "../components/Explore/BrandList";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Cower from "../assets/bg-pattern1.svg";
import Bower from "../assets/bg-pattern2.svg";
import RecommendList from "../components/Explore/RecommendList";

const { height, width } = Dimensions.get("window");

export default class Success extends Component {
  render() {
    return (
      <View style={{ backgroundColor: "#060A26", flex: 1 }}>
        <Cower style={{ opacity: 0.3 }} />
        <View style={styles.circle}>
          <View style={{ marginLeft: 12, marginTop: 7 }}>
            <Ionicons name="md-checkmark" color="#55EE1F" size={38} />
          </View>
        </View>

        <Text style={styles.message}>EVERYDAY YOU’RE HUSTLIN’ </Text>
        <View style={{ width: 224, height: 65, marginLeft: 75 }}>
          <Text style={styles.successMessage}>
            Your interest has been submitted!
          </Text>
        </View>
        <View style={{ marginTop: 300 }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Home")}
          >
            <View style={styles.CylinderSubmit}>
              <Text
                style={{
                  fontSize: 18,
                  lineHeight: 18,
                  color: "#FFFFFF",
                  marginLeft: 120,
                  marginTop: 15
                }}
              >
                Back to home
              </Text>
            </View>
            <Bower
              style={{
                opacity: 0.2,
                marginTop: -200
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  message: {
    fontSize: 16,
    fontWeight: "normal",
    lineHeight: 19,
    fontStyle: "normal",
    textAlign: "center",
    letterSpacing: 3,
    color: "#828282",
    marginTop: 15
  },
  successMessage: {
    fontSize: 24,
    fontWeight: "normal",
    lineHeight: 28,
    fontStyle: "normal",
    textAlign: "center",
    color: "#FFFFFF",
    marginTop: 50
  },
  circle: {
    width: 56,
    height: 56,
    borderRadius: 200,
    borderColor: "#55EE1F",
    borderWidth: 2,
    marginTop: -80,
    marginLeft: 180
  },
  CylinderSubmit: {
    flexDirection: "row",
    width: 360,
    height: 50,
    borderRadius: 26,
    marginLeft: 15,
    backgroundColor: "#9B51E0"
  },
  Container: {
    backgroundColor: "#E5E5E5"
  },
  list: {
    flexDirection: "row",
    marginTop: 5
  }
});
