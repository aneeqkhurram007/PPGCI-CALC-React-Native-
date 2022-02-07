import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import MainApp from "./MainApp";
import { StateProvider } from "./StateProvider";
import { reducer, state } from "./states";

export default function App() {
  return (
    <View style={styles.container}>
      <StateProvider reducer={reducer} state={state}>
        <MainApp />
      </StateProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
