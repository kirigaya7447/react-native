import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Contacts from "./src/pages/Contacts/index";
import Informations from "./src/pages/Informations";

const navega = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <navega.Navigator>
        <navega.Screen name="Contacts" component={Contacts} />
        <navega.Screen name="Informations" component={Informations} />
      </navega.Navigator>
    </NavigationContainer>
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
