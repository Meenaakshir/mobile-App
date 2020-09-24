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
import Swiper from "react-native-swiper";
import TagSuggestion from "../components/Explore/TagSuggestion";
import ColorBand from "../assets/colorBand.svg";
import Match from "../components/Explore/matchCriteria";
import DialogueScreen from "../components/Explore/DialogueScreen";

const { height, width } = Dimensions.get("window");

export default class Isai extends Component {
  constructor() {
    super();
    this.state = {
      value: "Withdraw",
      dialogVisible: false
    };
  }

  showDialog = () => {
    this.setState({ dialogVisible: true });
  };

  onClick() {
    this.setState({ value: "Withdrawn" });
  }

  handlePress() {
    this.setState({ dialogVisible: false });
  }

  render() {
    return (
      <View
        style={{ flex: 1, backgroundColor: "#060A25", fontFamily: "Roboto" }}
      >
        <ScrollView
          style={styles.Container}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          // onScroll={Animated.event([
          //   { nativeEvent: { contentOffset: { y: this.scrollY } } }
          // ])}
        >
          <Swiper
            loadMinimalSize={1}
            style={styles.wrapper}
            loop={false}
            dot={
              <View
                style={{
                  backgroundColor: "rgba(255,255,255,.3)",
                  width: 8,
                  height: 8,
                  borderRadius: 7,
                  marginLeft: 7,
                  marginRight: 7
                }}
              />
            }
            activeDot={
              <View
                style={{
                  backgroundColor: "#fff",
                  width: 8,
                  height: 8,
                  borderRadius: 7,
                  marginLeft: 7,
                  marginRight: 7
                }}
              />
            }
          >
            <Image
              source={require("../assets/Isai1.jpg")}
              style={{
                width: 416,
                height: 250
              }}
            />
            <Image
              source={require("../assets/Isai2.jpg")}
              style={{
                width: 416,
                height: 250
              }}
            />
            <Image
              source={require("../assets/Isai3.jpg")}
              style={{
                width: 416,
                height: 250
              }}
            />
          </Swiper>

          <DialogueScreen
            visible={this.state.dialogVisible}
            onPress={() => this.handlePress()}
          />

          <View style={styles.cylinderDate}>
            <Text style={styles.dateSize}> 14 July </Text>
          </View>

          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Global Isai Festival 2020</Text>
          </View>
          <TouchableOpacity onPress={this.showDialog}>
            <View style={{ flexDirection: "row", marginLeft: 15 }}>
              <Text style={styles.titlePromote}> Promoted by</Text>
              <View>
                <Image
                  source={require("../assets/wizz.png")}
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 200,
                    marginLeft: 10
                  }}
                />
              </View>
              <Text style={styles.promoter}> Maajja </Text>
            </View>
          </TouchableOpacity>
          <View>
            <View
              style={{ flexDirection: "row", marginTop: 15, marginLeft: 10 }}
            >
              <Text style={styles.listPlace}>Matchmeter</Text>
              <Text style={styles.matchNo}>80%</Text>
            </View>
            <View
              style={{ flexDirection: "row", marginLeft: 15, marginTop: 10 }}
            >
              <View
                style={{
                  height: 15,
                  width: 224,
                  borderRadius: 30,
                  borderColor: "#360673",
                  borderWidth: 2,
                  marginRight: 40
                }}
              >
                <ColorBand
                  style={{
                    marginTop: -14,
                    marginLeft: -14
                  }}
                />
              </View>
              <Text style={styles.listTitle}>Great match</Text>
            </View>
          </View>

          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ flexDirection: "row" }}
          >
            <Match icon="md-navigate" content="  < 20km    " />
            <Match icon="md-sunny" content="Outdoor party" />
            <Match icon="md-musical-notes" content="Great lineup " />
            <Match icon="md-heart" content=" Audience fit" />
          </ScrollView>

          <View style={styles.line}></View>

          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <View style={{ marginLeft: 20 }}>
              <Ionicons name="md-calendar" color="#D0C1E4" size={18} />
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text style={styles.listPlace}>Sun, Feb 23, 2020</Text>
              <Text style={styles.listArea}>11:00AM - 02:00PM</Text>
            </View>
            <View style={styles.cylinder}>
              <Text
                style={{
                  fontSize: 14,
                  color: "#D87FF9",
                  marginLeft: 15,
                  marginTop: 6
                }}
              >
                {" "}
                Check Calender{" "}
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: "row", marginTop: 20 }}>
            <View style={{ marginLeft: 20 }}>
              <Ionicons name="md-pin" color="#D0C1E4" size={18} />
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text style={styles.listPlace}>
                Phoenix MarketCity, Velacherry Main Road{" "}
              </Text>
              <Text style={styles.listArea}>Chennai, TamilNadu</Text>
            </View>
          </View>

          <Image
            source={require("../assets/Phoenix.png")}
            style={{
              width: 411,
              height: 280,
              marginTop: 20,
              marginBottom: 10
            }}
          />

          <View style={{ marginLeft: 15 }}>
            <Text style={styles.descriptionTitle}>Description</Text>
            <Text style={styles.description}>
              The Global Isai Festival is back with an eclectic mix of artists
              from countries like India, Spain, France and US. The 9th edition
              of the festival has everything to do with music, dance art and an
              exotic flea market
            </Text>
          </View>

          <View style={styles.list}>
            <Text style={styles.descriptionTitle}>Featuring Artists</Text>
          </View>

          <View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <Artist
                ArtImg={require("../assets/Isai02.jpg")}
                name="Viku Vinayagam"
              />
              <Artist
                ArtImg={require("../assets/Isai1.png")}
                name="SelveGanesh"
              />
              <Artist
                ArtImg={require("../assets/Isai03.jpg")}
                name="Maneli Jamal"
              />
              <Artist ArtImg={require("../assets/Isai04.jpg")} name="Roshan" />
            </ScrollView>
          </View>

          <View
            style={{ flexDirection: "row", marginTop: 30, marginBottom: 120 }}
          >
            <View>
              <TagSuggestion Suggestion="Hip-Hop" />
            </View>
            <View>
              <TagSuggestion Suggestion="R&B" />
            </View>
            <View>
              <TagSuggestion Suggestion="Outdoors" />
            </View>
            <View>
              <TagSuggestion Suggestion="Summer" />
            </View>
          </View>
        </ScrollView>

        <View
          style={{
            position: "absolute",
            marginLeft: 20,
            marginTop: 50,
            flexDirection: "row"
          }}
        >
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Home")}
          >
            <View style={{ width: 56, height: 56 }}>
              <Ionicons name="md-arrow-dropleft" color="white" size={32} />
            </View>
          </TouchableOpacity>
          <View style={{ marginLeft: 270 }}>
            <Ionicons name="md-heart" color="white" size={28} />
          </View>
        </View>

        <View
          style={{
            position: "absolute",
            flexDirection: "row",
            marginTop: 650,
            marginLeft: 15
          }}
        >
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 200,
              backgroundColor: "#FFFFFF"
            }}
          >
            <View style={{ marginLeft: 15, marginTop: 12 }}>
              <Ionicons name="md-share" color="#9B51E0" size={26} />
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              {
                this.onClick();
              }
            }}
          >
            <View style={styles.CylinderSubmit}>
              <Text
                style={{
                  fontSize: 18,
                  color: "#FFFFFF",
                  marginLeft: 100,
                  marginTop: 10
                }}
              >
                {" "}
                {this.state.value}{" "}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: 25,
    width: 379,
    height: 75,
    left: 16
  },
  titleText: {
    marginTop: 8,
    color: "#F2F2F2",
    fontSize: 30,
    fontWeight: "bold",
    lineHeight: 32,
    fontStyle: "normal"
  },
  titlePromote: {
    color: "#E0E0E0",
    fontSize: 16,
    fontWeight: "normal",
    lineHeight: 24,
    fontStyle: "normal"
  },
  CylinderSubmit: {
    flexDirection: "row",
    marginLeft: 15,
    width: 305,
    height: 50,
    borderRadius: 30,
    backgroundColor: "#9B51E0",
    marginBottom: 20
  },
  descriptionTitle: {
    color: "#F2F2F2",
    fontSize: 21,
    fontWeight: "500",
    lineHeight: 21,
    fontStyle: "normal",
    marginTop: 20
  },
  description: {
    color: "#E0E0E0",
    fontSize: 16,
    fontWeight: "normal",
    lineHeight: 24,
    fontStyle: "normal",
    marginTop: 5
  },
  promoter: {
    color: "#D87FF9",
    marginLeft: 5,
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 24,
    fontStyle: "normal"
  },
  cylinder: {
    width: 131,
    height: 32,
    borderRadius: 26,
    marginLeft: 70,
    marginTop: 5,
    backgroundColor: "#360673"
  },
  square: {
    backgroundColor: "#141A45",
    width: 304,
    height: 272,
    borderRadius: 20,
    elevation: 6,
    marginVertical: 12
  },
  wrapper: {
    width: 416,
    height: 250
  },
  cylinderDate: {
    width: 75,
    height: 32,
    borderRadius: 8,
    marginTop: -40,
    marginLeft: 20,
    opacity: 0.6,
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
  line: {
    width: 370,
    height: 2,
    backgroundColor: "#141A45",
    marginTop: 30,
    marginBottom: 30,
    marginLeft: 10
  },
  matchNo: {
    marginLeft: 200,
    color: "#F2994A",
    fontSize: 24,
    fontWeight: "bold",
    lineHeight: 24,
    fontStyle: "normal"
  },
  listTitle: {
    fontSize: 16,
    lineHeight: 18,
    color: "#F2F2F2"
  },
  list: {
    marginHorizontal: 15,
    marginVertical: 20
  },
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

  listPlace: {
    fontSize: 16,
    color: "#BDBDBD",
    lineHeight: 24,
    fontWeight: "normal",
    fontStyle: "normal",
    marginLeft: 10,
    marginTop: -4
  },
  listArea: {
    fontSize: 16,
    color: "#828282",
    lineHeight: 24,
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
  }
});

const shadowOpt = {
  width: 110,
  height: 50,
  color: "#681BCA",
  border: 0,
  radius: 20,
  opacity: 0.2,
  x: -10,
  y: -3.5,
  style: { marginVertical: 5 }
};
