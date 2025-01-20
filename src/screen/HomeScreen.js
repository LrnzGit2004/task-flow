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
          <Text style={{fontSize: 15, fontWeight: 500}}>Voir tout</Text>
          <Image
            style={{ marginLeft: 6 }}
            source={require("../../assets/images/arrow.png")}
            width={13}
            height={13}
          />
        </View>
      </View>

      
    </View>
  );
};

export default HomeScreen;
