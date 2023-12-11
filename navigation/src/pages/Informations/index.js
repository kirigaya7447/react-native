import React from "react";
import { View, Text } from "react-native";

export default function Informations({route}) {
    return (
        <View>
            <Text>Nome: {route.params?.nome}</Text>
            <Text>Telefone: {route.params?.telefone}</Text>
            <Text>Número: {route.params?.numero}</Text>
            <Text>Cor da cueca: {route.params?.corcueca}</Text>
            <Text>Cor da calcinha: {route.params?.corcalcinha}</Text>
            <Text>Tipo sanguíneo: {route.params?.sangue}</Text>
            <Text>Vai à merda? {route.params?.vai}</Text>
            <Text>Profissão: {route.params?.profissao}</Text> 
        </View>
    );
}