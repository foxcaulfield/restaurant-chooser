import React, { useState } from "react";
import {
  Text,
  View,
  Button,
  StyleSheet,
  Platform,
  SafeAreaView,
  StatusBar,
} from "react-native";

import PeopleScreen from "./app/screens/PeopleScreen";
import DecisionScreen from "./app/screens/DecisionScreen";
import RestaurantsScreen from "./app/screens/RestaurantsScreen";

import { Constants } from "expo";

import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

console.log("------------------------------------------------------------");
console.log(`RestaurantChooser starting on ${Platform.OS}`);

const platformOS = Platform.OS.toLowerCase();

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>Home!</Text>
//     </View>
//   );
// }

// function SettingsScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>Settings!</Text>
//     </View>
//   );
// }

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator>
          {/* <Tab.Screen name="Home" component={HomeScreen} /> */}
          {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
          <Tab.Screen name="People" component={PeopleScreen} />
          <Tab.Screen name="Decision" component={DecisionScreen} />
          <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
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
