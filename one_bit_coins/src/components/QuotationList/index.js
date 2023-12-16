import React, { Fragment } from "react";
import { View, Text, TouchableOpacity, ScrollView, FlatList } from "react-native";
import styles from "./style";
import QuotationItems from "./QuotationItems/";

export default function QuotationList(props) {
    const queryDia = props.filtro;
    const lista = props.lista;
    return (
        <Fragment>
            <View style={styles.content}>
                <TouchableOpacity style={styles.buttonQuery} onPress={() => queryDia(7)}>
                    <Text style={styles.textButtonQuery}>7 days</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonQuery} onPress={() => queryDia(15)}>
                    <Text style={styles.textButtonQuery}>15 days</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonQuery} onPress={() => queryDia(30)}>
                    <Text style={styles.textButtonQuery}>1 month</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonQuery} onPress={() => queryDia(85)}>
                    <Text style={styles.textButtonQuery}>3 months</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonQuery} onPress={() => queryDia(180)}>
                    <Text style={styles.textButtonQuery}>6 months</Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
                <FlatList data={lista} renderItem={({ item }) => { return <QuotationItems valor={item.valor} data={item.data} /> }}/>
            </ScrollView>
        </Fragment>
    );
}