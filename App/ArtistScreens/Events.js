import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Artist from "../components/Explore/Artist";
import ConcertList from "../components/Explore/ConcertList";
import RecommendList from "../components/Explore/RecommendList";

export default class Events extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#060A25" }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          style={styles.container}
        >
          <View style={{ flexDirection: "row" }}>
            <View style={{ marginLeft: 15, marginTop: 7 }}></View>
            <View>
              <Text style={styles.titleText}>Events</Text>
            </View>
            <View style={styles.circle}>
              <View style={{ marginLeft: 10, marginTop: 7 }}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("Home")}
                >
                  <Ionicons name="md-options" color="#BDBDBD" size={30} />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <Text style={styles.venue}> Venue Types </Text>
          <View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{ marginLeft: -17, marginTop: 15 }}
            >
              <Artist
                ArtImg={require("../assets/Ellipse10.png")}
                name="Stadium"
              />
              <Artist
                ArtImg={require("../assets/Ellipse11.png")}
                name="Beach"
              />
              <Artist
                ArtImg={require("../assets/Ellipse12.png")}
                name="Traditional"
              />
              <Artist
                ArtImg={require("../assets/Ellipse13.png")}
                name="Intimate"
              />
            </ScrollView>
            <Text style={styles.venue}> Your upcoming events </Text>
            <View>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("Isai")}
                >
                  <ConcertList
                    FeedsImg={require("../assets/Isai1.jpg")}
                    date="23 Feb"
                    title="Global Isai Festival 2020"
                    place="Phoenix MarketCity, Velacherry Main Road"
                    country="Chennai, TamilNadu"
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("EventSignup")}
                >
                  <ConcertList
                    FeedsImg={require("../assets/band1.png")}
                    date="16 May"
                    title="Delhi Red Bull SoundClash 2020"
                    place="Sir Shankar Lal Concert Hall"
                    country="Delhi"
                  />
                </TouchableOpacity>
              </ScrollView>
            </View>

            <Text style={styles.venue}> Recommended for you </Text>
            <View>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{ marginTop: 10 }}
              >
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("Humma")}
                >
                  <RecommendList
                    FeedsImg={require("../assets/humma.png")}
                    date="24 July"
                    title="Humma 2020"
                    place="YMCA Grounds, Nandanam "
                    country="Tamil Nadu"
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("SongDetail")}
                >
                  <RecommendList
                    FeedsImg={require("../assets/band2.png")}
                    date="16 May"
                    title="Our Music Lights The World"
                    place="Shree Sai Narayana Concert Mahal"
                    country="Karnataka"
                  />
                </TouchableOpacity>
              </ScrollView>
            </View>

            <Text style={styles.venue}> Close to you - within 50km</Text>
            <View>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={styles.list}
              >
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("SongDetail")}
                >
                  <ConcertList
                    FeedsImg={require("../assets/band8.jpg")}
                    date="16 May"
                    title="Delhi Red Bull SoundClash 2020"
                    place="Sir Shankar Lal Concert Hall"
                    country="Delhi"
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("SongDetail")}
                >
                  <RecommendList
                    FeedsImg={require("../assets/band2.png")}
                    date="16 May"
                    title="Our Music Lights The World"
                    place="Shree Sai Narayana Concert Mahal"
                    country="Karnataka"
                  />
                </TouchableOpacity>
              </ScrollView>
            </View>
          </View>
        </ScrollView>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Home")}
          style={{ position: "absolute", marginTop: 60, marginLeft: 20 }}
        >
          <Ionicons name="md-arrow-dropleft" color="#F4EFFA" size={30} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
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
    marginRight: 150
  },
  circle: {
    width: 45,
    height: 45,
    borderRadius: 200
  },
  venue: {
    color: "#F2F2F2",
    fontSize: 21,
    fontWeight: "500",
    lineHeight: 25,
    fontStyle: "normal",
    marginTop: 20
  },
  list: {
    marginBottom: 60
  }
});
