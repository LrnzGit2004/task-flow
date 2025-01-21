import React, { useState, useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { TaskContext } from "../../TaskContext";

const TaskItem = ({ task }) => {
  const { tasks, deleteTask } = useContext(TaskContext);
  const {
    title = "Titre non défini",
    description = "Pas de description",
    startDate,
    endDate,
  } = task;

  const formattedStartDate = startDate
    ? new Date(startDate).toLocaleDateString()
    : "Non défini";
  const formattedEndDate = endDate
    ? new Date(endDate).toLocaleDateString()
    : "Non défini";
  return (
    <View style={styles.taskItem}>
      <View>
        <Text style={styles.taskTitle}>{task.title}</Text>
        <Text style={styles.taskDescription}>{task.description}</Text>
        <Text style={styles.taskDate}>
          Du : {formattedStartDate} Au : {formattedEndDate}
        </Text>
      </View>
      <View style={{ flexDirection: "row-reverse" }}>
        <TouchableOpacity onPress={() => deleteTask(task.id)}>
          <Image
            source={require("../../assets/images/trash_icon.png")}
            style={{ width: 30, height: 30, borderRadius: 30 }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => deleteTask(task.id)}>
          <Image
            source={require("../../assets/images/update_icon.png")}
            style={{ width: 30, height: 30, borderRadius: 30, marginRight: 10 }}
          />
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={() => deleteTask(task.id)}>
          <Image
            source={require("../../assets/images/completed_icon.png")}
            style={{ width: 30, height: 30, borderRadius: 30, marginRight: 10 }}
          />
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  taskItem: {
    margin: 25,
    marginTop: 10,
    paddingHorizontal: 15,
    backgroundColor: "#EDEEFF",
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  taskTitle: { fontSize: 15, fontWeight: "800", paddingTop: 14 },
  taskDescription: { fontSize: 14, color: "#555" },
  taskDate: { fontSize: 12, color: "#999", marginTop: 5, paddingBottom: 14 },
  noTasks: { textAlign: "center", marginTop: 20, fontSize: 16, color: "#999" },
});

export default TaskItem;
