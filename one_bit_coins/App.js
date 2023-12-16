import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from "react-native";
import CurrentPrice from "./src/components/CurrentPrice/";
import HistoryGraphics from "./src/components/HistoryGraphics/";
import QuotationList from "./src/components/QuotationList/";

//https://api.coindesk.com/v1/bpi/historical/close.json?start=2021-09-01&end=2021-09-05
function colocaZero(valor) {
  if (valor <= 9) {
    valor = "0" + valor;
  }
  return valor;
}

function url(qntDias) {
  let link;
  const data = new Date();
  colocaZero();
  const ultimoDia = `2021-${colocaZero(data.getMonth() + 1)}-${colocaZero(data.getDay())}`;
  data.setDate(data.getDate() - qntDias);
  const primeiroDia = `2021-${colocaZero(data.getMonth() + 1)}-${colocaZero(data.getDay())}`;
  link = `https://api.coindesk.com/v1/bpi/historical/close.json?start=${primeiroDia}&end=${ultimoDia}`;
  return link;
}

async function fazPesquisa(url) {
  let resposta = await fetch(url);
  let retornaApi = await resposta.json();
  let selecionaQuotacao = retornaApi.bpi;
  const queryCotacao = Object.keys(selecionaQuotacao).map((key) => {
    return {
      data: key.split("-").reverse().join("/"),
      valor: selecionaQuotacao[key]
    };
  });
  let pesquisa = queryCotacao.reverse();
  return pesquisa;
}

async function fazPesquisaGrafico(url) {
  let resposta = await fetch(url);
  let retornaApi = await resposta.json();
  let selecionaQuotacao = retornaApi.bpi;
  const queryCotacao = Object.keys(selecionaQuotacao).map((key) => {
    return selecionaQuotacao[key];
  });
  let pesquisaGrafico = queryCotacao;
  return pesquisaGrafico;
}

export default function App() {
  const [listaValor, setListaValor] = useState([]);
  const [listaGrafico, setListaGrafico] = useState([0]);
  const [intervaloTexto, setIntervaloTexto] = useState("Último mês");
  const [dias, setDias] = useState(30);
  const [atualizaData, setAtualizaData] = useState(true);


  function atualizaDias(valor) {
    setDias(valor);
    setAtualizaData(true);
    switch (valor) {
      case 7:
        setIntervaloTexto("Última semana:");
        break;

      case 15:
        setIntervaloTexto("Últimas 2 semanas:");
        break;

      case 30:
        setIntervaloTexto("Último mês:");
        break;

      case 85:
        setIntervaloTexto("Últimos 3 meses:");
        break;

      case 180:
        setIntervaloTexto("Últimos 6 meses:");
        break;
    }
  }

  useEffect(() => {
    fazPesquisa(url(dias)).then((data) => {
      setListaValor(data);
    });
    fazPesquisaGrafico(url(dias)).then((dataGrafico) => {
      setListaGrafico(dataGrafico);
    });

    if (atualizaData) {
      setAtualizaData(false);
    }
  }, [atualizaData]);


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="green" barStyle="light-content" />
      <CurrentPrice intervaloDias={intervaloTexto} />
      <HistoryGraphics graficoData={listaGrafico} />
      <QuotationList filtro={atualizaDias} lista={listaValor} />
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
