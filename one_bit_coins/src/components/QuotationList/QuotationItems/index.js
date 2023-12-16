import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./style";

export default function QuotationItems(props) {
    return (
        <View style={styles.principal}>
            <View style={styles.viewLeft}>
                <View style={styles.viewLogo}>
                    <Image source={require("../../../Image/logoBit.png")} style={styles.logo} />
                    <Text style={styles.dataCotacao}>{props.data}</Text>
                </View>
            </View>
            <View style={styles.viewRight}>
                <Text style={styles.price}>$ {props.valor.toFixed(3)}</Text>
            </View>
        </View>
    );
}