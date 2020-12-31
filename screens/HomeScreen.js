import * as React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "../components/Header";
import Card from "../components/Card";
import { ScrollView } from "react-native-gesture-handler";
import GeneralStatusBarColor from "../components/GeneralStatusBarColor";
import Colors from "../Constants/Colors";

import { useSelector } from "react-redux";
//

export default function HomeScreen() {
  const [videos, setVideos] = React.useState([]);
  const data = useSelector((state) => {
    return state;
  });

  React.useEffect(() => {
    const apiKey = `AIzaSyBi-1Mi_3GSFcSobf_J6D9zw79q3UiFsss`;
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&type=video&key=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => {
        setVideos(data.items);
        // dispatch({ type: "add", payload: data.items });
      });
  }, []);
  return (
    <View>
      <GeneralStatusBarColor
        backgroundColor={Colors.UBackground}
        barStyle="light-content"
      />
      <Header />
      <FlatList
        data={videos}
        keyExtractor={(item) => item.id.videoId}
        renderItem={({ item }) => {
          return (
            <Card
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

const styles = StyleSheet.create({});
