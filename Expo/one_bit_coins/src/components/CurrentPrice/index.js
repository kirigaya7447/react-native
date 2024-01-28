import Reac from "react";
import { View, Text } from "react-native";
import styles from "./style";

export default function CurrentPrice(props) {
    return (
        <View style={styles.headerPrice}>
            <Text style={styles.textPrice}>Preço da cotação referente a 2021</Text>
            <Text style={styles.currentPrice}>{props.intervaloDias}</Text>
        </View>
    );
}