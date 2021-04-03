import React, { useState } from "react";
import {
  Text,
  View,
  Button,
  StyleSheet,
  Platform,
  SafeAreaView,
  StatusBar,
  Image,
} from "react-native";

import PeopleScreen from "./app/screens/PeopleScreen";
import DecisionScreen from "./app/screens/DecisionScreen";
import RestaurantsScreen from "./app/screens/RestaurantsScreen";
import { Constants } from "expo";

import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

// import Ionicons from "@expo/vector-icons/Ionicons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
console.log("------------------------------------------------------------");
console.log(`RestaurantChooser starting on ${Platform.OS}`);

const platformOS = Platform.OS.toLowerCase();

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Decision"
          backBehavior="initialRoute"
          tabBarPosition="bottom"
          tabBarOptions={{
            activeTintColor: "black",
            inactiveTintColor: "gray",
            lazy: true,
            showIcon: true,
          }}
        >
          <Tab.Screen
            name="People"
            component={PeopleScreen}
            options={{
              tabBarIcon: () => (
                <MaterialCommunityIcons
                  name="account-group"
                  size={24}
                  color="black"
                />
              ),
            }}
          />
          <Tab.Screen
            name="Decision"
            component={DecisionScreen}
            options={{
              tabBarIcon: () => (
                <MaterialCommunityIcons
                  name="transit-connection-variant"
                  size={24}
                  color="black"
                />
              ),
            }}
          />
          <Tab.Screen
            name="Restaurants"
            component={RestaurantsScreen}
            options={{
              tabBarIcon: () => (
                <MaterialCommunityIcons
                  name="silverware-fork-knife"
                  size={24}
                  color="black"
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
