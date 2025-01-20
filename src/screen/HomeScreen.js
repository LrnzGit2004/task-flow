import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import ProgressSection from "../components/ProgressSection";

const HomeScreen = () => {
  return (
    <View>
      <ProgressSection />
      <View
        style={{
          paddingLeft: 25,
          paddingRight: 25,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 22, fontWeight: 500 }}>Tâches</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ fontSize: 15, fontWeight: 500 }}>Voir tout</Text>
          <Image
            style={{ marginLeft: 6 }}
            source={require("../../assets/images/arrow.png")}
            width={13}
            height={13}
          />
        </View>
      </View>

      <View style={{ alignItems: "center", marginTop: 30 }}>
        <Image
          style={{ marginLeft: 6, width: 150, height: 150 }}
          source={require("../../assets/images/no_task_icon.png")}
        />
        <Text
          style={{ color: "red", fontSize: 19, marginTop: 20, fontWeight: 500 }}
        >
          Vous n’avez aucune tâche{" "}
        </Text>
        <Text style={{ fontSize: 19, marginTop: 15, fontWeight: 500 }}>
          Créez une tâche pour commencer
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          top: 200,
          justifyContent: "space-between",
          paddingLeft:30,
          paddingRight:30
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Image
            style={{ width: 30, height: 30 }}
            source={require("../../assets/images/progress_icon.png")}
          />
          <Text style={{ fontSize: 15, marginTop: 10, fontWeight: 500 }}>
            En cours
          </Text>
        </View>
        <View>
        <Image
            style={{ width: 50, height: 50, borderRadius:50 }}
            source={require("../../assets/images/add_icon.png")}
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <Image
            style={{ width: 30, height: 30 }}
            source={require("../../assets/images/completed_icon.png")}
          />
          <Text style={{ fontSize: 15, marginTop: 10, fontWeight: 500 }}>
            Terminée(s)
          </Text>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
