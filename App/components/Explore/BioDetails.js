import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { height, width } = Dimensions.get("window");

export default class BioDetails extends Component {
  render() {
    return (
      <View style={styles.rect}>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={this.props.FansImg}
            style={{
              width: 80,
              height: 132,
              borderRadius: 8,
              marginTop: 15,
              marginLeft: 15
            }}
          />
          <View style={{ marginLeft: 17, marginTop: 7 }}>
            <Text style={styles.BioText}>Shan Vincent de Paul</Text>
            <Text style={styles.Bioproffession}>Hip Hop / RnB</Text>
            <Text style={styles.Bioplace}>Toronto . Mumbai</Text>
            <View style={{ flexDirection: "row", marginTop: 20 }}>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.Bioproffession}>12.1 K</Text>
                <Text style={styles.Bioplace}> FANS</Text>
              </View>
              <View style={{ flexDirection: "row", marginLeft: 10 }}>
                <Text style={styles.Bioproffession}>23</Text>
                <Text style={styles.Bioplace}> TRACKS</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rect: {
    marginLeft: 15,
    marginTop: 10,
    width: 370,
    height: 164,
    backgroundColor: "#141A45",
    borderRadius: 8
  },
  BioText: {
    marginTop: 12,
    color: "#F2F2F2",
    fontSize: 18,
    fontWeight: "500",
    lineHeight: 21,
    fontStyle: "normal"
  },
  Bioproffession: {
    marginTop: 7,
    color: "#F2994A",
    fontSize: 16,
    fontWeight: "normal",
    lineHeight: 19,
    fontStyle: "normal"
  },
  Bioplace: {
    marginTop: 7,
    color: "#BDBDBD",
    fontSize: 16,
    fontWeight: "normal",
    lineHeight: 19,
    fontStyle: "normal"
  }
});
