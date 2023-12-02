import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Title from "./src/components/Title/";
import Form from "./src/components/Form/";
import Imagem from "./src/components/Image/";

export default function App() {
  return (
    <View style={styles.container}>
      <Title />
      <ScrollView>
        <Imagem />
        <Form />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 50,
  },
});
