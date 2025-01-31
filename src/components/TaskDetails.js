import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TaskDetails = ({ task }) => {
  // Valeurs par défaut si les données sont manquantes
  const {
    title = "Titre non défini",
    description = "Pas de description",
    startDate,
    endDate,
    startTime,
    endTime,
    statut = 0,
  } = task;

  const formattedStartDate = startDate
    ? new Date(startDate).toLocaleDateString()
    : "Non défini";
  const formattedEndDate = endDate
    ? new Date(endDate).toLocaleDateString()
    : "Non défini";
  const formattedStartTime = startTime
    ? new Date(startTime).toLocaleTimeString()
    : "Non définie";
  const formattedEndTime = endTime
    ? new Date(endTime).toLocaleTimeString()
    : "Non définie";

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>

      <View style={styles.dateContainer}>
        <Text style={styles.dateLabel}>Début :</Text>
        <Text style={styles.dateValue}>
          {formattedStartDate} - {formattedStartTime}
        </Text>
      </View>

      <View style={styles.dateContainer}>
        <Text style={styles.dateLabel}>Fin :</Text>
        <Text style={styles.dateValue}>
          {formattedEndDate} - {formattedEndTime}
        </Text>
      </View>

      <Text
        style={[
          styles.status,
          statut === 0 ? styles.inProgress : styles.completed,
        ]}
      >
        Statut : {statut === 0 ? "En cours 🔁" : "Complétée ✅"}
      </Text>
      <Text style={styles.footer}>
        <Text style={{ fontSize: 10, color:"#4B53FF" }}>Powered by TaskFlow {"\n"}</Text>{" "}
        Éliminez le Chaos, Suivez le Flux !
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    backgroundColor: "#F7F7FF",
    borderRadius: 15,
    padding: 20,
    paddingBottom: 0,
    borderWidth: 2,
    borderColor: "#4B53FF",
    borderBottomWidth: 0,
  },
  title: {
    fontSize: 22,
    fontWeight: "800",
    color: "#1E1E1E",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#333",

    marginBottom: 15,
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginVertical: 5,
  },
  dateLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#222",
  },
  dateValue: {
    fontSize: 14,
    fontWeight: "400",
    color: "#222",
  },
  status: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 15,
  },
  inProgress: {
    color: "#eeaf3a", // Vert pour "En cours"
  },
  completed: {
    color: "#1b8c00", // Gris pour "Complétée"
  },
  footer: {
    fontSize: 8,
    color: "#666",
    textAlign: "center",
    marginTop: 25,
  },
});

export default TaskDetails;
