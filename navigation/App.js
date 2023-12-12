import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Contacts from "./src/pages/Contacts/index";
import Informations from "./src/pages/Informations";
import AppContacts from "./src/pages/AppContacts";

const navega = createStackNavigator();
const botoesNav = createBottomTabNavigator();

function TabNavigation() {
  return (  
    <botoesNav.Navigator>
      <botoesNav.Screen name="AppContacts" component={AppContacts} />
      <botoesNav.Screen name="Contacts" component={Contacts} />
    </botoesNav.Navigator>
  );
}

export default function App() {
  return (
      <NavigationContainer>
        <navega.Navigator>
          <navega.Screen name="App" component={TabNavigation} />
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
