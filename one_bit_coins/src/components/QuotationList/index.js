import React, {Fragment} from "react";
import { View, Text, TouchableOpacity, ScrollView, Alert } from "react-native";
import styles from "./style";

export default function QuotationList() {
    return (
        <Fragment>
            <View style={styles.content}>
                <TouchableOpacity style={styles.buttonQuery} onPress={() => {}}>
                    <Text style={styles.textButtonQuery}>7 days</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonQuery} onPress={() => {}}>
                    <Text style={styles.textButtonQuery}>15 days</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonQuery} onPress={() => {}}>
                    <Text style={styles.textButtonQuery}>1 month</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonQuery} onPress={() => {}}>
                    <Text style={styles.textButtonQuery}>3 months</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonQuery} onPress={() => {}}>
                    <Text style={styles.textButtonQuery}>6 months</Text>
                </TouchableOpacity>
            </View>
            <ScrollView></ScrollView>
        </Fragment>
    );
}