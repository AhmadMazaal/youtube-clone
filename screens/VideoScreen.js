import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";
import GeneralStatusBarColor from "../components/GeneralStatusBarColor";
import Header from "../components/Header";

export default function VideoScreen({ route }) {
  const { videoId, title } = route.params;
  return (
    <View>
      <GeneralStatusBarColor />
      <Header />
      <View style={styles.container}>
        <WebView
          javaScriptEnabled={true}
          domStorageEnabled={true}
          source={{ uri: `https://www.youtube.com/embed/${videoId}` }}
        />
      </View>
      <Text
        style={{
          fontSize: 20,
          width: Dimensions.get("screen").width - 50,
          margin: 9,
        }}
        numberOfLines={2}
        ellipsizeMode="tail"
      >
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 200,
  },
});
