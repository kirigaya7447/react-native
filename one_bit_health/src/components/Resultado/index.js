import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

export default function Resultado(props) {

    return (
        <View style={styles.corpoResultado}>
            <Text style={styles.resultado}>{props.message} {props.resultadoIMC}</Text>
        </View>
    );
}