import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Title from "./src/components/Title/";
import Main from "./src/components/Main/";
import Imagem from "./src/components/Image/";

export default function App() {
  return (
    <View style={styles.container}>
      <Title />
      <Imagem />
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "black",
  },
});
