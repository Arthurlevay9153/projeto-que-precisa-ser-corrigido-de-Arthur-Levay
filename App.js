import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BottomTab from "./screens/bottomTabNavigator";
import * as Font from "expo-font";
import { Rajdhani_600SemiBold } from "@expo-google-fonts/rajdhani";

export default class App extends React.Component {
  constructor() {
    super();

    //criar um estado para verificar se a font foi carregada
    this.state = {
      fontloaded: false,
    };
  }

  //primeiro carregar a font, depois carregar a font na tela
  async loadfont() {
    await Font.loadAsync({
      Rajdhani_600SemiBold: Rajdhani_600SemiBold,
    });

    this.setState({
      fontloaded: true,
    });
  }

  //quando o applicativo for carregado ele vai realizar o que tiver dentro da funcao
  conponentDidMount() {
    this.loadfont();
  }

  //quando a font for carragada o bottom tab vai ser carregado, caso contario ele nao vai carregar nada
  render() {
    if (this.state.fontloaded) {
      return <BottomTab> </BottomTab>;
    }

    return null;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
