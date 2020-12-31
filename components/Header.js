import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

import Color from "../Constants/Colors";

import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Entypo } from "@expo/vector-icons";

export default function Header() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <AntDesign name="youtube" size={30} color="white" />
        <Text style={styles.txt}>YouTube</Text>
      </View>
      <View style={styles.rightContainer}>
        <TouchableOpacity onPress={() => alert("feature loading...")}>
          <FontAwesome name="video-camera" size={25} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons
            name="search"
            size={25}
            color="white"
            onPress={() => navigation.navigate("Search")}
          />
        </TouchableOpacity>
        <TouchableOpacity Press={() => alert("feature loading...")}>
          <Entypo name="switch" size={25} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    // marginTop: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: Color.UBackground,
    shadowColor: "#FFFFFF",
    shadowOffset: { width: 2, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 4,
  },
  txt: {
    color: "white",
    marginHorizontal: 7,
    fontWeight: "bold",
    fontSize: 24,
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rightContainer: {
    width: 130,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
