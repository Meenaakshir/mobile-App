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
import Cylinder from "./Cylinder";
import { BoxShadow } from "react-native-shadow";
import ConcertList from "./ConcertList";

const { height, width } = Dimensions.get("window");

export default class Feeds extends Component {
  render() {
    return (
      <View style={{ marginTop: 40, paddingHorizontal: 10 }}>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              fontSize: 21,
              fontWeight: "500",
              color: "white",
              marginRight: 120,
              lineHeight: 25
            }}
          >
            {this.props.FeedsHeaderText}
          </Text>
          <Cylinder />
        </View>
        <View style={{ flexDirection: "row" }}>
          {/* <BoxShadow setting={shadowOpt}> */}
          <View style={styles.cylinder}>
            <Text
              style={{
                fontSize: 14,
                lineHeight: 16,
                marginLeft: 6,
                marginTop: 7,
                color: "#9F68E2"
              }}
            >
              {" "}
              Upcoming
            </Text>
          </View>
          {/* </BoxShadow> */}
          <Text
            style={{
              color: "#D0C1E4",
              marginTop: 20,
              marginLeft: 25,
              fontSize: 14,
              lineHeight: 16
            }}
          >
            {" "}
            Recommended For You
          </Text>
        </View>
        <View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.list}
          >
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Event")}
            >
              <ConcertList
                FeedsImg={require("../../assets/band8.jpg")}
                date="16 May"
                title="Delhi red Bull SoundClash 2020"
                place="Sir Shankar Lal Concert Hall"
                country="Delhi"
              />
            </TouchableOpacity>
            <ConcertList
              FeedsImg={require("../../assets/band1.png")}
              date="16 May"
              title="Delhi red Bull SoundClash 2020"
              place="Sir Shankar Lal Concert Hall"
              country="Delhi"
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cylinder: {
    width: 88,
    height: 32,
    borderRadius: 26,
    marginTop: 10,
    backgroundColor: "white"
  },
  square: {
    backgroundColor: "#141A45",
    width: 304,
    height: 272,
    borderRadius: 20,
    elevation: 6,
    marginVertical: 12
  },
  cylinderDate: {
    width: 75,
    height: 32,
    borderRadius: 8,
    marginTop: -155,
    marginLeft: 20,
    backgroundColor: "#34395A"
  },
  dateSize: {
    textAlign: "center",
    marginTop: 8,
    color: "#E0E0E0",
    fontSize: 14,
    fontWeight: "bold",
    lineHeight: 16,
    fontStyle: "normal"
  },
  listTitle: {
    fontSize: 16,
    marginLeft: 10,
    color: "#F2F2F2"
  },
  list: {
    marginLeft: -10
  },
  circle: {
    width: 45,
    height: 45,
    borderRadius: 200,
    marginTop: 100,
    marginLeft: 235,
    backgroundColor: "#FFFFFF"
  },

  listPlace: {
    fontSize: 14,
    color: "#BDBDBD",
    lineHeight: 16,
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
