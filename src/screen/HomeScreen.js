import React, { useContext } from "react";
import { Text, View, Image, TouchableOpacity, FlatList } from "react-native";
import ProgressSection from "../components/ProgressSection";
import { TaskContext } from "../../TaskContext";
import TaskItem from "../components/TaskItem";
import EmptyTaskList from "../components/EmptyTaskList";
import TaskDetails from "../components/TaskDetails";

const HomeScreen = ({ navigation }) => {
  const { tasks } = useContext(TaskContext);
  const completedTasks = tasks.filter((task) => task.statut === 1).length;

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
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 5,
                  backgroundColor: "#fff1d7",
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
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 5,
                  backgroundColor: "#deffd5",
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
      {/* <FlatList
        data={tasks}
        scrollEnabled
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <TaskItem task={item} />}
        ListEmptyComponent={<EmptyTaskList />}
        style={{ backgroundColor: "#f1f2fe" }}
      /> */}
      <TaskDetails/>
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
