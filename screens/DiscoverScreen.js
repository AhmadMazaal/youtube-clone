import * as React from "react";
import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";
import Header from "../components/Header";
import Card from "../components/Card";
import { useSelector } from "react-redux";
import GeneralStatusBarColor from "../components/GeneralStatusBarColor";
import { TouchableOpacity } from "react-native-gesture-handler";

const MiniCard = ({ name }) => {
  return (
    <View
      style={{
        backgroundColor: "red",
        height: 50,
        width: "45%",
        borderRadius: 4,
        marginTop: 20,
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          textAlign: "center",
          color: "white",
          fontSize: 22,
          alignSelf: "center",
        }}
      >
        {name}
      </Text>
    </View>
  );
};
// https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=programming&type=video&key=[YOUR_API_KEY]'

const Explore = () => {
  const [videos, setVideos] = React.useState([]);
  React.useEffect(() => {
    const apiKey = `AIzaSyBi-1Mi_3GSFcSobf_J6D9zw79q3UiFsss`;
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=programming&type=video&key=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => {
        setVideos(data.items);
        // dispatch({ type: "add", payload: data.items });
      });
  }, []);
  const cardData = useSelector((state) => {
    return state;
  });
  return (
    <View style={{ flex: 1 }}>
      <GeneralStatusBarColor />
      <Header />
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          <MiniCard name="Gaming" />
          <MiniCard name="Trending" />
          <MiniCard name="Music" />
          <MiniCard name="News" />
          <MiniCard name="Movies" />
          <MiniCard name="Fashion" />
        </View>
        <Text
          style={{
            margin: 8,
            fontSize: 22,
            borderBottomWidth: 1,
          }}
        >
          Trending Videos
        </Text>
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
      </ScrollView>
    </View>
  );
};

export default Explore;
