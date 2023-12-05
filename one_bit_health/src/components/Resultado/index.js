import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

export default function Resultado(props) {

    return (
        <View style={styles.corpoResultado}>
            <Text style={styles.resultado}>{props.message} {props.resultadoIMC}</Text>
            <Text style={styles.resultado}>Você está classificado como: {props.tipo}</Text>
        </View>
    );
}