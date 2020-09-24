import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

export default class Album extends Component {
  render() {
    return (
      <View style={{ flexDirection: "row" }}>
        <Image
          source={this.props.SongURI}
          style={{
            width: 100,
            height: 100,
            marginLeft: 30,
            marginBottom: 10
          }}
        />
        <View style={{ flexDirection: "column", marginLeft: 20 }}>
          <Text style={styles.SongName}> {this.props.SongName} </Text>
          <Text style={styles.CoArtist}>{this.props.CoArtist} </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  SongName: {
    fontSize: 18,
    fontWeight: "500",
    color: "white",
    lineHeight: 24
  },
  CoArtist: {
    marginLeft: 5,
    marginTop: 5,
    fontSize: 16,
    fontWeight: "normal",
    color: "gray",
    lineHeight: 18
  }
});
