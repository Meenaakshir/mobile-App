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
import Chart from "../assets/chart.svg";
import RecommendList from "../components/Explore/RecommendList";
import Swiper from "react-native-swiper";

const { height, width } = Dimensions.get("window");

class Home extends Component {
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
                <Text style={{ color: "white", fontSize: 20 }}>Shan</Text>
              </View>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Notification")}
              >
                <View style={{ marginLeft: 190 }}>
                  <View style={{ marginLeft: 12, marginTop: 7 }}>
                    <Ionicons
                      name="md-notifications-outline"
                      color="#ccccff"
                      size={30}
                    />
                    <View
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: 200,
                        backgroundColor: "#E64040",
                        marginTop: -37,
                        marginLeft: 12
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
            <View style={{ marginLeft: 10, marginTop: 45 }}>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    fontSize: 21,
                    fontWeight: "500",
                    lineHeight: 25,
                    paddingHorizontal: 6,
                    color: "white",
                    marginRight: 30
                  }}
                >
                  Your Trending Tracks
                </Text>
                <Cylinder content="See all" />
              </View>

              {/* Category */}
              <View>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  style={styles.list}
                >
                  <TouchableOpacity>
                    <Category
                      imageUri={require("../assets/Img1.png")}
                      name="Thank God"
                      count="1,567"
                      percent="6"
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Category
                      imageUri={require("../assets/Trigger.jpg")}
                      name="Trigger Happy Heartbreak"
                      count="4,500"
                      percent="9"
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Category
                      imageUri={require("../assets/Shan1.png")}
                      name="Best Friends"
                      count="2,209"
                      percent="8"
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Category
                      imageUri={require("../assets/Mridangam.jpg")}
                      name="SVDP 2"
                      count="8109"
                      percent="5"
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Category
                      imageUri={require("../assets/WantyouShan.jpg")}
                      name="Want You"
                      count="9,906"
                      percent="7"
                    />
                  </TouchableOpacity>
                </ScrollView>
              </View>
              {/* Feeds */}
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
                      <TouchableOpacity onPress={() => this.onUpcomingClick()}>
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
                      <TouchableOpacity onPress={() => this.onUpcomingClick()}>
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
                      <TouchableOpacity onPress={() => this.onRecommendClick()}>
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
                      )}

                      {this.state.childVisible ? null : (
                        <TouchableOpacity
                          onPress={() =>
                            this.props.navigation.navigate("Event")
                          }
                        >
                          <ConcertList
                            FeedsImg={require("../assets/band8.jpg")}
                            date="16 May"
                            title="Delhi Red Bull SoundClash 2020"
                            place="Sir Shankar Lal Concert Hall"
                            country="Delhi"
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
                            FeedsImg={require("../assets/band1.png")}
                            date="16 May"
                            title="Delhi Red Bull SoundClash 2020"
                            place="Sir Shankar Lal Concert Hall"
                            country="Delhi"
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
                            this.props.navigation.navigate("Humma")
                          }
                        >
                          <RecommendList
                            FeedsImg={require("../assets/humma.png")}
                            date="24 July"
                            title="Humma 2020"
                            place="YMCA Grounds, Nandanam "
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

              <View>
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
                <TouchableOpacity
                  style={{ marginLeft: -10 }}
                  onPress={() => this.props.navigation.navigate("Home")}
                >
                  <View style={styles.CylinderSubmit}>
                    <Text
                      style={{
                        fontSize: 14,
                        color: "#D87FF9",
                        marginLeft: 150,
                        marginTop: 8
                      }}
                    >
                      {" "}
                      See all{" "}
                    </Text>
                    <View style={{ marginLeft: 10, marginTop: 8 }}>
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
                    lineHeight: 25,
                    marginBottom: 10
                  }}
                >
                  Your Brand Power
                </Text>
              </View>

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
                <View>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "normal",
                      color: "white",
                      marginLeft: 10,
                      marginRight: 60,
                      marginTop: 25,
                      lineHeight: 18
                    }}
                  >
                    Your total monthly listens are up
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      marginTop: 35,
                      marginLeft: 40
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "normal",
                        color: "white",
                        lineHeight: 18
                      }}
                    >
                      Feb
                    </Text>
                    <View
                      style={{
                        flexDirection: "column"
                      }}
                    >
                      <View
                        style={{
                          height: 8,
                          width: 260,
                          backgroundColor: "#F2994A",
                          borderRadius: 8,
                          marginLeft: 15
                        }}
                      ></View>
                      <View
                        style={{
                          height: 8,
                          width: 198,
                          backgroundColor: "#D87FF9",
                          borderRadius: 8,
                          marginLeft: 15,
                          marginTop: 10
                        }}
                      ></View>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      marginTop: 25,
                      marginLeft: 40
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "normal",
                        color: "white",
                        lineHeight: 18
                      }}
                    >
                      Jan
                    </Text>
                    <View
                      style={{
                        flexDirection: "column"
                      }}
                    >
                      <View
                        style={{
                          height: 8,
                          width: 237,
                          backgroundColor: "#F2994A",
                          borderRadius: 8,
                          marginLeft: 15
                        }}
                      ></View>
                      <View
                        style={{
                          height: 8,
                          width: 156,
                          backgroundColor: "#D87FF9",
                          borderRadius: 8,
                          marginLeft: 15,
                          marginTop: 10
                        }}
                      ></View>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      marginTop: 25,
                      marginLeft: 40
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "normal",
                        color: "white",
                        lineHeight: 18
                      }}
                    >
                      Dec
                    </Text>
                    <View
                      style={{
                        flexDirection: "column"
                      }}
                    >
                      <View
                        style={{
                          height: 8,
                          width: 183,
                          backgroundColor: "#F2994A",
                          borderRadius: 8,
                          marginLeft: 15
                        }}
                      ></View>
                      <View
                        style={{
                          height: 8,
                          width: 183,
                          backgroundColor: "#D87FF9",
                          borderRadius: 8,
                          marginLeft: 15,
                          marginTop: 10
                        }}
                      ></View>
                    </View>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      marginTop: 40,
                      marginLeft: 100
                    }}
                  >
                    <View
                      style={{
                        width: 8,
                        height: 8,
                        backgroundColor: "#F2994A",
                        marginLeft: 15
                      }}
                    ></View>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: "normal",
                        color: "#BDBDBD",
                        lineHeight: 14,
                        marginLeft: 8
                      }}
                    >
                      Listens
                    </Text>
                    <View
                      style={{
                        width: 8,
                        height: 8,
                        backgroundColor: "#D87FF9",
                        marginLeft: 25
                      }}
                    ></View>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: "normal",
                        color: "#BDBDBD",
                        lineHeight: 14,
                        marginLeft: 8
                      }}
                    >
                      Fans
                    </Text>
                  </View>
                </View>

                <View>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "normal",
                      color: "white",
                      marginLeft: 10,
                      marginRight: 60,
                      marginTop: 25,
                      lineHeight: 18
                    }}
                  >
                    Your most popular platforms
                  </Text>
                  <View
                    style={{
                      marginTop: 50,
                      marginLeft: 25
                    }}
                  >
                    <Chart />
                  </View>
                </View>

                <View>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "normal",
                      color: "white",
                      marginLeft: 10,
                      marginRight: 60,
                      marginTop: 25,
                      lineHeight: 18
                    }}
                  >
                    Your fan base
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      marginLeft: 70,
                      marginTop: 50
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "column"
                      }}
                    >
                      <Text style={styles.fanBaseNo}>240,105</Text>
                      <Text style={styles.fanBaseText}>Total fans</Text>
                    </View>
                    <View
                      style={{
                        width: 2,
                        height: 177,
                        backgroundColor: "#2F3777",
                        marginTop: -20,
                        marginLeft: 25
                      }}
                    ></View>
                    <View
                      style={{
                        flexDirection: "column",
                        marginLeft: 40
                      }}
                    >
                      <Text style={styles.fanBaseNo}>23</Text>
                      <Text style={styles.fanBaseText}>Average Age</Text>
                    </View>
                  </View>

                  <View
                    style={{
                      height: 2,
                      width: 283,
                      backgroundColor: "#2F3777",
                      marginTop: -85,
                      marginLeft: 50
                    }}
                  ></View>
                  <View
                    style={{
                      flexDirection: "row",
                      marginLeft: 70,
                      marginTop: 30
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "column"
                      }}
                    >
                      <Text style={styles.fanBaseNo}>58 %</Text>
                      <Text style={styles.fanBaseText}>Female</Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "column",
                        marginLeft: 100
                      }}
                    >
                      <Text style={styles.fanBaseNo}>16</Text>
                      <Text style={styles.fanBaseText}>Countries</Text>
                    </View>
                  </View>
                </View>
              </Swiper>
            </View>

            <TouchableOpacity
              style={{ marginTop: 20 }}
              onPress={() => this.props.navigation.navigate("Brand")}
            >
              <View style={styles.CylinderSubmit}>
                <Text
                  style={{
                    fontSize: 14,
                    color: "#D87FF9",
                    marginLeft: 130,
                    marginTop: 8
                  }}
                >
                  View Details
                </Text>
                <View style={{ marginLeft: 13, marginTop: 8 }}>
                  <Ionicons
                    name="md-arrow-dropright"
                    color="#D87FF9"
                    size={20}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB"
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5"
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9"
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
    height: 0.1,
    backgroundColor: "#C4C4C4"
  },
  circle: {
    width: 45,
    height: 45,
    borderRadius: 200,
    backgroundColor: "#ccccff"
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
    marginLeft: 20,
    backgroundColor: "#360673",
    marginBottom: 40
  },
  Container: {
    backgroundColor: "#E5E5E5"
  },
  list: {
    flexDirection: "row",
    marginTop: 20
  },
  wrapper: {
    width: 411,
    height: 332,
    backgroundColor: "#141A45"
  },

  fanBaseNo: {
    fontSize: 28,
    fontWeight: "normal",
    color: "#F2994A",
    lineHeight: 27
  },
  fanBaseText: {
    fontSize: 16,
    fontWeight: "normal",
    color: "#BDBDBD",
    lineHeight: 18
  }
});
