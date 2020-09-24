import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
  Animated,
  Dimensions,
  KeyboardAvoidingView
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Category from "../components/Explore/Category";
import ConcertList from "../components/Explore/ConcertList";
import Feeds from "../components/Explore/Feeds";
import Cylinder from "../components/Explore/Cylinder";
import FanRequest from "../components/Explore/FanRequest";
import BrandList from "../components/Explore/BrandList";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Bower from "../assets/bg-pattern.svg";
import RecommendList from "../components/Explore/RecommendList";

const { height, width } = Dimensions.get("window");

class PromoterHome extends Component {
  constructor() {
    super();
    this.state = {
      childVisible: false,
      upcomingButtonVisible: true,
      recommendButtonVisible: false
    };
  }

  onRecommendClick() {
    this.setState({ childVisible: true });
    this.setState({ upcomingButtonVisible: false });
    this.setState({ recommendButtonVisible: true });
  }

  onUpcomingClick() {
    this.setState({ childVisible: false });
    this.setState({ upcomingButtonVisible: true });
    this.setState({ recommendButtonVisible: false });
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <ScrollView
            style={styles.Container}
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={16}
            // onScroll={Animated.event([
            //   { nativeEvent: { contentOffset: { y: this.scrollY } } }
            // ])}
          >
            <View style={{ flex: 1, backgroundColor: "#060A25" }}>
              <Bower />
              <View style={{ flexDirection: "row", marginTop: -170 }}>
                <View style={{ marginLeft: 15 }}>
                  <Text style={{ color: "#ccccff", fontSize: 18 }}>
                    Welcome back,
                  </Text>
                  <Text style={{ color: "white", fontSize: 20 }}>Wizcraft</Text>
                </View>

                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate("PromoterNotification")
                  }
                >
                  <View style={{ marginLeft: 190 }}>
                    <View style={{ marginLeft: 12, marginTop: 7 }}>
                      <Ionicons
                        name="md-notifications"
                        color="#9F68E2"
                        size={30}
                      />
                      <View
                        style={{
                          width: 20,
                          height: 20,
                          borderRadius: 200,
                          backgroundColor: "#E64040",
                          marginTop: -37,
                          marginLeft: 13
                        }}
                      >
                        <Text
                          style={{
                            color: "white",
                            fontWeight: "bold",
                            textAlign: "center"
                          }}
                        >
                          2
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{ marginLeft: 10, marginTop: 40 }}>
                {/* Category */}

                <View>
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
                        Your Events
                      </Text>
                      <TouchableOpacity
                        onPress={() => this.props.navigation.navigate("Events")}
                      >
                        <Cylinder content="See all" />
                      </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      {this.state.upcomingButtonVisible ? null : (
                        <TouchableOpacity
                          onPress={() => this.onUpcomingClick()}
                        >
                          <View style={styles.cylinderEventUnpress}>
                            <Text
                              style={{
                                fontSize: 14,
                                lineHeight: 16,
                                marginLeft: 6,
                                marginTop: 7,
                                color: "#D0C1E4"
                              }}
                            >
                              {" "}
                              Upcoming
                            </Text>
                          </View>
                        </TouchableOpacity>
                      )}
                      {this.state.upcomingButtonVisible ? (
                        <TouchableOpacity
                          onPress={() => this.onUpcomingClick()}
                        >
                          <View style={styles.cylinderEventPressed}>
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
                        </TouchableOpacity>
                      ) : null}

                      {this.state.recommendButtonVisible ? (
                        <TouchableOpacity>
                          <View style={styles.cylinderRecommendPressed}>
                            <Text
                              style={{
                                color: "#9F68E2",
                                marginTop: 7,
                                marginLeft: 25,
                                fontSize: 14,
                                lineHeight: 16
                              }}
                            >
                              {" "}
                              Recommended For You
                            </Text>
                          </View>
                        </TouchableOpacity>
                      ) : null}
                      {this.state.recommendButtonVisible ? null : (
                        <TouchableOpacity
                          onPress={() => this.onRecommendClick()}
                        >
                          <View style={styles.cylinderRecommendUnpress}>
                            <Text
                              style={{
                                color: "#D0C1E4",
                                marginTop: 7,
                                marginLeft: 25,
                                fontSize: 14,
                                lineHeight: 16
                              }}
                            >
                              {" "}
                              Recommended For You
                            </Text>
                          </View>
                        </TouchableOpacity>
                      )}
                    </View>

                    <View>
                      <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={styles.list}
                      >
                        {this.state.childVisible ? null : (
                          <TouchableOpacity
                            onPress={() =>
                              this.props.navigation.navigate("Humma")
                            }
                          >
                            <ConcertList
                              FeedsImg={require("../assets/humma.png")}
                              date="24 July"
                              title="Humma 2020"
                              place="YMCA Grounds, Nandanam "
                              country="Tamil Nadu"
                            />
                          </TouchableOpacity>
                        )}
                        {this.state.childVisible ? null : (
                          <TouchableOpacity
                            onPress={() =>
                              this.props.navigation.navigate("Event")
                            }
                          >
                            <ConcertList
                              FeedsImg={require("../assets/Rectangle4.png")}
                              date="25 June"
                              title="Summer Beach Bash"
                              place="Sir Shankar Lal Concert Hall"
                              country="Goa"
                            />
                          </TouchableOpacity>
                        )}
                      </ScrollView>
                    </View>

                    <View>
                      <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={{ flexDirection: "row", marginTop: 12 }}
                      >
                        {this.state.childVisible ? (
                          <TouchableOpacity
                            onPress={() =>
                              this.props.navigation.navigate("SongDetail")
                            }
                          >
                            <RecommendList
                              FeedsImg={require("../assets/band6.png")}
                              date="09 June"
                              title="Tamil Rockers Club 2020"
                              place="Swarupa Gandhi Memorial Hall"
                              country="Tamil Nadu"
                            />
                          </TouchableOpacity>
                        ) : null}

                        {this.state.childVisible ? (
                          <TouchableOpacity
                            onPress={() =>
                              this.props.navigation.navigate("SongDetail")
                            }
                          >
                            <RecommendList
                              FeedsImg={require("../assets/band2.png")}
                              date="16 May"
                              title="Our Music Lights The World"
                              place="Shree Sai Narayana Concert Mahal"
                              country="Karnataka"
                            />
                          </TouchableOpacity>
                        ) : null}
                      </ScrollView>
                    </View>
                  </View>
                </View>

                <View
                  style={{
                    marginTop: 10
                  }}
                >
                  <Text
                    style={{
                      color: "#F2F2F2",
                      fontSize: 21,
                      fontWeight: "500",
                      lineHeight: 25
                    }}
                  >
                    {"   "}
                    Fan Requests
                  </Text>
                  <FanRequest
                    FansImg={require("../assets/fan3.jpg")}
                    cost="2000"
                    RequestTitle="Birthday Wish"
                    Request="My sister’s birthday is coming up and she would be thrilled if she got a birthday song from you :)"
                  />
                  <View style={styles.line}></View>
                  <FanRequest
                    FansImg={require("../assets/fan2.jpg")}
                    cost="500"
                    RequestTitle="Autograph"
                    Request="Love your records, Shan! It’d mean a lot to get your autograph on a vinyl 😍"
                  />
                  <TouchableOpacity>
                    <View style={styles.CylinderSubmit}>
                      <Text
                        style={{
                          fontSize: 14,
                          color: "#D87FF9",
                          marginLeft: 150,
                          marginTop: 6
                        }}
                      >
                        {" "}
                        See all{" "}
                      </Text>
                      <View style={{ marginLeft: 10, marginTop: 6 }}>
                        <Ionicons
                          name="md-arrow-dropright"
                          color="#D87FF9"
                          size={20}
                        />
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>

                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={{
                      fontSize: 21,
                      fontWeight: "500",
                      color: "white",
                      marginLeft: 10,
                      marginRight: 60,
                      marginTop: 40,
                      lineHeight: 25
                    }}
                  >
                    Your Brand Power
                  </Text>
                  <View style={{ marginTop: 40 }}>
                    <Cylinder content="See all" />
                  </View>
                </View>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  style={styles.list}
                >
                  <BrandList
                    imageURI={require("../assets/Apple.png")}
                    brandname="Apple Music"
                    capacity="720"
                    percent="12"
                  />
                  <BrandList
                    imageURI={require("../assets/spotify.png")}
                    brandname="Spotify"
                    capacity="20345"
                    percent="10"
                  />
                  <BrandList
                    imageURI={require("../assets/insta.png")}
                    brandname="Instagram"
                    capacity="1152"
                    percent="2"
                  />
                </ScrollView>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

