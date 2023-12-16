import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./style";

export default function QuotationItems() {
    return (
        <View style={styles.principal}>
            <View style={styles.viewLeft}>
                <View style={styles.viewLogo}>
                    <Image source={require("../../../Image/logoBit.png")} style={styles.logo}/>
                    <Text style={styles.dataCotacao}>06/04/2023</Text>
                </View>
            </View>
            <View style={styles.viewRight}>
                <Text style={styles.price}>$ 455455.456</Text>
            </View>
        </View>
    );
}