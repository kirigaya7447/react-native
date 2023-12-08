import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Vibration, Keyboard, Pressable, FlatList } from "react-native";
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
    const [listaIMC, setLista] = useState([]);

    function calculaIMC() {
        let alturaFormatada = altura.replace(",", ".");
        let imc = (peso / (alturaFormatada * alturaFormatada)).toFixed(2);
        let tipo = null;
        setResultadoIMC(imc);
        if (imc < 18.5) {
            tipo = "Magreza extrema";
        }
        else if (imc > 18.5 && imc < 24.9) {
            tipo = "Normal";
        }
        else if (imc > 25 && imc < 29.9) {
            tipo = "Sobrepeso";
        }
        else if (imc > 30 && imc < 39.9) {
            tipo = "Obesidade";
        }
        else if (imc > 40) {
            tipo = "Obesidade grave";
        }

        setTipo(tipo);
        setLista((arr) => [...arr, { id: new Date().getTime(), imc: imc, tipo: tipo }]);
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
            setMessage("O seu IMC é:");
            setTextButton("Calcular novamente");
        }
        else {
            camposVazios();
            setResultadoIMC(null);
            setTipo(null);
            setTextButton("Calcular IMC");
            setMessage("Preencha o peso e a altura!");
        }
    }

    return (
        <View style={styles.formBody}>
            {resultadoIMC == null ?
                <Pressable onPress={Keyboard.dismiss} style={styles.formText}>
                    <View>
                        <Text style={styles.formLabel}>Altura:</Text>
                        <Text style={styles.error}>{errorAltura}</Text>
                        <TextInput style={styles.input} placeholder="Ex: 1.75" keyboardType="numeric" onChangeText={setAltura} value={altura} />
                        <Text style={styles.formLabel}>Peso:</Text>
                        <Text style={styles.error}>{errorPeso}</Text>
                        <TextInput style={styles.input} placeholder="Ex: 50.00" keyboardType="numeric" onChangeText={setPeso} value={peso} />
                    </View>
                    <TouchableOpacity style={styles.button} onPress={() => verificaCalcula()}>
                        <Text style={styles.textButton}>{textButton}</Text>
                    </TouchableOpacity>
                </Pressable>
                :
                <View style={styles.formResult}>
                    <TouchableOpacity style={styles.button} onPress={() => verificaCalcula()}>
                        <Text style={styles.textButton}>{textButton}</Text>
                    </TouchableOpacity>
                    <Resultado message={message} resultadoIMC={resultadoIMC} tipo={tipoIMC} />
                </View>}
            <FlatList data={listaIMC.reverse()} renderItem={({ item }) => {
                return (
                    <View>
                        <Text style={styles.lista}>IMC: {item.imc}</Text>
                        <Text style={styles.lista}>Classificação: {item.tipo}</Text>
                    </View>)
            }} keyExtractor={(item) => {item.id}}/>
        </View>
    );
}