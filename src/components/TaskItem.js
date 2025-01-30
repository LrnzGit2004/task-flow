import React, { useState, useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { TaskContext } from "../../TaskContext";

const TaskItem = ({ task, navigation }) => {
  const { tasks, deleteTask, toggleTaskStatus } = useContext(TaskContext);
  const {
    title = "Titre non défini",
    description = "Pas de description",
    startDate,
    endDate,
    startTime,
    endTime,
  } = task;

  const formattedStartDate = startDate
    ? new Date(startDate).toLocaleDateString()
    : "Non défini";
  const formattedEndDate = endDate
    ? new Date(endDate).toLocaleDateString()
    : "Non défini";
  const formatedStartTime = startTime
    ? new Date(startTime).toLocaleTimeString()
    : "Non définie";
  const formatedEndTime = endTime
    ? new Date(endTime).toLocaleTimeString()
    : "Non définie";

  return (
    <View
      style={{
        marginHorizontal: 25,
        marginTop: 5,
        paddingHorizontal: 15,
        marginBottom: 10,
        borderRadius: 10,
        borderWidth: 1,
        flexDirection: "column",
        paddingVertical: 14,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        elevation: 3,
        borderColor: `${task.statut === 0 ? "#eeaf3a" : "#1b8c00"}`,
        backgroundColor: `${task.statut === 0 ? "#fff1d7" : "#deffd5"}`,
      }}
    >
      <View style={styles.taskFirstRow}>
        <View>
          <Text style={styles.taskTitle}>{task.title}</Text>
          <Text style={styles.taskDescription}>
            {task.description.slice(0, 30)}
          </Text>
        </View>
        <View style={{ flexDirection: "row-reverse", gap: 5 }}>
          <TouchableOpacity onPress={() => deleteTask(task.id)}>
            <Image
              source={require("../../assets/images/trash_icon.png")}
              style={{ width: 30, height: 30, borderRadius: 30 }}
            />
          </TouchableOpacity>
          {task.statut === 0 ? (
            <TouchableOpacity onPress={() => toggleTaskStatus(task.id)}>
              <Image
                source={require("../../assets/images/progress_icon.png")}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 30,
                  marginRight: 10,
                }}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => toggleTaskStatus(task.id)}>
              <Image
                source={require("../../assets/images/completed_icon.png")}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 30,
                  marginRight: 10,
                }}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View style={styles.taskLastRow}>
        <Text style={styles.taskDate}>
          Du : {formattedStartDate} À : {formatedStartTime}
        </Text>
        <Text style={styles.taskDate}>
          Au : {formattedEndDate} À : {formatedEndTime}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  taskItem: {},
  taskTitle: { fontSize: 15, fontWeight: "800" },
  taskDescription: { fontSize: 14, color: "#2f2f2f" },
  taskDate: { fontSize: 10.5, color: "#6f6f6f", marginTop: 12 },
  noTasks: { textAlign: "center", marginTop: 20, fontSize: 16, color: "#999" },

  taskFirstRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  taskLastRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default TaskItem;