export default PromoterHome;

const styles = StyleSheet.create({
  cylinderEvent: {
    width: 88,
    height: 32,
    borderRadius: 26,
    marginTop: 10,
    backgroundColor: "white"
  },
  cylinderEventPressed: {
    width: 88,
    height: 32,
    borderRadius: 26,
    marginTop: 10,
    backgroundColor: "white"
  },
  cylinderEventUnpress: {
    width: 88,
    height: 32,
    borderRadius: 26,
    marginTop: 10
  },
  cylinderRecommendUnpress: {
    width: 200,
    height: 32,
    borderRadius: 26,
    marginTop: 10,
    marginLeft: 10
  },
  cylinderRecommendPressed: {
    width: 200,
    height: 32,
    borderRadius: 26,
    marginTop: 10,
    marginLeft: 10,
    backgroundColor: "white"
  },
  line: {
    width: 370,
    height: 0.2,
    backgroundColor: "#C4C4C4"
  },
  circle: {
    width: 45,
    height: 45,
    borderRadius: 200
  },
  cylinder: {
    flexDirection: "row",
    width: 100,
    height: 40,
    borderRadius: 100,
    marginLeft: 40,
    marginTop: -5,
    backgroundColor: "#661aff"
  },
  CylinderSubmit: {
    flexDirection: "row",
    width: 360,
    height: 40,
    borderRadius: 26,
    marginLeft: 7,
    backgroundColor: "#360673"
  },
  Container: {
    backgroundColor: "#E5E5E5"
  },
  list: {
    flexDirection: "row",
    marginTop: 5
  }
});
