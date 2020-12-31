import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function SearchCard(props) {
  const { videoId, title, channel } = props;
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.Container}
      onPress={() => navigation.navigate("Video", { videoId, title })}
    >
      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={{
            uri: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
          }}
        />
      </View>
      <View style={styles.description}>
        <Text style={styles.caption} ellipsizeMode="tail" numberOfLines={3}>
          {title}
        </Text>
        <Text style={{ fontSize: 12, marginTop: 10 }}>{channel}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  Container: {
    flexDirection: "row",
    marginTop: 15,
    // width: Dimensions.get("screen").width / 2.2,
  },
  img: {
    marginHorizontal: 10,
    width: Dimensions.get("screen").width / 2.2,
    height: 100,
    borderWidth: 1,
    borderColor: "black",
  },
  description: {
    // marginHorizontal: 10,
  },
  caption: {
    fontSize: 15,
    paddingRight: 15,
    width: Dimensions.get("screen").width / 2,
  },
});
