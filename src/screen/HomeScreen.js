import React, { Component, useContext } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import ProgressSection from "../components/ProgressSection";
import { TaskContext } from "../../TaskContext";
import TaskItem from "../components/TaskItem";

const HomeScreen = ({ navigation }) => {
  const { tasks } = useContext(TaskContext);

  return (
    <View style={{ flex: 1 }}>
      {" "}
      {/* Assurez-vous que le conteneur parent est flexible */}
      <ProgressSection />
      <View style={{ paddingLeft: 25 }}>
        <Text style={{ fontSize: 22, fontWeight: "500", marginBottom: 30 }}>
          Tâches
        </Text>
      </View>
      <FlatList
        data={tasks}
        scrollEnabled
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <TaskItem task={item} />}
        ListEmptyComponent={
          <View style={{ alignItems: "center", marginTop: 30 }}>
            <Image
              style={{ marginLeft: 6, width: 150, height: 150 }}
              source={require("../../assets/images/no_task_icon.png")}
            />
            <Text
              style={{
                color: "red",
                fontSize: 19,
                marginTop: 20,
                fontWeight: "500",
              }}
            >
              Vous n’avez aucune tâche
            </Text>
            <Text style={{ fontSize: 19, marginTop: 15, fontWeight: "500" }}>
              Créez une tâche pour commencer
            </Text>
          </View>
        }
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
            style={{ width: 50, height: 50, borderRadius: 50 }}
            source={require("../../assets/images/add_icon.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
