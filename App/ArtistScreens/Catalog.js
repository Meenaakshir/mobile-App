import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity
} from "react-native";
import Album from "../components/Explore/Album";
import { Ionicons } from "@expo/vector-icons";

export default class Catalog extends Component {
  constructor() {
    super();
    this.state = {
      textDecorationLine: "underline"
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false} Vertical={true}>
          <View style={{ flexDirection: "row", marginBottom: 30 }}>
            <TouchableOpacity>
              <Text style={styles.swipeText}>
                <Text
                  style={{
                    textDecorationLine: this.state.textDecorationLine,
                    color: "white"
                  }}
                >
                  {" "}
                  Playlists
                </Text>
              </Text>
            </TouchableOpacity>
            <Text style={styles.swipeText}> Albums </Text>
            <Text style={styles.swipeText}> Musics </Text>
            <Text style={styles.swipeText}> Videos </Text>
          </View>

          <Album
            SongURI={require("../assets/Img1.png")}
            SongName="Prey (feat)"
            CoArtist="Hannes Smith"
          />

          <Album
            SongURI={require("../assets/DestructiomnShan.jpg")}
            SongName="Destruction"
            CoArtist="Yanchan"
          />

          <Album
            SongURI={require("../assets/HeavenShan.jpg")}
            SongName="Heaven"
            CoArtist="Navz-47"
          />

          <Album
            SongURI={require("../assets/WantyouShan.jpg")}
            SongName="Want You"
            CoArtist="Yanchan"
          />

          <Album
            SongURI={require("../assets/Mridangam.jpg")}
            SongName="Mridangam"
            CoArtist="Yanchan"
          />

          <Album
            SongURI={require("../assets/Rectangle20.png")}
            SongName="Doomsday"
            CoArtist="La+ch"
          />
        </ScrollView>
        <View style={styles.Add}>
          <View style={{ marginLeft: 20, marginTop: 10 }}>
            <Ionicons name="md-add" color="#ccccff" size={50} />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            height: 70,
            backgroundColor: "#281f34"
          }}
        >
          <View style={{ marginTop: 15, marginLeft: 20 }}>
            <Ionicons name="md-heart" color="#ccccff" size={30} />
          </View>
          <View
            style={{
              flexDirection: "column"
            }}
          >
            <Text style={styles.SongName}> Prey (feat. Hannes Smith)</Text>
            <Text style={styles.Sponcer}> Devices Avilable</Text>
          </View>

          <View style={{ marginTop: 15, marginLeft: 40 }}>
            <Ionicons name="md-play" color="#ccccff" size={30} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#060A25"
  },
  SongName: {
    marginLeft: 45,
    marginTop: 10,
    fontSize: 18,
    fontWeight: "500",
    color: "white",
    lineHeight: 24
  },
  swipeText: {
    marginTop: 80,
    marginLeft: 20,
    fontSize: 18,
    fontWeight: "bold",
    color: "gray",
    lineHeight: 18
  },
  Add: {
    position: "absolute",
    marginLeft: 300,
    width: 70,
    height: 70,
    borderRadius: 200,
    backgroundColor: "#360673",
    marginTop: 550,
    marginBottom: 10
  },
  Sponcer: {
    marginLeft: 55,
    marginTop: 5,
    fontSize: 16,
    fontWeight: "normal",
    color: "gray",
    lineHeight: 18
  }
});
