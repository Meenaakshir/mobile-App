import * as React from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Login from "./App/ArtistScreens/Login";
import ChooseLogin from "./App/ArtistScreens/chooseLogin";
import Home from "./App/ArtistScreens/Home";
import PromoterHome from "./App/PromoterScreens/PromoterHome";
import Search from "./App/ArtistScreens/Search";
import Event from "./App/ArtistScreens/Event_signed";
import EventSignup from "./App/ArtistScreens/Event_signup";
import Events from "./App/ArtistScreens/Events";
import Catalog from "./App/ArtistScreens/Catalog";
import SongDetail from "./App/ArtistScreens/Event_prospective";
import Success from "./App/ArtistScreens/Success";
import Notification from "./App/ArtistScreens/Notification";
import PromoterNotification from "./App/PromoterScreens/PromoterNotification";
import { Ionicons } from "@expo/vector-icons";
import Profile from "./App/ArtistScreens/Profile";
import Brand from "./App/ArtistScreens/BrandPower";
import PromoterEventSignup from "./App/PromoterScreens/promoterEvent_signed";
import { createBottomTabNavigator, BottomTabBar } from "react-navigation-tabs";
import DialogueScreen from "./App/components/Explore/DialogueScreen";
import Humma from "./App/ArtistScreens/humma";
import Isai from "./App/ArtistScreens/Isai";
import Chat from "./App/ArtistScreens/ChatScreen";

const RootStack = createStackNavigator(
  {
    Login: Login,
    ChooseLogin: ChooseLogin,
    Home: Home,
    Search: Search,
    Event: Event,
    SongDetail: SongDetail,
    EventSignup: EventSignup,
    Success: Success,
    Events: Events,
    Notification: Notification,
    PromoterNotification: PromoterNotification,
    Profile: Profile,
    PromoterHome: PromoterHome,
    PromoterEventSignup: PromoterEventSignup,
    DialogueScreen: DialogueScreen,
    Brand: Brand,
    Humma: Humma,
    Isai: Isai,
    Chat: Chat
  },
  {
    headerMode: "none"
  }
);

RootStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;

  let routeName = navigation.state.routes[navigation.state.index].routeName;

  if (routeName == "Login") {
    tabBarVisible = false;
  } else if (routeName == "Notification") {
    tabBarVisible = false;
  } else if (routeName == "Success") {
    tabBarVisible = false;
  } else if (routeName == "SongDetail") {
    tabBarVisible = false;
  } else if (routeName == "EventSignup") {
    tabBarVisible = false;
  } else if (routeName == "Event") {
    tabBarVisible = false;
  } else if (routeName == "PromoterNotification") {
    tabBarVisible = false;
  } else if (routeName == "ChooseLogin") {
    tabBarVisible = false;
  } else if (routeName == "Chat") {
    tabBarVisible = false;
  }

  return {
    tabBarVisible
  };
};

const BottomStack = createBottomTabNavigator(
  {
    Home: {
      initialRouteName: "Home",
      screen: RootStack,
      navigationOptions: {
        tabBarlabel: "Home",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="md-home" color={tintColor} size={24} />
        )
      }
    },
    Search: {
      screen: Search,
      navigationOptions: {
        tabBarlabel: "Search",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="md-search" color={tintColor} size={24} />
        )
      }
    },
    Event: {
      screen: Events,
      navigationOptions: {
        tabBarlabel: "Event",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="md-calendar" color={tintColor} size={24} />
        )
      }
    },
    Catalog: {
      screen: Catalog,
      navigationOptions: {
        tabBarlabel: "Catalog",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="md-photos" color={tintColor} size={24} />
        )
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarlabel: "Profile",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="md-person" color={tintColor} size={24} />
        )
      }
    }
  },

  {
    tabBarOptions: {
      activeBackgroundColor: "#141A45",
      inactiveBackgroundColor: "#141A45",
      activeTintColor: "#D87FF9",
      inactiveTintColor: "#D0C1E4",
      labelStyle: {
        fontSize: 14,
        fontStyle: "normal",
        fontWeight: "normal",
        lineHeight: 18,
        ...Platform.select({
          ios: {
            fontFamily: "Arial"
          },
          android: {
            fontFamily: "Roboto"
          }
        })
      },
      style: {
        backgroundColor: "#141A45",
        height: 64
      }
    }
  }
);

const MainStack = createSwitchNavigator(
  {
    Home: BottomStack,
    User: RootStack
  },

  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(MainStack);
