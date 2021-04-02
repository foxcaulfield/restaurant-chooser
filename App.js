// //================================================================================
// // You can import Ionicons from @expo/vector-icons if you use Expo or
// // react-native-vector-icons/Ionicons otherwise.

// //
// import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
// //

// import * as React from "react";
// import { Text, View, Image } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { NavigationContainer } from "@react-navigation/native";

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

// const Tab = createBottomTabNavigator();

// //
// // const Tab = createMaterialTopTabNavigator();
// //

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color, size }) => {
//             // You can return any component that you like here!
//             return (
//               <Image
//                 source={require("./app/images/icon-people.png")}
//                 style={{ width: 32, height: 32, tintColor: "black" }}
//               />
//             );
//           },
//         })}
//         tabBarOptions={{
//           activeTintColor: "tomato",
//           inactiveTintColor: "gray",
//         }}
//       >
//         <Tab.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{
//             tabBarLabel: "Home!",
//             tabBarIcon: ({ focused, color, size }) => {
//               return (
//                 <Image
//                   source={require("./app/images/icon-restaurants.png")}
//                   style={{ width: 32, height: 32, tintColor: "black" }}
//                 />
//               );
//             },
//           }}
//         />

//         <Tab.Screen
//           name="Settings"
//           component={SettingsScreen}
//           options={{
//             tabBarLabel: "12!",
//             tabBarIcon: ({ focused, color, size }) => {
//               return (
//                 <Image
//                   source={require("./app/images/icon-decision.png")}
//                   style={{ width: 32, height: 32, tintColor: "black" }}
//                 />
//               );
//             },
//           }}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

//====================================
//====================================
//====================================
//====================================
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
// TabNavigator;
import { Constants } from "expo";

import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

// import Ionicons from "react-native-vector-icons/Ionicons";
import Ionicons from "@expo/vector-icons/Ionicons";
// import { TabNavigator } from "react-navigation";
import { MaterialCommunityIcons } from "@expo/vector-icons";
console.log("------------------------------------------------------------");
console.log(`RestaurantChooser starting on ${Platform.OS}`);

const platformOS = Platform.OS.toLowerCase();

const Tab = createMaterialTopTabNavigator();

export default function App() {
  // const logos = {
  //   peopleLogo: require("./app/images/icon-people.png"),
  //   decisionLogo: require("./app/images/icon-decision.png"),
  //   restaurantsLogo: require("./app/images/icon-restaurants.png"),
  // };

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        {/* <Image source={logoSelect("PL")} /> */}
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              // You can return any component that you like here!
              return (
                <Image
                  source={require("./app/images/icon-people.png")}
                  style={{ width: 32, height: 32, tintColor: "black" }}
                />
              );
            },
          })}
          tabBarOptions={{
            activeTintColor: "tomato",
            inactiveTintColor: "gray",
          }}
        >
          <Tab.Screen name="People" component={PeopleScreen} />
          <Tab.Screen
            name="Decision"
            component={DecisionScreen}
            // options={{

            //   tabBarLabel: "12!",
            //   tabBarIcon: ({ focused, color, size }) => {
            //     return (
            //       <Image
            //         source={require("./app/images/icon-decision.png")}
            //         style={{ width: 32, height: 32, tintColor: "black" }}
            //       />
            //     );
            //   },
            // }}
          />
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
