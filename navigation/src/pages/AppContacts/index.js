import React from "react";
import { View, Text, Image } from "react-native";
import image from "./pinto.jpg";

export default function AppContacts() {
    return (
        <View>
            <Text>Aqui fica todo o conteúdo que você quiser apresentar!</Text>
            <Text>Fique com a imagem deste pintinho:</Text>
            <View>
                <Image source={image} />
            </View>
        </View>
    );
}