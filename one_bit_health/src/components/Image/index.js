import React from "react";
import { View, Image, ScrollView } from "react-native";
import ImagemName from "./eu.jpeg";

export default function Imagem(){
    function imagemAparece(){
            return ImagemName;
    }

    return (
        <View>
            <ScrollView>
            <Image style={{height: 200, width: 150, alignItems: "center", justifyContent: "center", marginLeft: 50}} source={imagemAparece()}/>
            </ScrollView>
        </View>
    );
}