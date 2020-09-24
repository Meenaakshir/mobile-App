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
import Popover from "react-native-popover-view";
const { height, width } = Dimensions.get("window");

export default class BrandPower extends Component {
  constructor() {
    super();
    this.state = {
      value: "Submit Interest",
      isVisible: false,
      appleVisible: true,

      buttonRect: {}
    };
    this.onLongPress = this.onLongPress.bind(this);

    //this.onClose = this.onClose.bind(this);
  }

  onRecommendClick() {
    this.setState({ appleVisible: false });

    this.setState({ isVisible: false });
  }

  onLongPress() {
    this.setState({ isVisible: true });
  }

  onClose() {
    this.setState({ isVisible: false });
  }
  render() {
    return (
      <View>
        {this.state.appleVisible ? (
          <TouchableOpacity
            ref={ref => (this.touchable = ref)}
            onLongPress={this.onLongPress}
            style={styles.button}
          >
            <View>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "500",
                  color: "white",
                  marginLeft: 10,
                  marginRight: 60,
                  marginTop: 20,
                  lineHeight: 20
                }}
              >
                {" "}
                {this.props.BrandName}{" "}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  marginLeft: 20,
                  marginTop: 10,
                  height: 100,
                  width: 330,
                  backgroundColor: "#253080"
                }}
              >
                <Image
                  source={this.props.BrandURI}
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 10,
                    marginLeft: 30,
                    marginTop: 20
                  }}
                />
                <View>
                  <Text style={styles.brandName}>{this.props.Brand} </Text>
                  <Text style={styles.capacity}> {this.props.Plays} </Text>
                  <View style={{ flexDirection: "row" }}>
                    <View style={styles.triangle}></View>
                    <Text style={styles.triText}>{this.props.Percent}</Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ) : null}

        <Popover
          isVisible={this.state.isVisible}
          fromRect={this.state.buttonRect}
          onRequestClose={() => this.onClose()}
        >
          <TouchableOpacity onPress={() => this.onRecommendClick()}>
            <View style={styles.delete}>
              <View style={{ marginLeft: 14, marginTop: 8 }}>
                <Ionicons name="md-close" color="white" size={36} />
              </View>
            </View>
          </TouchableOpacity>
        </Popover>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  triText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#55EE1F",
    lineHeight: 16,
    marginTop: 8
  },

  triangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 6,
    borderRightWidth: 6,
    borderBottomWidth: 10,
    borderBottomColor: "#7FC566",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    marginTop: 10,
    marginRight: 3,
    marginLeft: 20
  },
  brandName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#F2F2F2",
    lineHeight: 18,
    marginTop: 15,
    marginLeft: 20
  },
  delete: {
    width: 50,
    height: 50,
    backgroundColor: "#141A45",
    borderRadius: 200
  },
  capacity: {
    fontSize: 14,
    fontWeight: "300",
    color: "#E0E0E0",
    lineHeight: 16,
    marginTop: 8,
    marginLeft: 20
  }
});
