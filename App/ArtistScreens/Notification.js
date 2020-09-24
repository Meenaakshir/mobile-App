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
import Popover from "react-native-popover-view";
import { Dialog } from "react-native-simple-dialogs";

export default class Notification extends Component {
  constructor() {
    super();
    this.state = {
      dialogVisible: false,
      isVisible: false,
      appleVisible: true,

      buttonRect: {}
    };
    this.onLongPress = this.onLongPress.bind(this);

    //this.onClose = this.onClose.bind(this);
  }

  onRecommendClick() {
    this.setState({ appleVisible: true });

    this.setState({ isVisible: false });
  }

  onLongPress() {
    this.setState({ isVisible: true });
  }

  onClose() {
    this.setState({ isVisible: false });
  }

  showDialog = () => {
    this.setState({ dialogVisible: true });
  };

  handlePress() {
    this.setState({ dialogVisible: false });
  }

  RespondClick() {
    this.setState({ isVisible: false });
    this.props.navigation.navigate("Chat");
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#060A25" }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          style={styles.container}
        >
          <View style={{ flexDirection: "row" }}>
            <View style={styles.circle}>
              <View style={{ marginLeft: 15, marginTop: 7 }}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("Home")}
                >
                  <Ionicons name="md-arrow-dropleft" color="white" size={30} />
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <Text style={styles.titleText}>Notifications</Text>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Isai")}
          >
            <View
              style={{
                width: 411,
                height: 100,
                backgroundColor: "#141A45"
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "white",
                  marginLeft: 10,
                  marginRight: 60,
                  marginTop: 20,
                  lineHeight: 20
                }}
              >
                Events
              </Text>
              <View style={{ flexDirection: "row", marginTop: 10 }}>
                <Image
                  source={require("../assets/Isai.png")}
                  style={{
                    width: 37,
                    height: 37,
                    borderRadius: 200
                  }}
                />
                <Text style={styles.notiText}>Accepted to Isai Festival</Text>
              </View>
            </View>
          </TouchableOpacity>

          {this.state.appleVisible ? (
            <TouchableOpacity
              ref={ref => (this.touchable = ref)}
              onPress={this.onLongPress}
              style={styles.button}
            >
              <View
                style={{
                  width: 411,
                  height: 100,
                  backgroundColor: "#141A45"
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    color: "white",
                    marginLeft: 10,
                    marginRight: 60,
                    marginTop: 20,
                    lineHeight: 20
                  }}
                >
                  Sponsors
                </Text>
                <View style={{ flexDirection: "row", marginTop: 10 }}>
                  <Image
                    source={require("../assets/Saree.jpg")}
                    style={{
                      width: 37,
                      height: 37,
                      borderRadius: 200
                    }}
                  />
                  <Text style={styles.notiText}>Kungumam Sarees</Text>
                </View>
              </View>
            </TouchableOpacity>
          ) : null}

          <Popover
            isVisible={this.state.isVisible}
            fromRect={this.state.buttonRect}
            onRequestClose={() => this.onClose()}
          >
            {/* <Dialog visible={this.state.dialogVisible}> */}

            <View
              style={{
                width: 350,
                height: 220,
                backgroundColor: "#330066"
              }}
            >
              <TouchableOpacity onPress={() => this.onRecommendClick()}>
                <View style={{ marginTop: 10, marginLeft: 12 }}>
                  <Ionicons name="md-close" color="white" size={20} />
                </View>
              </TouchableOpacity>

