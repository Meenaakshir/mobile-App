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
import { Dialog } from "react-native-simple-dialogs";

export default class DialogueScreen extends Component {
  render() {
    return (
      <View>
        <Dialog visible={this.props.visible}>
          <View
            style={{
              width: 500,
              height: 650,
              borderRadius: 100
            }}
          >
            <TouchableOpacity onPress={this.props.onPress}>
              <Ionicons name="md-close" color="black" size={20} />
            </TouchableOpacity>
            <View style={{ flexDirection: "row" }}>
              <View style={{ marginTop: 10 }}>
                <Image
                  source={require("../../assets/wiz.png")}
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 200,
                    marginLeft: 1,
                    marginTop: 1
                  }}
                />
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 24,
                    color: "#414141",
                    lineHeight: 24,
                    fontWeight: "bold",
                    fontStyle: "normal",
                    marginTop: 15
                  }}
                >
                  {"    "}
                  Wizcraft{" "}
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    color: "#828282",
                    lineHeight: 32,
                    fontWeight: "normal",
                    fontStyle: "normal"
                  }}
                >
                  {"      "}Joined Dec, 2019
                </Text>
              </View>
            </View>
            <Text style={styles.notiText}>
              <Text style={{ fontWeight: "bold" }}>120</Text>
              <Text> Events</Text>
            </Text>

            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <View style={{ marginRight: 15 }}>
                <Ionicons name="md-musical-notes" color="black" size={20} />
              </View>
              <Text>Cultural dances, R&B/Hip-Hop, Pop</Text>
            </View>

            <View
              style={{
                height: 40,
                width: 300,
                borderRadius: 30,
                borderColor: "#9B51E0",
                borderWidth: 2,
                marginTop: 30
              }}
            >
              <Text
                style={{
                  color: "#9B51E0",
                  textAlign: "center",
                  marginTop: 5
                }}
              >
                Contact
              </Text>
            </View>
            <View style={styles.Wizline}></View>
            <Text
              style={{
                fontSize: 24,
                color: "#414141",
                lineHeight: 24,
                fontWeight: "500",
                fontStyle: "normal"
              }}
            >
              {" "}
              Bio{" "}
            </Text>
            <Text
              style={{
                width: 320,
                height: 189,
                fontSize: 16,
                color: "#414141",
                lineHeight: 27,
                fontWeight: "500",
                fontStyle: "normal"
              }}
            >
              Wizcraft is one of India’s leading COMMUNICATION & ENTERTAINMENT
              Company, integrating strategy, creativity and technology to
              provide unique experiences. Wizcraft started as a dream of three
              very different, yet extremely enterprising men - Wiz Andre
              Timmins, Wiz Viraf Sarkari & Wiz Sabbas Joseph and today, has
              become a phenomenon in the
            </Text>
            <View
              style={{
                height: 40,
                width: 200,
                borderRadius: 30,
                borderColor: "#9B51E0",
                borderWidth: 2,
                marginTop: 20,
                marginLeft: 45
              }}
            >
              <Text
                style={{
                  color: "#9B51E0",
                  textAlign: "center",
                  marginTop: 5
                }}
              >
                Read more
              </Text>
            </View>
          </View>
        </Dialog>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  notiText: {
    width: 318,
    height: 38,
    color: "#414141",
    fontSize: 18,
    fontWeight: "normal",
    lineHeight: 26,
    fontStyle: "normal",
    marginTop: 15
  },
  Wizline: {
    width: 300,
    height: 2,
    backgroundColor: "#E0E0E0",
    marginTop: 30,
    marginBottom: 30
  }
});
