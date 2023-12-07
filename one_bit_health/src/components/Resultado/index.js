import React from "react";
import { View, Text, Share, TouchableOpacity } from "react-native";
import styles from "./style";

export default function Resultado(props) {

    const compartilhar = async () => {
        const resultado = await Share.share({message: `${"Veja só o meu app criado com o React Native. Este é o resultado do meu IMC, que é: "}` `${props.resultadoIMC}`  `${" e estou classificado como: "}` `${props.tipo}`});
    };

    return (
        <View style={styles.corpoResultado}>
            <Text style={styles.resultado}>{props.message} {props.resultadoIMC}</Text>
            {props.tipo != null ?
                <Text style={styles.resultado}>Você está classificado como: {props.tipo}</Text>
                : <View />
            }
            <View>
                {props.resultadoIMC != null ?
                    <TouchableOpacity style={styles.botaoCompartilha} onPress={compartilhar}>
                        <Text style={styles.textoBotao}>Compartilhar</Text>
                    </TouchableOpacity>
                    : <View />
                }
            </View>
        </View>
    );
}