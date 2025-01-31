import React, { useContext, useState } from "react";
import { Text, View, Image, TouchableOpacity, FlatList } from "react-native";
import ProgressSection from "../components/ProgressSection";
import { TaskContext } from "../../TaskContext";
import TaskItem from "../components/TaskItem";
import EmptyTaskList from "../components/EmptyTaskList";

const HomeScreen = ({ navigation }) => {
  const { tasks } = useContext(TaskContext);

  const [filter, setFilter] = useState(null); // Nouveau state pour le filtre

  // Fonction pour filtrer les tâches
  const filteredTasks = filter
    ? tasks.filter((task) => task.statut === filter)
    : tasks;

  // Fonction pour gérer le changement de filtre
  const toggleFilter = (status) => {
    if (filter === status) {
      setFilter(null); // Réinitialise le filtre si le même bouton est cliqué
    } else {
      setFilter(status); // Applique le filtre
    }
  };

  // Messages personnalisés pour les tâches filtrées
  const noTasksMessage =
    filter === 0
      ? "Vous n'avez pas de tâches en cours"
      : "Pas de tâches terminées";

  return (
    <View style={{ flex: 1 }}>
      <ProgressSection />
      <View
        style={{
          paddingHorizontal: 25,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 20,
          justifyContent: "space-between",
        }}
      >
        {tasks.length === 0 ? (
          ""
        ) : (
          <>
            <Text style={{ fontSize: 18, fontWeight: "500" }}>
              Filtrer par :
            </Text>
            <View style={{ flexDirection: "row", gap: 5 }}>
              {/* <TouchableOpacity
                onPress={() => toggleFilter(0)}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 5,
                  backgroundColor: filter === 0 ? "#ffeb99" : "#fff1d7", // Change color if selected
                  paddingHorizontal: 10,
                  paddingVertical: 10,
                  borderRadius: 12,
                  borderColor: "#eeaf3a",
                  borderStyle: "solid",
                  borderWidth: 1,
                }}
              >
                <Text style={{ fontSize: 14 }}>En cours</Text>
                <Image
                  style={{ width: 20, height: 20, borderRadius: 50 }}
                  source={require("../../assets/images/progress_icon.png")}
                />
              </TouchableOpacity> */}
              <TouchableOpacity
                onPress={() => toggleFilter(1)}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 5,
                  backgroundColor: filter === 1 ? "#b7f7c3" : "#deffd5",
                  paddingHorizontal: 10,
                  paddingVertical: 10,
                  borderRadius: 12,
                  borderColor: "#1b8c00",
                  borderStyle: "solid",
                  borderWidth: 1,
                }}
              >
                <Text style={{ fontSize: 14 }}>Terminée(s)</Text>
                <Image
                  style={{ width: 20, height: 20, borderRadius: 50 }}
                  source={require("../../assets/images/completed_icon.png")}
                />
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>

      {/* Affichage des messages personnalisés si aucune tâche ne correspond au filtre */}
      {filteredTasks.length === 0 && filter !== null && (
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 16, textAlign: "center", color: "#777" }}>
            {noTasksMessage}
          </Text>
        </View>
      )}

      {/* Affichage des tâches filtrées */}
      <FlatList
        data={filteredTasks}
        scrollEnabled
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <TaskItem task={item} />}
        ListEmptyComponent={tasks.length === 0 && <EmptyTaskList />}
        style={{ backgroundColor: "#f1f2fe" }}
      />

      <View
        style={{
          paddingRight: 20,
          paddingTop: 10,
          position: "absolute",
          right: 10,
          top: 670,
          zIndex: 10,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Form")}>
          <Image
            style={{
              width: 50,
              height: 50,
              borderRadius: 50,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 1,
              elevation: 2,
            }}
            source={require("../../assets/images/add_icon.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
