import React from "react";
import { StyleSheet, Text, View } from "react-native";
import GeneralStatusBarColor from "../components/GeneralStatusBarColor";
import Header from "../components/Header";
export default function SubscribeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <GeneralStatusBarColor />
      <Header />
      <View style={styles.container}>
        <Text>Subscription screen</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginTop: 100,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
