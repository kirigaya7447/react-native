import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

export default function Contacts({ navigation }) {

    return (
        <View>
            <View style={styles.contato}>
                <Text style={styles.link} onPress={() => navigation.navigate("Informations",
                    {
                        nome: "Nando Moura",
                        telefone: "35 696969699",
                        numero: 69,
                        corcueca: "rosa",
                        corcalcinha: "azul",
                        sangue: "sua mãe",
                        vai: "YEEESSSS",
                        profissao: "sua mãe",
                    })}>Clique para mais informações</Text>
                <Text>Nome: Nando Moura</Text>
                <Text>Telefone: 35 696969699</Text>
            </View>
            <View style={styles.contato}>
                <Text style={styles.link} onPress={() => navigation.navigate("Informations",
                    {
                        nome: "Carlos Alberto",
                        telefone: "11 9896546354987",
                        numero: 85,
                        corcueca: "branca toda rasgada",
                        corcalcinha: "preta fio dental e renda",
                        sangue: "vermelho",
                        vai: "Acho que não",
                        profissao: "ver sua mãe!!!!!",
                    })}>Clique para mais informações</Text>
                <Text>Nome: Carlos Alberto</Text>
                <Text>Telefone: 11 9896546354987</Text>
            </View>
        </View>
    );
}