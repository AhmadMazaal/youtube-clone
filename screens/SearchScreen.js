import * as React from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Colors from "../Constants/Colors";
import GeneralStatusBarColor from "../components/GeneralStatusBarColor";
import SearchCard from "../components/SearchCard";

import { useSelector, useDispatch } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function SearchScreen({ navigation }) {
  // GET https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=react%20native&type=video&key=AIzaSyBi-1Mi_3GSFcSobf_J6D9zw79q3UiFsss
  const apiKey = `AIzaSyBi-1Mi_3GSFcSobf_J6D9zw79q3UiFsss`;

  const [query, setQuery] = React.useState("");
  // const [videos, setVideos] = React.useState([]);

  const dispatch = useDispatch();
  const videos = useSelector((state) => {
    return state;
  });

  const [loading, setLoading] = React.useState(false);
  const fetchData = () => {
    // alert(query);
    setLoading(true);
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${query}&type=video&key=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        // setVideos(data.items);
        dispatch({ type: "add", payload: data.items });
      });
  };
  return (
    <View>
      <GeneralStatusBarColor
        backgroundColor={Colors.UBackground}
        barStyle="light-content"
      />
      <View style={styles.contianer}>
        <TouchableOpacity>
          <Ionicons
            name="md-arrow-back"
            size={24}
            color="white"
            onPress={() => navigation.goBack()}
          />
        </TouchableOpacity>
        <TextInput
          value={query}
          style={styles.textInput}
          onChangeText={(q) => {
            setQuery(q);
          }}
        />
        <TouchableOpacity>
          <MaterialIcons
            onPress={() => fetchData()}
            name="send"
            size={30}
            color="white"
          />
        </TouchableOpacity>
      </View>
      {loading && (
        <ActivityIndicator size="large" color="red" style={{ marginTop: 10 }} />
      )}
      <FlatList
        data={videos}
        keyExtractor={(item) => item.id.videoId}
        renderItem={({ item }) => {
          return (
            <SearchCard
              videoId={item.id.videoId}
              title={item.snippet.title}
              channel={item.snippet.channelTitle}
            />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contianer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    shadowColor: "#FFFFFF",
    paddingVertical: 10,
    backgroundColor: Colors.UBackground,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 3,
  },
  textInput: {
    width: "70%",
    padding: 3,
    alignSelf: "center",
    borderBottomWidth: 1,
    borderRadius: 3,
    backgroundColor: "#ececec",
    borderBottomColor: "#c0c0c0",
  },
});
