import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Resultado from "../Resultado/";
import styles from "./style";

export default function Form() {

    const [altura, setAltura] = useState(null);
    const [peso, setPeso] = useState(null);
    const [message, setMessage] = useState("Preencha o peso e a altura!");
    const [resultadoIMC, setResultadoIMC] = useState(null);
    const [textButton, setTextButton] = useState("Calcular IMC");
    const [errorMessage, setError] = useState(null);

    function calculaIMC() {
        return setResultadoIMC((peso / (altura * altura)).toFixed(2));
    }

    function camposVaazios

    function camposVazios() {
        if (altura != null && peso != null) {
            calculaIMC();
            setAltura(null);
            setPeso(null);
            setMessage("Seu IMC é:");
            setTextButton("Calcular novamente");
            return;
        } 
        else {
            setResultadoIMC(null);
            setTextButton("Calcular IMC");
            setMessage("Preencha o peso e a altura!");
        }
    }

    return (
        <View style={styles.formBody}>
            <View style={styles.formText}>
                <Text style={styles.formLabel}>Altura:</Text>
                <TextInput style={styles.input} placeholder="Ex: 1.75" keyboardType="numeric" onChangeText={setAltura} value={altura} />
                <Text style={styles.formLabel}>Peso:</Text>
                <TextInput style={styles.input} placeholder="Ex: 50.00" keyboardType="numeric" onChangeText={setPeso} value={peso} />
            </View>
            <View>
                <TouchableOpacity style={styles.button} onPress = {() => camposVazios()}>
                    <Text style={styles.textButton}>{textButton}</Text>
                </TouchableOpacity>
                <Resultado message={message} resultadoIMC={resultadoIMC} />
            </View>
        </View>
    );
}