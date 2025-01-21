import React, { useState, useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import * as Progress from "react-native-progress";
import { TaskContext } from "../../TaskContext";

const ProgressSection = () => {
  const { tasks } = useContext(TaskContext);

  // Compter les tâches complétées
  const completedTasks = tasks.filter(
    (task) => task.status === "completed"
  ).length;
  const totalTasks = tasks.length;

  // Calculer la progression
  const progressPercentage = totalTasks > 0 ? completedTasks / totalTasks : 0;

  return (
    <View style={styles.container}>
      <Text style={[styles.text, { fontSize: 18, fontWeight: "500" }]}>
        Progression totale des tâches
      </Text>
      <Text style={styles.text}>
        Complétées : {completedTasks}/{totalTasks}
      </Text>
      <Text style={[styles.text, { marginBottom: 2 }]}>
        {Math.floor(progressPercentage * 100)}%
      </Text>
      <Progress.Bar
        progress={progressPercentage}
        width={null}
        height={14}
        borderRadius={20}
        color="#39f329"
        unfilledColor="#f9f9f9"
        borderWidth={0}
        style={styles.progress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 25,
    backgroundColor: "#4B53FF",
    borderRadius: 10,
    padding: 30,
    paddingTop: 15,
    paddingBottom: 20,
    fontFamily: "Outfit",
  },
  text: {
    color: "#fff",
    fontSize: 15,
    marginBottom: 10,
  },
  progress: {
    width: "100%",
    height: 13,
    borderRadius: 20,
  },
});

export default ProgressSection;