              <Text style={styles.DialogText}>
                Congratulations, Kungumam Inc. is interested in sponsoring your
                music video for Best Friends
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  width: 350,
                  height: 70,
                  backgroundColor: "#281f34"
                }}
              >
                <View>
                  <Image
                    source={require("../assets/Shan1.png")}
                    style={{
                      width: 50,
                      height: 50,
                      marginHorizontal: 12,
                      marginTop: 12
                    }}
                  />
                </View>
                <View
                  style={{
                    flexDirection: "column"
                  }}
                >
                  <Text style={styles.SongName}>Best Friends</Text>
                  <Text style={styles.Sponcer}> Shan</Text>
                </View>
                <View style={{ marginTop: 15, marginLeft: 75 }}>
                  <Ionicons name="md-play" color="#ccccff" size={30} />
                </View>
              </View>
              <TouchableOpacity onPress={() => this.RespondClick()}>
                <View
                  style={{
                    width: 104,
                    height: 32,
                    borderRadius: 30,
                    backgroundColor: "#6B03D3",
                    marginLeft: 120,
                    marginTop: 10
                  }}
                >
                  <Text
                    style={{
                      fontSize: 14,
                      color: "white",
                      marginLeft: 20,
                      marginTop: 5
                    }}
                  >
                    {" "}
                    Respond{" "}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </Popover>

          <View style={{ flexDirection: "row", marginTop: 30 }}>
            <View style={{ flexDirection: "column" }}>
              <View style={styles.notiCircle}>
                <View style={{ marginLeft: 5, marginTop: 5 }}>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate("Home")}
                  >
                    <Ionicons name="md-trending-up" color="#55EE1F" size={24} />
                  </TouchableOpacity>
                </View>
              </View>
              <View>
                <Text style={styles.notiDay}> Today </Text>
              </View>
            </View>
            <View>
              <Text style={styles.notiText}>
                <Text>Your track ‘Heaven’ has gained more than</Text>
                <Text style={{ fontWeight: "bold" }}> 1,000</Text>
                <Text> listens on Spotify</Text>
              </Text>
            </View>
          </View>
          <View style={styles.line}></View>

          <View style={{ flexDirection: "row", marginTop: 30 }}>
            <View style={{ flexDirection: "column" }}>
              <TouchableOpacity>
                <Image
                  source={require("../assets/Ellipse16.png")}
                  style={{
                    width: 37,
                    height: 37,
                    borderRadius: 200
                  }}
                />
              </TouchableOpacity>

              <View>
                <Text style={styles.notiDay}> 2d ago </Text>
              </View>
            </View>
            <View>
              <Text style={styles.notiText}>
                <Text style={{ fontWeight: "bold" }}>Carol Vargas</Text>
                <Text>and 4 others have become your fans</Text>
              </Text>
            </View>
          </View>
          <View style={styles.CylinderSeeAll}>
            <Text style={styles.CylinderText}> See all </Text>
            <View style={{ marginLeft: 10, marginTop: 4 }}>
              <Ionicons name="md-arrow-dropright" color="#D87FF9" size={22} />
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
                <Text style={{ fontWeight: "bold" }}>DJ Sharrad</Text>
                <Text>
                  {" "}
                  has sent you a promotion request for Good Vibes Sensation
                  Party
                </Text>
              </Text>
            </View>
          </View>
          <View style={styles.CylinderSeeRequest}>
            <Text style={styles.CylinderText}> View </Text>
            <View style={{ marginLeft: 10, marginTop: 4 }}>
              <Ionicons name="md-arrow-dropright" color="#D87FF9" size={22} />
            </View>
          </View>
          <View style={styles.line}></View>
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
  SongName: {
    marginLeft: 55,
    marginTop: 10,
    fontSize: 16,
    fontWeight: "500",
    color: "white",
    lineHeight: 24
  },
  Sponcer: {
    marginLeft: 55,
    marginTop: 5,
    fontSize: 16,
    fontWeight: "normal",
    color: "gray",
    lineHeight: 18
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
    borderRadius: 200
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
    marginLeft: 12
  },
  DialogText: {
    marginTop: 7,
    color: "#C0A6C0",
    fontSize: 16,
    fontWeight: "normal",
    lineHeight: 18,
    fontStyle: "normal",
    marginLeft: 15,
    marginBottom: 10
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
    marginLeft: 20,
    color: "#D87FF9",
    fontSize: 14,
    fontWeight: "normal",
    lineHeight: 16,
    fontStyle: "normal",
    marginTop: 8
  },
  CylinderSeeAll: {
    flexDirection: "row",
    width: 104,
    height: 32,
    borderRadius: 26,
    backgroundColor: "#360673",
    marginBottom: 10,
    marginLeft: 150
  },
  CylinderSeeRequest: {
    flexDirection: "row",
    textAlign: "center",
    width: 102,
    height: 32,
    borderRadius: 26,
    backgroundColor: "#360673",
    marginBottom: 10,
    marginLeft: 150
  }
});
