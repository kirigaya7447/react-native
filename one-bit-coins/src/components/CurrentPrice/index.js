import Reac from "react";
import {View, Text} from "react-native";
import styles from "./style";

export default function CurrentPrice(){
    return (
        <View style={styles.headerPrice}>
            <Text style={styles.currentPrice}>$100000</Text>
            <Text style={styles.textPrice}>Preço da última cotação</Text>
        </View>
    );
}