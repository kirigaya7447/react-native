import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from "react-native";
import CurrentPrice from "./src/components/CurrentPrice/";
import HistoryGraphics from "./src/components/HistoryGraphics/";
import QuotationList from "./src/components/QuotationList/";
import QuotationItems from "./src/components/QuotationList/QuotationItems/";

//https://api.coindesk.com/v1/bpi/historical/close.json?start=2021-09-01&end=2021-09-05
function colocaZero(valor) {
  if (valor <= 9) {
    valor = "0" + valor;
  }
}

function url(dias) {
  const data = new Date();
  colocaZero();
  const ultimoDia = `2021-${colocaZero(data.getMonth() + 1)}-${colocaZero(data.getDay())}`;
  data.setDate(data.getDate() - dias);
  const primeiroDia = `2021-${colocaZero(data.getMonth() + 1)}-${colocaZero(data.getDay())}`;
  return "https://api.coindesk.com/v1/bpi/historical/close.json?start=" + primeiroDia + "&end=" + ultimoDia;
}

async function fazPesquisa(url) {
  let resposta = await fetch(url);
  let retornaApi = await resposta.json();
  let selecionaQuotacao = retornaApi.bpi;
  const query = Object.keys(selecionaQuotacao).map((key) => {
    return {
      data: key.split("-").reverse().join("/"),
      valor: selecionaQuotacao[key]
    };});
  let data = query.reverse();
  console.log(data);
}

async function fazPesquisaGrafico(url) {
  let resposta = await fetch(url);
  let retornaApi = await resposta.json();
  let selecionaQuotacao = retornaApi.bpi;
  const query = Object.keys(selecionaQuotacao).map((key) => {
    selecionaQuotacao[key];
  });
  let dataGrafico = query;
  console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" + dataGrafico);
}

export default function App() {
  const [listaValor, setListaValor] = useState([]);
  const [listaGrafico, setGrafico] = useState([0]);
  const [dias, setDias] = useState(30);
  const [listaAtualizaData, setAtualizaData] = useState(true);


function atualizaDias(valor){
  setDias(valor);
  setAtualizaData(true);
}

useEffect(() => {
fazPesquisa(url(dias)).then((data) => {
  setListaValor(data)
});
fazPesquisaGrafico(url(dias)).then((dataGrafico) => {
  setGrafico(dataGrafico)
});

if(listaAtualizaData){
  setAtualizaData(false);
}
}, [listaAtualizaData]);


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="green" barStyle="light-content" />
      <CurrentPrice />
      <HistoryGraphics />
      <QuotationList />
      <QuotationItems />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    color: "white",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? 40 : 0,
  },
});
