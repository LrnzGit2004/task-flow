import React, { useState, useContext, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import { TaskContext } from "../../TaskContext";
import TaskDetails from "../components/TaskDetails";
import * as Notifications from "expo-notifications";

const TaskItem = ({ task }) => {
  const { deleteTask, toggleTaskStatus } = useContext(TaskContext);
  const [modalVisible, setModalVisible] = useState(false);

  // Icônes pour les tâches en cours et terminées
  const progressIcon = require("../../assets/images/progress_icon.png");
  const completedIcon = require("../../assets/images/completed_icon.png");

  // Variables des tâches
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

  // useEffect pour la notification
  useEffect(() => {
    const scheduleNotification = async () => {
      // Demander la permission pour afficher des notifications
      const { status } = await Notifications.getPermissionsAsync();
      
      if (status === "granted") {
        // Convertir la startTime en Date
        const notificationTime = new Date(startTime);
        notificationTime.setSeconds(0); // S'assurer que les secondes sont à zéro

        // Planifier la notification
        await Notifications.scheduleNotificationAsync({
          content: {
            title: "Tâche en cours",
            body: `Votre tâche "${title}" commence maintenant.`,
          },
          trigger: {
            hour: notificationTime.getHours(),
            minute: notificationTime.getMinutes(),
            repeats: false, // Si tu veux répéter la notification, mets à true
          },
        });
      }
    };
    
    // Appeler la fonction pour programmer la notification
    if (startTime) scheduleNotification();
  }, [startTime, title]);

  return (
    <>
      <TouchableOpacity onPress={() => setModalVisible(true)} activeOpacity={1}>
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
                {task.description.slice(0, 30) + "..."}
              </Text>
            </View>
            <View style={{ flexDirection: "row-reverse", gap: 5 }}>
              <TouchableOpacity onPress={() => deleteTask(task.id)}>
                <Image
                  source={require("../../assets/images/trash_icon.png")}
                  style={{ width: 30, height: 30, borderRadius: 30 }}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => toggleTaskStatus(task.id)}>
                <Image
                  source={task.statut === 0 ? progressIcon : completedIcon}
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 30,
                    marginRight: 10,
                  }}
                />
              </TouchableOpacity>
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
      </TouchableOpacity>

      {/* Modal pour afficher les détails */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <TaskDetails task={task} />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  taskTitle: { fontSize: 15, fontWeight: "800" },
  taskDescription: { fontSize: 14, color: "#2f2f2f" },
  taskDate: { fontSize: 10.5, color: "#6f6f6f", marginTop: 12 },
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
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: "90%",
    paddingVertical: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
});

export default TaskItem;
