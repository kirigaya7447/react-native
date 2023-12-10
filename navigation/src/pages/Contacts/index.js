import React from "react";
import { View, Text } from "react-native";

export default function Contacts({navigation}) {

    return (
        <View>
            <Text onPress={() => navigation.navigate("Informations")}>Hello Gays from Contacts</Text>
        </View>
    );
}