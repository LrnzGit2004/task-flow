import React, { useState, useContext, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { TaskContext } from "../../TaskContext";

const FormScreen = ({ route, navigation }) => {
  const { addTask, updateTask, tasks } = useContext(TaskContext);

  // Récupérer l'ID de la tâche et vérifier si on est en mode modification
  const { taskId } = route.params || {};
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showStartTimePicker, setShowStartTimePicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);
  const [showEndTimePicker, setShowEndTimePicker] = useState(false);

  // Si on est en mode modification, charger la tâche existante
  // useEffect(() => {
  //   if (taskId) {
  //     const task = tasks.find((task) => task.id === taskId);
  //     if (task) {
  //       setTitle(task.title);
  //       setDescription(task.description);
  //       setStartDate(new Date(task.startDate));
  //       setEndDate(new Date(task.endDate));
  //     }
  //   }
  // }, [taskId, tasks]);

  const handleSubmit = () => {
    if (!title || !description) {
      Alert.alert("Erreur", "Veuillez remplir tous les champs.");
      return;
    }

    if (taskId) {
      // Mettre à jour la tâche existante
      updateTask(taskId, {
        title,
        description,
        startDate,
        endDate,
        startTime,
        endTime,
      });
      Alert.alert("Succès", "Tâche mise à jour !");
    } else {
      // Ajouter une nouvelle tâche
      addTask({ title, description, startDate, endDate, startTime, endTime });
      Alert.alert("Succès", "Tâche ajoutée✅");
    }

    navigation.goBack(); // Retourner à la page Home
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Titre</Text>
      <TextInput
        style={styles.input}
        placeholder="Entrez un titre"
        value={title}
        onChangeText={setTitle}
      />

      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.input}
        placeholder="Entrez une description"
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <Text style={styles.label}>Date et heure de début</Text>
      <View style={styles.dateField}>
        <TouchableOpacity onPress={() => setShowStartPicker(true)}>
          <View style={styles.dateButton}>
            <Text style={{ paddingHorizontal: 9, color: "#2731ff" }}>
              {startDate.toLocaleDateString()}
            </Text>
            <Image
              style={{ width: 40, height: 40 }}
              source={require("../../assets/images/calendar_icon.png")}
            />
          </View>
        </TouchableOpacity>
        {showStartPicker && (
          <DateTimePicker
            value={startDate}
            mode="date"
            display="default"
            onChange={(event, date) => {
              setShowStartPicker(false);
              if (date) setStartDate(date);
            }}
          />
        )}
        <TouchableOpacity onPress={() => setShowStartTimePicker(true)}>
          <View style={styles.dateButton}>
            <Text style={{ paddingHorizontal: 9, color: "#2731ff" }}>
              {startTime.toLocaleTimeString()}
            </Text>
            <Image
              style={{ width: 40, height: 40 }}
              source={require("../../assets/images/time_icon.png")}
            />
          </View>
        </TouchableOpacity>
        {showStartTimePicker && (
          <DateTimePicker
            value={startDate}
            mode="time"
            display="clock"
            onChange={(event, time) => {
              setShowStartTimePicker(false);
              if (time) setStartTime(time);
            }}
          />
        )}
      </View>

      <Text style={styles.label}>Date et heure de fin</Text>
      <View style={styles.dateField}>
        <TouchableOpacity onPress={() => setShowEndPicker(true)}>
          <View style={styles.dateButton}>
            <Text style={{ paddingHorizontal: 9, color: "#2731ff" }}>
              {endDate.toLocaleDateString()}
            </Text>
            <Image
              style={{ width: 40, height: 40 }}
              source={require("../../assets/images/calendar_icon.png")}
            />
          </View>
        </TouchableOpacity>
        {showEndPicker && (
          <DateTimePicker
            value={endDate}
            mode="date"
            display="default"
            onChange={(event, date) => {
              setShowEndPicker(false);
              if (date) setEndDate(date);
            }}
          />
        )}
        <TouchableOpacity onPress={() => setShowEndTimePicker(true)}>
          <View style={styles.dateButton}>
            <Text style={{ paddingHorizontal: 9, color: "#2731ff" }}>
              {endTime.toLocaleTimeString()}
            </Text>
            <Image
              style={{ width: 40, height: 40 }}
              source={require("../../assets/images/time_icon.png")}
            />
          </View>
        </TouchableOpacity>
        {showEndTimePicker && (
          <DateTimePicker
            value={endDate}
            mode="time"
            display="clock"
            onChange={(event, date) => {
              setShowEndTimePicker(false);
              if (date) setEndTime(date);
            }}
          />
        )}
      </View>

      <TouchableOpacity
        onPress={handleSubmit}
        style={{
          backgroundColor: "#4B53FF",
          marginTop: 30,
          width: 170,
          alignSelf: "center",
          paddingBottom: 9,
          paddingTop: 9,
          borderRadius: 10,
        }}
      >
        <Text style={{ fontSize: 18, color: "white", textAlign: "center" }}>
          {taskId ? "Mettre à jour" : "Ajouter"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  dateField: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    backgroundColor: "#EDEEFF",
  },
  dateButton: {
    fontSize: 16,
    //color: "#007BFF",
    marginBottom: 15,
    backgroundColor: "#EDEEFF",

    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    width: "171",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default FormScreen;
