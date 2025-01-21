import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { TaskContext } from "../../TaskContext";

const FormScreen = ({ navigation }) => {
  const { addTask } = useContext(TaskContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);

  const handleSubmit = () => {
    if (!title || !description) {
      Alert.alert("Erreur", "Veuillez remplir tous les champs.");
      return;
    }

    addTask({ title, description, startDate, endDate });

    Alert.alert("Succès", "Tâche ajoutée !");
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

      <Text style={styles.label}>Date début</Text>
      <TouchableOpacity onPress={() => setShowStartPicker(true)}>
        <Text style={styles.dateButton}>{startDate.toLocaleDateString()}</Text>
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

      <Text style={styles.label}>Date fin</Text>
      <TouchableOpacity onPress={() => setShowEndPicker(true)}>
        <Text style={styles.dateButton}>{endDate.toLocaleDateString()}</Text>
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
          Ajouter
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
    color: "#007BFF",
    marginBottom: 15,
    backgroundColor: "#EDEEFF",
    padding: 9,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
  },
});

export default FormScreen;
