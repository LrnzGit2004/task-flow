import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import * as Progress from "react-native-progress";

const ProgressSection = () => {
  const [progress, setProgress] = useState(0);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setProgress((prevProgress) => {
  //         if (prevProgress >= 1) {
  //           clearInterval(interval); // Arrête l'intervalle quand la progression est terminée
  //           return 1;
  //         }
  //         return prevProgress + 0.1;
  //       });
  //     }, 1000); // Met à jour la progression toutes les secondes

  //     return () => clearInterval(interval); // Nettoyer l'intervalle lors du démontage du composant
  //   }, []);

  return (
    <View style={styles.container}>
      <Text style={[styles.text, { fontSize: 18, fontWeight: 500 }]}>
        Progression totale des tâches
      </Text>
      <Text style={[styles.text]}>Complétées : 0/0</Text>
      <Text style={[styles.text, { marginBottom: 2 }]}>
        {Math.floor(progress * 100)}%
      </Text>
      <Progress.Bar progress={progress} style={styles.progress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 25,
    backgroundColor: "#4B53FF",
    borderRadius: 10,
    padding: 30,
    paddingTop:15,
    paddingBottom:20,
    fontFamily: "Outfit",
  },
  text: {
    color: "#fff",
    fontSize: 15,
    marginBottom: 10,
  },
  progress: {
    width: "auto",
    height: 13,
    borderRadius:20,
    backgroundColor: "#8F90A4"
  }
});

export default ProgressSection;
