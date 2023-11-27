import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { Resultado } from "../Resultado/";

export default function Form() {
    const [height, setHeight] = React.useState(null);
    const [weight, setWeight] = React.useState(null);
    const [message, setMessage] = React.useState("Preencha o peso e a altura:");
    const [result, setResult] = React.useState(null);
    const [textButton, setTextButton] = React.useState("Calcular");

    function valida() {
        if (weight != null && height != null) {
            calculaIMC();
            setMessage = "Seu IMC é:";
            setTextButton = "Calcular novamente";
            setWeight = null;
            setHeight = null;
        }
        else {
            setResult = null;
            setTextButton = "Calcular";
            setMessage = "Preencha o peso e a altura!";
        }
    }

    function calculaIMC() {
        return setResult((weight / (height * height))).toFixed(2); //resultado apenas e 2 casas decimais
    }

    return (
        <View>
            <View>
                <Text>Altura:</Text>
                <TextInput placeholder="Ex:1,75" keyboardType="numeric" onChangeText={setHeight} value={height} />
                <Text>Peso:</Text>
                <TextInput placeholder="Ex:50,00" keyboardType="numeric" onChangeText={setWeight} value={weight} />
            </View>
            <View>
                <Button title={textButton} />
            </View>
            <View>
                <Resultado message={message} resultIMC={result} />
            </View>
        </View>
    );
}