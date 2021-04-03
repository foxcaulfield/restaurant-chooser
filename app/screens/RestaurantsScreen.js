import React, { useState, useEffect } from "react";
import CustomButton from "../components/CustomButton";
import CustomTextInput from "../components/CustomTextInput";
import {
  Alert,
  BackHandler,
  FlatList,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Root, Toast } from "native-base";

import { Constants } from "expo";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { Picker } from "@react-native-picker/picker";
import { useIsFocused } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const STORAGE_KEY = "@save_restaurant";

function AddScreen({ navigation }) {
  const [restaurant, setRestaurant] = useState([]);

  useEffect(() => {
    readData();
  }, []);

  // read data
  const readData = async () => {
    try {
      const restaurant = await AsyncStorage.getItem(STORAGE_KEY);
      if (restaurant !== null) {
        const restaurantParsed = JSON.parse(restaurant);
        setRestaurant(restaurantParsed);
      }
    } catch (e) {
      alert("Failed to fetch the data from storage12");
    }
  };

  // save data

  const saveData = async () => {
    try {
      //   const restaurantStringify = JSON.stringify(restaurant);
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(restaurant));
      setRestaurant(restaurant);
      alert("Data successfully saved");
    } catch (e) {
      alert("Failed to save the data to the storage2");
    }
  };

  const clearStorage = async () => {
    try {
      await AsyncStorage.clear();
      alert("Storage successfully cleared!");
    } catch (e) {
      alert("Failed to clear the async storage3");
    }
  };

  const onChangeText = (restaurant) => setRestaurant(restaurant);

  const onSubmitEditing = () => {
    if (!restaurant) return;
    saveData(restaurant);
    setRestaurant("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.panel}>
        <TextInput
          style={styles.input}
          value={restaurant}
          placeholder="ENTER RESTAURANT HERE!!!"
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
        />
        {/* <Text style={styles.text}>Your age is {restaurant}</Text> */}
        {/* <TouchableOpacity onPress={clearStorage} style={styles.button}>
          <Text style={styles.buttonText}>Clear Storage</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
}

function ListScreen({ navigation }) {
  const isFocused = useIsFocused();

  useEffect(() => {
    readData();
    //Update the state you want to be updated
  }, [isFocused]);
  const [restaurant, setRestaurant] = useState({
    firstName: "",
    lastName: "sdf",
  });

  useEffect(() => {
    readData();
  }, []);

  // read data
  const readData = async () => {
    try {
      const restaurant = await AsyncStorage.getItem(STORAGE_KEY);
      if (restaurant !== null) {
        const restaurantParsed = JSON.parse(restaurant);
        setRestaurant(restaurantParsed);
      }
    } catch (e) {
      debugger;
      alert("Failed to fetch the data from storage12s2");
      alert(e);
    }
  };

  // save data

  const saveData = async () => {
    try {
      //   const restaurantStringify = JSON.stringify(restaurant);
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(restaurant));
      setRestaurant(restaurant);
      alert("Data successfully saved");
    } catch (e) {
      alert("Failed to save the data to the storage2");
    }
  };

  const clearStorage = async () => {
    try {
      await AsyncStorage.clear();
      alert("Storage successfully cleared!");
    } catch (e) {
      alert("Failed to clear the async storage.");
    }
  };

  const onChangeText = (restaurant) => setRestaurant(restaurant);

  const onSubmitEditing = () => {
    if (!restaurant) return;
    saveData(restaurant);
    setRestaurant("");
  };
  return (
    <Root>
      <View style={styles.container}>
        <View style={styles.header}></View>
        <View style={styles.panel}>
          <Text style={styles.text}>Restaurant IS {restaurant}</Text>
          <TouchableOpacity onPress={clearStorage} style={styles.button}>
            <Text style={styles.buttonText}>Clear Storage</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.listScreenContainer}>
        <CustomButton
          text="Add Restaurant"
          width="94%"
          onPress={() => {
            navigation.navigate("AddScreen");
          }}
        />
      </View>
    </Root>
  );
}

const Stack = createStackNavigator();

function RestaurantsScreen(props) {
  return (
    <Stack.Navigator initialRouteName="ListScreen" backBehavior="initialRoute">
      <Stack.Screen name="AddScreen" component={AddScreen} />
      <Stack.Screen name="ListScreen" component={ListScreen} />
    </Stack.Navigator>
  );
}

export default RestaurantsScreen;

const styles = StyleSheet.create({
  listScreenContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  restaurantList: {
    width: "94%",
  },

  restaurantContainer: {
    flexDirection: "row",
    marginTop: 4,
    marginBottom: 4,
    borderColor: "#e0e0e0",
    borderBottomWidth: 2,
    alignItems: "center",
  },

  restaurantName: {
    flex: 1,
  },

  addScreenContainer: {
    // marginTop: Constants.statusBarHeight,
  },

  addScreenInnerContainer: {
    flex: 1,
    alignItems: "center",
    paddingTop: 20,
    width: "100%",
  },

  addScreenFormContainer: {
    width: "96%",
  },

  fieldLabel: {
    marginLeft: 10,
  },

  pickerContainer: {
    ...Platform.select({
      ios: {},
      android: {
        width: "96%",
        borderRadius: 8,
        borderColor: "#c0c0c0",
        borderWidth: 2,
        marginLeft: 10,
        marginBottom: 20,
        marginTop: 4,
      },
    }),
  },

  picker: {
    ...Platform.select({
      ios: {
        width: "96%",
        borderRadius: 8,
        borderColor: "#c0c0c0",
        borderWidth: 2,
        marginLeft: 10,
        marginBottom: 20,
        marginTop: 4,
      },
      android: {},
    }),
  },

  addScreenButtonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
