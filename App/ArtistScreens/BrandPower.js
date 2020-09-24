import React, { Component } from "react";
import Carousel, { ParallaxImage } from "react-native-snap-carousel";
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  Platform,
  ScrollView,
  TouchableOpacity,
  Image
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import TrackList from "../components/Explore/TrackList";
import { CardAnimationContext } from "react-navigation-stack";
import Swiper from "react-native-swiper";

const { width: screenWidth } = Dimensions.get("window");

const images = [
  {
    id: "1",
    thumbnail:
      "https://live.staticflickr.com/65535/49572190107_cfef27249e_c.jpg"
  },

  {
    id: "2",
    thumbnail:
      "https://live.staticflickr.com/65535/49572031756_6bc2c996a7_c.jpg"
  },
  {
    id: "3",
    thumbnail:
      "https://live.staticflickr.com/65535/49572257347_5d43dbb09b_c.jpg"
  },
  {
    id: "4",
    thumbnail:
      "https://live.staticflickr.com/65535/49572257777_d9ae08fd3a_c.jpg"
  },
  {
    id: "5",
    thumbnail:
      "https://live.staticflickr.com/65535/49572219997_3913b8f93c_c.jpg"
  }
];

export default class Brand extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagesOne: 0,
      imagesTwo: 0,
      imagesThree: 0
    };
    this._renderItem = this._renderItem.bind(this);
    this.onSnapToItem = this.onSnapToItem.bind(this);
  }

  onSnapToItem(index) {
    this.setState({ imagesOne: index });
    this.setState({ imagesTwo: index });
    this.setState({ imagesThree: index });
  }

  _renderItem({ item, index }, parallaxProps) {
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={{ uri: item.thumbnail }}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.1}
          {...parallaxProps}
        />
      </View>
    );
  }

  expo;
  render() {
    return (
      <View
        style={{ flex: 1, backgroundColor: "#060A25", fontFamily: "Roboto" }}
      >
        <ScrollView
          style={{ marginTop: 20 }}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
        >
          <View>
            <Text style={styles.title}>Brand Power</Text>
          </View>

          <Carousel
            views={images}
            sliderWidth={screenWidth}
            sliderHeight={screenWidth}
            itemWidth={260}
            data={images}
            renderItem={this._renderItem}
            hasParallaxImages={true}
            onSnapToItem={this.onSnapToItem}
          >
            <Image src={require("../assets/Apple.png")} />
          </Carousel>
          {/* <Swiper loadMinimalSize={1} style={styles.wrapper} loop={true}> */}
          {this.state.imagesOne ? null : (
            <View>
              <View style={styles.line}></View>
              <View style={{ flexDirection: "row" }}>
                <View style={styles.verticalLine}></View>
                <View style={{ flexDirection: "column", marginTop: 40 }}>
                  <Text style={styles.views}>1.18m </Text>
                  <Text style={styles.fanCount}>239,321 </Text>
                  <View style={{ flexDirection: "row" }}>
                    <View
                      style={{
                        height: 136,
                        width: 8,
                        backgroundColor: "#F2994A",
                        borderRadius: 8,
                        marginLeft: 0,
                        marginRight: 5,
                        marginTop: 25
                      }}
                    ></View>
                    <View
                      style={{
                        height: 112,
                        width: 8,
                        backgroundColor: "#D87FF9",
                        borderRadius: 8,
                        marginLeft: 10,
                        marginTop: 48
                      }}
                    ></View>
                  </View>
                  <Text style={styles.month}> Dec </Text>
                </View>
                <View style={styles.verticalLine}></View>
                <View style={{ flexDirection: "column", marginTop: 40 }}>
                  <Text style={styles.views}>1.21m </Text>
                  <Text style={styles.fanCount}>238,243 </Text>
                  <View style={{ flexDirection: "row" }}>
                    <View
                      style={{
                        height: 136,
                        width: 8,
                        backgroundColor: "#F2994A",
                        borderRadius: 8,
                        marginLeft: 0,
                        marginRight: 5,
                        marginTop: 25
                      }}
                    ></View>
                    <View
                      style={{
                        height: 112,
                        width: 8,
                        backgroundColor: "#D87FF9",
                        borderRadius: 8,
                        marginLeft: 10,
                        marginTop: 48
                      }}
                    ></View>
                  </View>
                  <Text style={styles.month}> Jan </Text>
                </View>
                <View style={styles.verticalLine}></View>
                <View style={{ flexDirection: "column", marginTop: 40 }}>
                  <Text style={styles.views}>1.23m </Text>
                  <Text style={styles.fanCount}>240,105 </Text>
                  <View style={{ flexDirection: "row" }}>
                    <View
                      style={{
                        height: 136,
                        width: 8,
                        backgroundColor: "#F2994A",
                        borderRadius: 8,
                        marginLeft: 0,
                        marginRight: 5,
                        marginTop: 25
                      }}
                    ></View>
                    <View
                      style={{
                        height: 112,
                        width: 8,
                        backgroundColor: "#D87FF9",
                        borderRadius: 8,
                        marginLeft: 10,
                        marginTop: 48
                      }}
                    ></View>
                  </View>
                  <Text style={styles.month}> Feb </Text>
                </View>
              </View>
              <View style={styles.line}></View>
              <Text style={styles.subtitle}> Recent Changes </Text>

              <Text style={styles.totalFans}> 240,105 </Text>
              <Text style={styles.total}> Total fans </Text>

              <View style={{ flexDirection: "row" }}>
                <View style={styles.box}>
                  <Text style={styles.boxFanCount}>-540</Text>
                  <View
                    style={{
                      flexDirection: "row",
                      marginLeft: 30,
                      marginBottom: 10
                    }}
                  >
                    <Ionicons
                      name="md-arrow-dropdown"
                      color="#F37B9F"
                      size={25}
                    />
                    <Text
                      style={{
                        textAlign: "center",
                        marginTop: 6,
                        color: "#F37B9F",
                        fontSize: 14,
                        lineHeight: 14
                      }}
                    >
                      {"  "}1.2%
                    </Text>
                  </View>
                  <Text style={styles.days}>3-Day</Text>
                  <Text style={styles.days}>Change</Text>
                </View>

                <View style={styles.box}>
                  <Text style={styles.boxFanCount}>{"  "}</Text>
                  <View
                    style={{
                      flexDirection: "row",
                      marginLeft: 30,
                      marginBottom: 10
                    }}
                  >
                    <Ionicons
                      name="md-arrow-dropdown"
                      color="#55EE1F"
                      size={25}
                    />
                    <Text
                      style={{
                        textAlign: "center",
                        marginTop: 6,
                        color: "#55EE1F",
                        fontSize: 14,
                        lineHeight: 14
                      }}
                    >
                      {"  "}3.4%
                    </Text>
                  </View>
                  <Text style={styles.days}>7-Day</Text>
                  <Text style={styles.days}>Change</Text>
                </View>

                <View style={styles.box}>
                  <Text style={styles.boxFanCount}>+6,087</Text>
                  <View
                    style={{
                      flexDirection: "row",
                      marginLeft: 30,
                      marginBottom: 10
                    }}
                  >
                    <Ionicons
                      name="md-arrow-dropdown"
                      color="#55EE1F"
                      size={25}
                    />
                    <Text
                      style={{
                        textAlign: "center",
                        marginTop: 6,
                        color: "#55EE1F",
                        fontSize: 14,
                        lineHeight: 14
                      }}
                    >
                      {"  "}8.4%
                    </Text>
                  </View>
                  <Text style={styles.days}>28-Day</Text>
                  <Text style={styles.days}>Change</Text>
                </View>
              </View>
            </View>
          )}

          {this.state.imagesTwo ? (
            <View>
              <Image
                source={require("../assets/bubble-chart.png")}
                style={{
                  width: 360,
                  height: 320,
                  marginTop: 40,
                  marginLeft: 15
                }}
              />

              <Text style={styles.subtitle}> Recent Changes on Spotify </Text>

              <Text style={styles.totalFans}> 16,101 </Text>
              <Text style={styles.total}> Total followers </Text>

              <View style={{ flexDirection: "row" }}>
                <View style={styles.box}>
                  <Text style={styles.boxFanCount}>-24</Text>
                  <View
                    style={{
                      flexDirection: "row",
                      marginLeft: 30,
                      marginBottom: 10
                    }}
                  >
                    <Ionicons
                      name="md-arrow-dropdown"
                      color="#F37B9F"
                      size={25}
                    />
                    <Text
                      style={{
                        textAlign: "center",
                        marginTop: 6,
                        color: "#F37B9F",
                        fontSize: 14,
                        lineHeight: 14
                      }}
                    >
                      {"  "}0.8%
                    </Text>
                  </View>
                  <Text style={styles.days}>3-Day</Text>
                  <Text style={styles.days}>Change</Text>
                </View>

                <View style={styles.box}>
                  <Text style={styles.boxFanCount}>+566</Text>
                  <View
                    style={{
                      flexDirection: "row",
                      marginLeft: 30,
                      marginBottom: 10
                    }}
                  >
                    <Ionicons
                      name="md-arrow-dropdown"
                      color="#55EE1F"
                      size={25}
                    />
                    <Text
                      style={{
                        textAlign: "center",
                        marginTop: 6,
                        color: "#55EE1F",
                        fontSize: 14,
                        lineHeight: 14
                      }}
                    >
                      {"  "}2.1%
                    </Text>
                  </View>
                  <Text style={styles.days}>7-Day</Text>
                  <Text style={styles.days}>Change</Text>
                </View>

                <View style={styles.box}>
                  <Text style={styles.boxFanCount}>+1,087</Text>
                  <View
                    style={{
                      flexDirection: "row",
                      marginLeft: 30,
                      marginBottom: 10
                    }}
                  >
                    <Ionicons
                      name="md-arrow-dropdown"
                      color="#55EE1F"
                      size={25}
                    />
                    <Text
                      style={{
                        textAlign: "center",
                        marginTop: 6,
                        color: "#55EE1F",
                        fontSize: 14,
                        lineHeight: 14
                      }}
                    >
                      {"  "}6.4%
                    </Text>
                  </View>
                  <Text style={styles.days}>28-Day</Text>
                  <Text style={styles.days}>Change</Text>
                </View>
              </View>
            </View>
          ) : null}
          {this.state.imagesThree ? (
            <View>
              <View style={styles.line}></View>
              <View style={{ flexDirection: "row" }}>
                <View style={styles.verticalLine}></View>
                <View style={{ flexDirection: "column", marginTop: 40 }}>
                  <Text style={styles.views}>1.18m </Text>
                  <Text style={styles.fanCount}>239,321 </Text>
                  <View style={{ flexDirection: "row" }}>
                    <View
                      style={{
                        height: 136,
                        width: 8,
                        backgroundColor: "#F2994A",
                        borderRadius: 8,
                        marginLeft: 0,
                        marginRight: 5,
                        marginTop: 25
                      }}
                    ></View>
                    <View
                      style={{
                        height: 112,
                        width: 8,
                        backgroundColor: "#D87FF9",
                        borderRadius: 8,
                        marginLeft: 10,
                        marginTop: 48
                      }}
                    ></View>
                  </View>
                  <Text style={styles.month}> Dec </Text>
                </View>
                <View style={styles.verticalLine}></View>
                <View style={{ flexDirection: "column", marginTop: 40 }}>
                  <Text style={styles.views}>1.21m </Text>
                  <Text style={styles.fanCount}>238,243 </Text>
                  <View style={{ flexDirection: "row" }}>
                    <View
                      style={{
                        height: 136,
                        width: 8,
                        backgroundColor: "#F2994A",
                        borderRadius: 8,
                        marginLeft: 0,
                        marginRight: 5,
                        marginTop: 25
                      }}
                    ></View>
                    <View
                      style={{
                        height: 112,
                        width: 8,
                        backgroundColor: "#D87FF9",
                        borderRadius: 8,
                        marginLeft: 10,
                        marginTop: 48
                      }}
                    ></View>
                  </View>
                  <Text style={styles.month}> Jan </Text>
                </View>
                <View style={styles.verticalLine}></View>
                <View style={{ flexDirection: "column", marginTop: 40 }}>
                  <Text style={styles.views}>1.23m </Text>
                  <Text style={styles.fanCount}>240,105 </Text>
                  <View style={{ flexDirection: "row" }}>
                    <View
                      style={{
                        height: 136,
                        width: 8,
                        backgroundColor: "#F2994A",
                        borderRadius: 8,
                        marginLeft: 0,
                        marginRight: 5,
                        marginTop: 25
                      }}
                    ></View>
                    <View
                      style={{
                        height: 112,
                        width: 8,
                        backgroundColor: "#D87FF9",
                        borderRadius: 8,
                        marginLeft: 10,
                        marginTop: 48
                      }}
                    ></View>
                  </View>
                  <Text style={styles.month}> Feb </Text>
                </View>
              </View>
              <View style={styles.line}></View>
              <Text style={styles.subtitle}> Recent Changes </Text>

              <Text style={styles.totalFans}> 240,105 </Text>
              <Text style={styles.total}> Total fans </Text>

              <View style={{ flexDirection: "row" }}>
                <View style={styles.box}>
                  <Text style={styles.boxFanCount}>-540</Text>
                  <View
                    style={{
                      flexDirection: "row",
                      marginLeft: 30,
                      marginBottom: 10
                    }}
                  >
                    <Ionicons
                      name="md-arrow-dropdown"
                      color="#F37B9F"
                      size={25}
                    />
                    <Text
                      style={{
                        textAlign: "center",
                        marginTop: 6,
                        color: "#F37B9F",
                        fontSize: 14,
                        lineHeight: 14
                      }}
                    >
                      {"  "}1.2%
                    </Text>
                  </View>
                  <Text style={styles.days}>3-Day</Text>
                  <Text style={styles.days}>Change</Text>
                </View>

                <View style={styles.box}>
                  <Text style={styles.boxFanCount}>{"  "}</Text>
                  <View
                    style={{
                      flexDirection: "row",
                      marginLeft: 30,
                      marginBottom: 10
                    }}
                  >
                    <Ionicons
                      name="md-arrow-dropdown"
                      color="#55EE1F"
                      size={25}
                    />
                    <Text
                      style={{
                        textAlign: "center",
                        marginTop: 6,
                        color: "#55EE1F",
                        fontSize: 14,
                        lineHeight: 14
                      }}
                    >
                      {"  "}3.4%
                    </Text>
                  </View>
                  <Text style={styles.days}>7-Day</Text>
                  <Text style={styles.days}>Change</Text>
                </View>

                <View style={styles.box}>
                  <Text style={styles.boxFanCount}>+6,087</Text>
                  <View
                    style={{
                      flexDirection: "row",
                      marginLeft: 30,
                      marginBottom: 10
                    }}
                  >
                    <Ionicons
                      name="md-arrow-dropdown"
                      color="#55EE1F"
                      size={25}
                    />
                    <Text
                      style={{
                        textAlign: "center",
                        marginTop: 6,
                        color: "#55EE1F",
                        fontSize: 14,
                        lineHeight: 14
                      }}
                    >
                      {"  "}8.4%
                    </Text>
                  </View>
                  <Text style={styles.days}>28-Day</Text>
                  <Text style={styles.days}>Change</Text>
                </View>
              </View>
            </View>
          ) : null}
          {/* </Swiper> */}

          <Text style={styles.subtitle}> Audience Breakdown </Text>
          <View
            style={{
              flexDirection: "row",
              marginLeft: 5
            }}
          >
            <View style={styles.audienceBox}>
              <Text style={styles.month}> {"            "}Gender</Text>
              <View
                style={{
                  flexDirection: "row"
                }}
              >
                <View
                  style={{
                    marginLeft: 10,
                    marginTop: 38
                  }}
                >
                  <Text style={styles.totalpercent}> 39% </Text>
                  <View
                    style={{
                      height: 79,
                      width: 8,
                      backgroundColor: "#F2994A",
                      borderRadius: 8,
                      marginLeft: 30,
                      marginTop: 15,
                      marginBottom: 10
                    }}
                  ></View>
                  <Text style={styles.days}>{"    "}M </Text>
                </View>

                <View
                  style={{
                    marginTop: 16
                  }}
                >
                  <Text style={styles.totalpercent}>58%</Text>
                  <View
                    style={{
                      height: 101,
                      width: 8,
                      backgroundColor: "#F2994A",
                      borderRadius: 8,
                      marginLeft: 25,
                      marginRight: 5,
                      marginTop: 15,
                      marginBottom: 10
                    }}
                  ></View>
                  <Text style={styles.days}>{"   "}F </Text>
                </View>

                <View
                  style={{
                    marginTop: 105
                  }}
                >
                  <Text style={styles.totalpercent}> 3% </Text>
                  <View
                    style={{
                      height: 12,
                      width: 8,
                      backgroundColor: "#F2994A",
                      borderRadius: 8,
                      marginLeft: 25,
                      marginRight: 5,
                      marginTop: 15,
                      marginBottom: 10
                    }}
                  ></View>
                  <Text style={styles.days}>{"    "}Other</Text>
                </View>
              </View>
            </View>
            <View style={styles.audienceBox}>
              <Text style={styles.month}> {"              "}Age</Text>
              <View
                style={{
                  flexDirection: "row",
                  marginLeft: 10,
                  marginTop: 20
                }}
              >
                <Text style={styles.FanRange}> {"<"}18 </Text>
                <View
                  style={{
                    height: 8,
                    width: 25,
                    backgroundColor: "#F2994A",
                    borderRadius: 8,
                    marginLeft: 30,
                    marginRight: 5,
                    marginTop: 15,
                    marginBottom: 10
                  }}
                ></View>
                <Text style={styles.totalpercent}> {"    "}8% </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  marginLeft: 10
                }}
              >
                <Text style={styles.FanRange}>18 - 24 </Text>
                <View
                  style={{
                    height: 8,
                    width: 52,
                    backgroundColor: "#F2994A",
                    borderRadius: 8,
                    marginLeft: 12,
                    marginTop: 15,
                    marginBottom: 10
                  }}
                ></View>
                <Text style={styles.totalpercent}>39%</Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  marginLeft: 10
                }}
              >
                <Text style={styles.FanRange}> 25 - 39 </Text>
                <View
                  style={{
                    height: 8,
                    width: 48,
                    backgroundColor: "#F2994A",
                    borderRadius: 8,
                    marginLeft: 10,
                    marginTop: 15,
                    marginBottom: 10
                  }}
                ></View>
                <Text style={styles.totalpercent}> 38% </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  marginLeft: 10
                }}
              >
                <Text style={styles.FanRange}> 40 - 59 </Text>
                <View
                  style={{
                    height: 8,
                    width: 32,
                    backgroundColor: "#F2994A",
                    borderRadius: 8,
                    marginLeft: 10,
                    marginRight: 20,
                    marginTop: 15,
                    marginBottom: 10
                  }}
                ></View>
                <Text style={styles.totalpercent}>10%</Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  marginLeft: 10
                }}
              >
                <Text style={styles.FanRange}> {">"}60 </Text>
                <View
                  style={{
                    height: 8,
                    width: 15,
                    backgroundColor: "#F2994A",
                    borderRadius: 8,
                    marginLeft: 35,
                    marginRight: 30,
                    marginTop: 15,
                    marginBottom: 10
                  }}
                ></View>
                <Text style={styles.totalpercent}> 5% </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              height: 244,
              width: 379,
              backgroundColor: "#141A45",
              borderRadius: 4,
              marginLeft: 10,
              marginTop: 15,
              marginBottom: 10
            }}
          >
            <Text style={styles.month}> {"    "}Geography </Text>
            <Text
              style={{
                marginLeft: 230,
                color: "#BDBDBD",
                marginTop: 10,
                fontSize: 16,
                lineHeight: 16,
                marginBottom: 15
              }}
            >
              Play Percentage{" "}
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.State}> {"    "}1. Toronto, Canada </Text>
              <Text style={styles.totalpercent}> 64% </Text>
            </View>
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <Text style={styles.State}> {"    "}2. Delhi, India </Text>
              <Text style={styles.totalpercent}> {"           "}18% </Text>
            </View>
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <Text style={styles.State}> {"    "}3. Ottawa, Canada </Text>
              <Text style={styles.totalpercent}> {"   "}6% </Text>
            </View>
            <Text
              style={{
                fontSize: 16,
                lineHeight: 18,
                color: "#D87FF9",
                marginLeft: 160,
                marginTop: 20
              }}
            >
              {" "}
              See all{" "}
            </Text>
          </View>

          <View>
            <Text style={styles.subtitle}> Your Content </Text>
            <View style={styles.container}>
              <View style={styles.Listcontainer}>
                <Text style={styles.month}> Your Popular Tracks </Text>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  style={{ flexDirection: "row", marginTop: 30 }}
                >
                  <TrackList
                    FeedsImg={require("../assets/Shan1.png")}
                    name="Best Friend"
                    concertname="Single"
                    playCount="2,209 plays"
                    icon="md-arrow-dropdown"
                    range="3.4% last 3 days"
                  />
                  <TrackList
                    FeedsImg={require("../assets/HeavenShan.jpg")}
                    name="Heaven"
                    concertname="Single"
                    playCount="20,906 plays"
                    icon="md-arrow-dropdown"
                    range="4.3% last 6 days"
                  />
                  <TrackList
                    FeedsImg={require("../assets/WantyouShan.jpg")}
                    name="Want You"
                    concertname="Single"
                    playCount="9,906 plays"
                    icon="md-arrow-dropdown"
                    range="1.9% last 9 days"
                  />
                </ScrollView>
              </View>
            </View>

            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={true}
              style={styles.container}
            >
              <View style={styles.Listcontainer}>
                <Text style={styles.month}> Your Popular Albums </Text>
                <View style={{ flexDirection: "row", marginTop: 30 }}>
                  <TrackList
                    FeedsImg={require("../assets/Img1.png")}
                    concertname="Saviors"
                    playCount="64,109 plays"
                    icon="md-arrow-dropdown"
                    range="3.4% last 7 days"
                  />

                  <TrackList
                    FeedsImg={require("../assets/Mridangam.jpg")}
                    concertname="Mercury"
                    playCount="8,109 plays"
                    icon="md-arrow-dropdown"
                    range="4.7% last 5 days"
                  />
                  <TrackList
                    FeedsImg={require("../assets/Trigger.jpg")}
                    concertname="Trigger Happy Heartbreak"
                    playCount="4,500 plays"
                    icon="md-arrow-dropdown"
                    range="5.2% last 6 days"
                  />
                </View>
              </View>
            </ScrollView>
          </View>
        </ScrollView>

        <View style={{ marginLeft: 15, marginTop: 70, position: "absolute" }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Home")}
          >
            <View style={{ width: 56, height: 56, marginLeft: 10 }}>
              <Ionicons name="md-arrow-dropleft" color="white" size={30} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    width: 1011,
    height: 432
  },
  title: {
    marginTop: 50,
    marginLeft: 70,
    color: "#F2F2F2",
    fontSize: 32,
    fontWeight: "bold",
    lineHeight: 32,
    fontStyle: "normal",
    marginBottom: 40
  },
  Listcontainer: {
    height: 360,
    marginVertical: 15,
    marginHorizontal: 15
  },
  item: {
    width: screenWidth - 136,
    height: screenWidth - 220
  },
  imageContainer: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 8
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "cover"
  },
  container: {
    marginTop: 15,
    marginLeft: 15,

    height: 350,
    backgroundColor: "#141A45",
    borderRadius: 8,
    flexDirection: "row",
    marginBottom: 10
  },
  line: {
    marginTop: 40,
    width: 350,
    marginLeft: 15,
    alignItems: "center",
    borderWidth: 0.2,
    borderColor: "#C4C4C4"
  },
  verticalLine: {
    marginTop: 40,
    height: 236,
    width: 0.2,
    marginLeft: 25,
    marginRight: 45,
    alignItems: "center",
    borderWidth: 0.2,
    borderColor: "#C4C4C4"
  },
  views: {
    color: "#F2994A",
    fontSize: 14,
    fontWeight: "normal",
    lineHeight: 18,
    fontStyle: "normal"
  },
  fanCount: {
    color: "#D87FF9",
    fontSize: 14,
    fontWeight: "normal",
    lineHeight: 18,
    fontStyle: "normal"
  },
  month: {
    marginTop: 15,
    color: "#BDBDBD",
    fontSize: 18,
    fontWeight: "normal",
    lineHeight: 18,
    fontStyle: "normal"
  },
  subtitle: {
    marginTop: 30,
    marginLeft: 15,
    color: "#F2F2F2",
    fontSize: 21,
    fontWeight: "500",
    lineHeight: 21,
    fontStyle: "normal",
    marginBottom: 10
  },
  totalFans: {
    marginTop: 15,
    marginLeft: 15,
    color: "#F2994A",
    fontSize: 28,
    fontWeight: "normal",
    lineHeight: 29,
    fontStyle: "normal"
  },
  total: {
    marginTop: 5,
    marginLeft: 20,
    color: "#BDBDBD",
    fontSize: 16,
    fontWeight: "normal",
    lineHeight: 18,
    fontStyle: "normal"
  },
  box: {
    width: 109,
    height: 154,
    backgroundColor: "#141A45",
    borderRadius: 4,
    marginLeft: 20,
    marginTop: 20
  },
  boxFanCount: {
    marginTop: 25,
    textAlign: "center",
    color: "#F2994A",
    fontSize: 21,
    fontWeight: "normal",
    lineHeight: 21,
    fontStyle: "normal"
  },

  days: {
    color: "#BDBDBD",
    marginTop: 5,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "normal",
    lineHeight: 18,
    fontStyle: "normal"
  },
  audienceBox: {
    width: 181,
    height: 256,
    backgroundColor: "#141A45",
    borderRadius: 4,
    marginLeft: 10
  },
  FanRange: {
    color: "#BDBDBD",
    marginTop: 10,
    textAlign: "center",
    fontSize: 14,
    fontWeight: "normal",
    lineHeight: 18,
    fontStyle: "normal"
  },
  totalpercent: {
    marginLeft: 17,
    color: "#FFFFFF",
    marginTop: 10,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "normal",
    lineHeight: 18,
    fontStyle: "normal"
  },
  State: {
    marginTop: 10,
    marginRight: 100,
    color: "#F2994A",
    fontSize: 18,
    fontWeight: "normal",
    lineHeight: 18,
    fontStyle: "normal"
  }
});
