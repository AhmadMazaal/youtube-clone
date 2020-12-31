import * as React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import SearchScreen from "./screens/SearchScreen";
import DiscoverScreen from "./screens/DiscoverScreen";
import SubscribeScreen from "./screens/SubscribeScreen";
import HomeScreen from "./screens/HomeScreen";
import VideoScreen from "./screens/VideoScreen";
import Colors from "./Constants/Colors";

import Constant from "expo-constants";
import { MaterialIcons } from "@expo/vector-icons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import reducer from "./reducers/reducer";
import { Provider } from "react-redux";
import { createStore } from "redux";

const myDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    headerColor: "#404040",
    iconColor: "white",
    tabIcon: "white",
  },
};

const myDefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    headerColor: "white",
    iconColor: "black",
    tabIcon: "red",
  },
};
const store = createStore(reducer);

const Stack = createStackNavigator();
const Tabs = createMaterialBottomTabNavigator();

const Root = () => {
  return (
    <Tabs.Navigator
      initialRouteName="Home"
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: Colors.UBackground }}
    >
      <Tabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="Discover"
        component={DiscoverScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="explore" color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="Subscribe"
        component={SubscribeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="youtube-subscription"
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default function App() {
  return (
    // style={{ marginTop: Constant.statusBarHeight }}
    <Provider store={store}>
      {/* theme={myDarkTheme} */}
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Root" component={Root} />
          <Stack.Screen name="Search" component={SearchScreen} />
          <Stack.Screen name="Video" component={VideoScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   marginVertical: 20,
  //   backgroundColor: "#fff",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
});
