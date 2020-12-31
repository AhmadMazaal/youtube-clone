import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Card(props) {
  const { videoId, title, channel } = props;
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Video", { videoId, title })}
      style={styles.container}
    >
      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={{
            uri: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
          }}
        />
      </View>
      <View style={styles.caption}>
        <MaterialIcons name="account-circle" size={26} color="black" />
        <View style={styles.txtContainer}>
          <Text style={styles.title} ellipsizeMode="tail" numberOfLines={2}>
            {title}
          </Text>
          <Text>{channel}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    // shadowOpacity: 0.26,
    // shadowOffset: { width: 0, height: 2 },
    // shadowRadius: 10,
    // elevation: 5,
    shadowColor: "black",
    backgroundColor: "white",
    padding: 5,
    width: "100%",
    marginVertical: 10,
  },
  imgContainer: {},
  img: {
    width: "100%",
    height: 200,
  },
  caption: {
    flexDirection: "row",
    alignItems: "center",
    margin: 5,
  },
  title: {
    fontSize: 17,
    width: Dimensions.get("screen").width - 50,
    fontWeight: "bold",
  },
  txtContainer: {
    marginHorizontal: 10,
  },
});
