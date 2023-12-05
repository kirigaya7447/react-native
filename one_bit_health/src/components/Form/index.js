import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Vibration } from "react-native";
import Resultado from "../Resultado/";
import styles from "./style";

export default function Form() {

    const [altura, setAltura] = useState(null);
    const [peso, setPeso] = useState(null);
    const [tipoIMC, setTipo] = useState(null);
    const [message, setMessage] = useState("Preencha o peso e a altura!");
    const [resultadoIMC, setResultadoIMC] = useState(null);
    const [textButton, setTextButton] = useState("Calcular IMC");
    const [errorAltura, setErrorAlt] = useState(null);
    const [errorPeso, setErrorPeso] = useState(null);

    function calculaIMC() {
        setResultadoIMC((peso / (altura * altura)).toFixed(2));
        if (resultadoIMC < 18.5) {
            setTipo("Magreza extrema");
        }
        else if (resultadoIMC > 18.5 && resultadoIMC < 24.9) {
            setTipo("Normal");
        }
        else if (resultadoIMC > 25 && resultadoIMC < 29.9) {
            setTipo("Sobrepeso");
        }
        else if (resultadoIMC > 30 && resultadoIMC < 39.9) {
            setTipo("Obesidade");
        }
        else if (resultadoIMC > 40) {
            setTipo("Obesidade grave");
        }
        return resultadoIMC;
    }

    function camposVazios() {
        if (altura == null && peso == null) {
            setErrorAlt("Campo obrigatório*");
            setErrorPeso("Campo obrigatório*");
            let cont = 1;
            while (cont <= 2) {
                Vibration.vibrate(500);
                cont++;
            }
        }
        else if (altura == null) {
            setErrorAlt("Campo obrigatório*");
            setErrorPeso(null);
            Vibration.vibrate(1000);
        }
        else if (peso == null) {
            setErrorPeso("Campo obrigatório*");
            setErrorAlt(null);
            Vibration.vibrate(1000);
        }
    }

    function verificaCalcula() {
        if (altura != null && peso != null) {
            calculaIMC();
            setErrorAlt(null);
            setErrorPeso(null);
            setAltura(null);
            setPeso(null);
            setMessage("Seu IMC é:");
            setTextButton("Calcular novamente");
        }
        else {
            camposVazios();
            setResultadoIMC(null);
            setTextButton("Calcular IMC");
            setMessage("Preencha o peso e a altura!");
        }
    }

    return (
        <View style={styles.formBody}>
            <View style={styles.formText}>
                <Text style={styles.formLabel}>Altura:</Text>
                <Text style={styles.error}>{errorAltura}</Text>
                <TextInput style={styles.input} placeholder="Ex: 1.75" keyboardType="numeric" onChangeText={setAltura} value={altura} />
                <Text style={styles.formLabel}>Peso:</Text>
                <Text style={styles.error}>{errorPeso}</Text>
                <TextInput style={styles.input} placeholder="Ex: 50.00" keyboardType="numeric" onChangeText={setPeso} value={peso} />
            </View>
            <View>
                <TouchableOpacity style={styles.button} onPress={() => verificaCalcula()}>
                    <Text style={styles.textButton}>{textButton}</Text>
                </TouchableOpacity>
                <Resultado message={message} resultadoIMC={resultadoIMC} tipo={tipoIMC}/>
            </View>
        </View>
    );
}