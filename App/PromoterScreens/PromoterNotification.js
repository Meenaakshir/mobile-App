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

export default class PromoterNotification extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#060A25" }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          style={styles.container}
        >
          <View style={{ marginLeft: 6 }}>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.circle}>
                <View style={{ marginLeft: 15, marginTop: 7 }}>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate("PromoterHome")
                    }
                  >
                    <Ionicons
                      name="md-arrow-dropleft"
                      color="#9B51E0"
                      size={30}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View>
                <Text style={styles.titleText}>Notifications</Text>
              </View>

              <View style={{ marginTop: 7 }}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("PromoterHome")}
                >
                  <Text style={styles.clear}> Clear all</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{ flexDirection: "row", marginTop: 50 }}>
              <View style={{ flexDirection: "column" }}>
                <View>
                  <Image
                    source={require("../assets/ShanArtist.png")}
                    style={{
                      width: 37,
                      height: 37,
                      borderRadius: 200,
                      borderWidth: 2,
                      borderColor: "#BB6BD9"
                    }}
                  />
                  <View
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: 200,
                      backgroundColor: "#E64040",
                      marginTop: -45,
                      marginLeft: -6
                    }}
                  ></View>
                </View>
                <View>
                  <Text style={styles.notiDay}> Today </Text>
                </View>
              </View>

              <View>
                <Text style={styles.notiText}>
                  <Text style={{ fontWeight: "bold" }}>
                    Shan Vincent de Paul{" "}
                  </Text>
                  <Text>
                    {" "}
                    has submitted interest in your event, Summer Beach Bash
                  </Text>
                </Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate("PromoterEventSignup")
              }
            >
              <View style={styles.CylinderSeeAll}>
                <Text style={styles.CylinderText}> View </Text>
              </View>
            </TouchableOpacity>
            <View style={styles.line}></View>

            <View style={{ flexDirection: "row", marginTop: 30 }}>
              <View style={{ flexDirection: "column" }}>
                <View style={styles.notiCircle}>
                  <View style={{ marginLeft: 5, marginTop: 5 }}>
                    <TouchableOpacity
                      onPress={() => this.props.navigation.navigate("Home")}
                    >
                      <Ionicons
                        name="md-trending-up"
                        color="#55EE1F"
                        size={24}
                      />
                    </TouchableOpacity>
                  </View>
                </View>

                <View>
                  <Text style={styles.notiDay}> 2d ago </Text>
                </View>
              </View>
              <View>
                <Text style={styles.notiText}>
                  <Text>You have reached a lifetime milestone of </Text>
                  <Text style={{ fontWeight: "bold" }}>5,000</Text>
                  <Text>fans at events. Great job!</Text>
                </Text>
              </View>
            </View>

            <View style={styles.line}></View>

            <View style={{ flexDirection: "row", marginTop: 30 }}>
              <View style={{ flexDirection: "column" }}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("Home")}
                >
                  <Image
                    source={require("../assets/Ellipse17.png")}
                    style={{
                      width: 37,
                      height: 37,
                      borderRadius: 200
                    }}
                  />
                </TouchableOpacity>

                <View>
                  <Text style={styles.notiDay}> last week </Text>
                </View>
              </View>
              <View>
                <Text style={styles.notiText}>
                  <Text style={{ fontWeight: "bold" }}> 50 new events</Text>
                  <Text>have been added</Text>
                </Text>
              </View>
            </View>
            <View style={styles.CylinderSeeRequest}>
              <Text style={styles.CylinderText}> View all </Text>
            </View>
            <View style={styles.line}></View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    marginLeft: 15,
    ...Platform.select({
      ios: {
        fontFamily: "Arial"
      },
      android: {
        fontFamily: "Roboto"
      }
    })
  },
  titleText: {
    marginTop: 5,
    marginLeft: 17,
    color: "#F2F2F2",
    fontSize: 32,
    fontWeight: "bold",
    lineHeight: 37,
    fontStyle: "normal",
    marginRight: 40
  },
  clear: {
    marginTop: 10,
    color: "#E0E0E0",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 19,
    fontStyle: "normal"
  },
  circle: {
    width: 45,
    height: 45,
    borderRadius: 200,
    backgroundColor: "#FFFFFF"
  },
  notiCircle: {
    width: 37,
    height: 37,
    borderRadius: 200,
    borderWidth: 2,
    borderColor: "#BB6BD9"
  },
  notiText: {
    width: 318,
    height: 38,
    color: "#BDBDBD",
    fontSize: 16,
    fontWeight: "normal",
    lineHeight: 19,
    fontStyle: "normal",
    marginLeft: 12,
    marginBottom: 20
  },
  notiDay: {
    color: "#BDBDBD",
    fontSize: 12,
    fontWeight: "normal",
    lineHeight: 14,
    fontStyle: "normal",
    marginTop: 10
  },
  line: {
    marginTop: 7,
    width: 330,
    marginLeft: 50,
    borderWidth: 1,
    borderColor: "#360673"
  },
  CylinderText: {
    textAlign: "center",
    color: "#D87FF9",
    fontSize: 14,
    fontWeight: "normal",
    lineHeight: 16,
    fontStyle: "normal",
    marginTop: 8
  },
  CylinderSeeAll: {
    textAlign: "center",
    width: 64,
    height: 32,
    borderRadius: 26,
    backgroundColor: "#360673",
    marginBottom: 10,
    marginLeft: 170
  },
  CylinderSeeRequest: {
    textAlign: "center",
    width: 102,
    height: 32,
    borderRadius: 26,
    backgroundColor: "#360673",
    marginBottom: 10,
    marginLeft: 150
  }
});
