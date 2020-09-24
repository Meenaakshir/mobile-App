import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Artist from "../components/Explore/Artist";
import ArtistCover from "../assets/Rectangle28.svg";
import { BlurView } from "expo-blur";
const { height, width } = Dimensions.get("window");

export default class Profile extends Component {
  constructor() {
    super();
    this.state = {
      value: "I'm interested"
    };
  }

  onClick() {
    this.setState({ value: "Interest Sent" });
  }

  render() {
    return (
      <View
        style={{ flex: 1, backgroundColor: "#060A26", fontFamily: "Roboto" }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
        >
          <View>
            <Image
              source={require("../assets/Rectangle28.png")}
              style={{
                width: 411,
                height: 320
              }}
            />
          </View>

          <View style={styles.imageContainer}>
            <Image
              style={{
                width: 82,
                height: 82,
                borderRadius: 200,
                marginLeft: 100
              }}
              source={require("../assets/ShanArtist.png")}
            />
            <View style={{ marginTop: 4 }}>
              <Text style={styles.BioText}>Shan Vincent de Paul</Text>
              <Text style={styles.Bioproffession}>Hip Hop / RnB</Text>
              <Text style={styles.Bioplace}>Toronto . Mumbai</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginTop: 5
              }}
            >
              <View style={{ flexDirection: "row", marginLeft: 60 }}>
                <Text style={styles.BioViewCount}>12.1 K</Text>
                <Text style={styles.Bio}> FANS</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  marginLeft: 30
                }}
              >
                <Text style={styles.BioViewCount}>23</Text>
                <Text style={styles.Bio}> TRACKS</Text>
              </View>
            </View>
          </View>

          <View style={{ backgroundColor: "#141A45", marginTop: 30 }}>
            <Text style={styles.BioTitle}> Bio </Text>
            <Text style={styles.BioAbout}>
              Shan Vincent de Paul is a Canadian recording artist and director
              from Toronto, Ontario. Paul released his debut album "Saviors" in
              2016 and his sophomore album "Tigger Happy Heartbreak" along with
              an EP "SVDP 1" in 2017.
            </Text>
            <View style={styles.Cylinder}>
              <Text
                style={{
                  fontSize: 14,
                  color: "#D87FF9",
                  textAlign: "center",
                  marginTop: 6
                }}
              >
                {" "}
                Read more{" "}
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: "row" }}>
            <View style={styles.CylinderActivity}>
              <Text
                style={{
                  fontSize: 14,
                  color: "#9F68E2",
                  textAlign: "center",
                  marginTop: 6
                }}
              >
                Status
              </Text>
            </View>

            <View style={styles.CylinderInActivity}>
              <Text
                style={{
                  fontSize: 14,
                  color: "#D0C1E4",
                  textAlign: "center",
                  marginTop: 6
                }}
              >
                Your Activity
              </Text>
            </View>

            <View style={styles.CylinderInActivity}>
              <Text
                style={{
                  fontSize: 14,
                  color: "#D0C1E4",
                  textAlign: "center",
                  marginTop: 6
                }}
              >
                Past Events
              </Text>
            </View>

            <View style={styles.CylinderInActivity}>
              <Text
                style={{
                  fontSize: 14,
                  color: "#D0C1E4",
                  textAlign: "center",
                  marginTop: 6
                }}
              >
                Press
              </Text>
            </View>
          </View>
          <View
            style={{
              marginLeft: -260,
              marginTop: 30,
              marginBottom: 10
            }}
          >
            <Text style={styles.BioText}> Last 7 days </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flexDirection: "column", width: 110, margin: 10 }}>
              <Text style={styles.No}> 45 </Text>
              <Text style={styles.noDescription}> fans gained </Text>
            </View>
            <View style={{ flexDirection: "column", width: 110, margin: 10 }}>
              <Text style={styles.No}> 802 </Text>
              <Text style={styles.noDescription}> streams </Text>
            </View>
            <View style={{ flexDirection: "column", width: 110, margin: 10 }}>
              <Text style={styles.No}> 20 </Text>
              <Text style={styles.noDescription}> events posted </Text>
            </View>
          </View>
          <View style={{ marginLeft: -280, marginTop: 20, marginBottom: 20 }}>
            <Text style={styles.BioText}> Audience </Text>
          </View>
          <View
            style={{ flexDirection: "row", marginLeft: 15, marginBottom: 10 }}
          >
            <View style={styles.line1}></View>
            <Text style={styles.No}> 54% </Text>
          </View>
          <Text style={styles.gender}> Male </Text>
          <View
            style={{ flexDirection: "row", marginLeft: 15, marginBottom: 10 }}
          >
            <View style={styles.line2}></View>
            <Text style={styles.No}> 42% </Text>
          </View>
          <Text style={styles.gender}> Female </Text>
          <View style={{ flexDirection: "row", marginLeft: 15 }}>
            <View style={styles.line3}></View>
            <Text style={styles.No}> 4% </Text>
          </View>
          <Text style={styles.gender}> Other </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("PromoterHome")}
          >
            <View style={styles.CylinderPromoter}>
              <Text
                style={{
                  fontSize: 16,
                  color: "#D87FF9",
                  textAlign: "center",
                  marginTop: 6
                }}
              >
                Switch to Promoter view
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>

        <View style={{ position: "absolute", marginTop: 30, marginLeft: 330 }}>
          <View style={{ marginLeft: 15, marginTop: 9 }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Home")}
            >
              <Ionicons name="md-create" color="white" size={25} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  circle: {
    width: 45,
    height: 45,
    borderRadius: 200,
    marginTop: -280,
    marginLeft: 330
  },
  imageContainer: {
    flex: 0.6,
    marginLeft: 45,
    marginTop: -260,
    width: 300,
    height: 220
  },
  titleText: {
    marginTop: 8,
    color: "#F2F2F2",
    fontSize: 32,
    fontWeight: "bold",
    lineHeight: 37,
    fontStyle: "normal"
  },
  CylinderPromoter: {
    marginBottom: 20,
    width: 200,
    height: 40,
    borderRadius: 30,
    marginLeft: 100,
    backgroundColor: "#360673"
  },
  BioText: {
    textAlign: "center",
    color: "#F2F2F2",
    fontSize: 21,
    fontWeight: "bold",
    lineHeight: 25,
    fontStyle: "normal"
  },
  Bioproffession: {
    textAlign: "center",
    marginTop: 4,
    color: "#F2994A",
    fontSize: 16,
    fontWeight: "normal",
    lineHeight: 19,
    fontStyle: "normal"
  },
  BioViewCount: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 19,
    fontStyle: "normal"
  },
  Bio: {
    color: "#BDBDBD",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 19,
    fontStyle: "normal"
  },
  BioTitle: {
    marginTop: 20,
    marginLeft: 10,
    color: "#F2F2F2",
    fontSize: 21,
    fontWeight: "500",
    lineHeight: 21,
    fontStyle: "normal"
  },
  Bioplace: {
    textAlign: "center",
    marginTop: 7,
    color: "#BDBDBD",
    fontSize: 16,
    fontWeight: "normal",
    lineHeight: 19,
    fontStyle: "normal"
  },
  BioAbout: {
    margin: 15,
    textAlign: "justify",
    color: "#E0E0E0",
    fontSize: 16,
    fontWeight: "normal",
    lineHeight: 21,
    fontStyle: "normal",
    width: 370,
    height: 105
  },
  Cylinder: {
    width: 97,
    height: 32,
    borderRadius: 26,
    marginLeft: 150,
    backgroundColor: "#360673",
    marginBottom: 20
  },
  CylinderActivity: {
    width: 85,
    height: 32,
    borderRadius: 26,
    marginLeft: 12,
    backgroundColor: "#F4EFFA",
    marginTop: 20
  },
  CylinderInActivity: {
    width: 85,
    height: 32,
    borderRadius: 26,
    marginLeft: 12,
    backgroundColor: "#060A26",
    marginTop: 20
  },
  No: {
    marginTop: -8,
    fontWeight: "500",
    lineHeight: 25,
    fontStyle: "normal",
    color: "#F2994A",
    fontSize: 21
  },
  noDescription: {
    fontWeight: "normal",
    lineHeight: 16,
    fontStyle: "normal",
    color: "#BDBDBD",
    fontSize: 14
  },
  line1: {
    width: 176,
    height: 8,
    backgroundColor: "#BB6BD9",
    marginRight: 15
  },
  gender: {
    fontWeight: "normal",
    lineHeight: 16,
    fontStyle: "normal",
    color: "#BDBDBD",
    fontSize: 14,
    marginLeft: 10,
    marginBottom: 35
  },
  line2: {
    width: 136,
    height: 8,
    backgroundColor: "#BB6BD9",
    marginRight: 15
  },
  line3: {
    width: 9,
    height: 8,
    backgroundColor: "#BB6BD9",
    marginRight: 15
  }
});
