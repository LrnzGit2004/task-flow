import { Image, Text, View } from "react-native";

const EmptyTaskList = () => {
  return (
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
  );
};

export default EmptyTaskList;
