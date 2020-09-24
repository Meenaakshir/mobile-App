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

export default class Event extends Component {
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
      <View style={{ flex: 1, fontFamily: "Roboto" }}>
        <ScrollView
          style={styles.Container}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
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
              source={require("../assets/band8.jpg")}
              style={{
                width: 416,
                height: 250
              }}
            />
            <Image
              source={require("../assets/band1.png")}
              style={{
                width: 416,
                height: 250
              }}
            />
            <Image
              source={require("../assets/band2.png")}
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
            <Text style={styles.dateSize}> 16 May </Text>
          </View>

          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Delhi Red Bull SoundClash 2020</Text>
          </View>
          <TouchableOpacity onPress={this.showDialog}>
            <View
              style={{ flexDirection: "row", marginTop: 10, marginLeft: 15 }}
            >
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
              <Text style={styles.promoter}> Wizcraft </Text>
            </View>
          </TouchableOpacity>
          <View>
            <View
              style={{ flexDirection: "row", marginTop: 15, marginLeft: 10 }}
            >
              <Text style={styles.listPlace}>Matchmeter</Text>
              <Text style={styles.matchNo}>84%</Text>
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
            <Match icon="md-navigate" content="  < 50km    " />
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
              <Text style={styles.listPlace}>Fri, May 16, 2020</Text>
              <Text style={styles.listArea}>08:00PM - 01:00AM</Text>
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
                Sir Shankar Lal Concert Hall{" "}
              </Text>
              <Text style={styles.listArea}>400 Road Lane, Goa</Text>
            </View>
          </View>

          <Image
            source={require("../assets/event-location.png")}
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
              Join your friends for a night to remember and celebrate a line-up
              of up-and-coming artists and performers that you’ll be sure not to
              forget.
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
              <Artist ArtImg={require("../assets/fan1.jpg")} name="KRISH" />
              <Artist ArtImg={require("../assets/singer1.jpg")} name="ANITHA" />
              <Artist ArtImg={require("../assets/fan3.jpg")} name="SHREE" />
              <Artist ArtImg={require("../assets/singer2.jpg")} name="RITHU" />
            </ScrollView>
          </View>

          <View style={{ flexDirection: "row" }}>
            <View style={{ marginTop: 30 }}>
              <TagSuggestion Suggestion="Cultural" />
            </View>
            <View style={{ marginTop: 30 }}>
              <TagSuggestion Suggestion="Intimate" />
            </View>
            <View style={{ marginTop: 30 }}>
              <TagSuggestion Suggestion="Indoors" />
            </View>
          </View>
          <View style={{ flexDirection: "row", marginBottom: 120 }}>
            <View style={{ marginLeft: 55, marginTop: 30 }}>
              <TagSuggestion Suggestion="Cover" />
            </View>
            <View style={{ marginTop: 30 }}>
              <TagSuggestion Suggestion="Contemporary" />
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            marginLeft: 20,
            marginTop: 50,
            flexDirection: "row",
            position: "absolute"
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
            <Ionicons name="md-heart" color="red" size={28} />
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginTop: 690,
            marginLeft: 15,
            position: "absolute"
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
  Container: {
    backgroundColor: "#060A25"
  },
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
  contactText: {
    color: "#414141",
    fontSize: 16,
    fontWeight: "normal",
    lineHeight: 16,
    fontStyle: "normal"
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
    opacity: 0.8,
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
  Wizline: {
    width: 300,
    height: 2,
    backgroundColor: "#E0E0E0",
    marginTop: 30,
    marginBottom: 30
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
