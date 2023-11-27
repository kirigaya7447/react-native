import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import Resultado from "../Resultado/"

export default function Form() {

    const [altura, setAltura] = useState(null);
    const [peso, setPeso] = useState(null);
    const [message, setMessage] = useState("Preencha o peso e a altura!");
    const [resultadoIMC, setResultadoIMC] = useState(null);
    const [textButton, setTextButton] = useState("Calcular IMC");

    function calculaIMC() {
        return setResultadoIMC((peso / (altura * altura)).toFixed(2));
    }

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
        <View>
            <View>
                <Text>Altura:</Text>
                <TextInput placeholder="Ex: 1.75" keyboardType="numeric" onChangeText={setAltura} value={altura} />
                <Text>Peso:</Text>
                <TextInput placeholder="Ex: 50.00" keyboardType="numeric" onChangeText={setPeso} value={peso} />
            </View>
            <View>
                <Button title={textButton} onPress={() => camposVazios()} />
                <Resultado message={message} resultadoIMC={resultadoIMC} />
            </View>
        </View>
    );
}