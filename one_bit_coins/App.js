import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from "react-native";
import CurrentPrice from "./src/components/CurrentPrice/";
import HistoryGraphics from "./src/components/HistoryGraphics/";
import QuotationList from "./src/components/QuotationList/";
import QuotationItems from "./src/components/QuotationList/QuotationItems/";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="green" barStyle="light-content" />
      <CurrentPrice/>
      <HistoryGraphics/>
      <QuotationList />
      <QuotationItems/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    color: "white",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? 40 : 0,
  },
});
