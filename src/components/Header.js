import React, { Component } from "react";
import { Text, View, Image, StyleSheet } from "react-native";

export class Header extends Component {
  render() {
    return (
      <View style={styles.logoHeader}>
        <View style={[{ flexDirection: "row", alignItems: "center" }]}>
          <Image
            style={{ width: 55, height: 55 }}
            source={require("../../assets/images/logo_icon.png")}
          />
          <View>
            <View style={styles.headerText}>
              <Text style={styles.textLogo}>Task</Text>
              <Text
                style={[
                  styles.textLogo,
                  {
                    color: "#2731FF",
                  },
                ]}
              >
                Flow
              </Text>
            </View>
            <Text
              style={[
                { color: "#686BA4" },
                { paddingLeft: 5 },
                { fontSize: 12 },
              ]}
            >
              Eliminez le chaos, suivez le flux !
            </Text>
          </View>
        </View>
        <Text style={[{ color: "#686BA4", fontSize: 15, fontWeight: 600 }]}>
          v 1.0.1
        </Text>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logoHeader: {
    padding: 20,
    paddingTop: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    fontFamily: "Outfit",
    //borderBottomWidth:0.2,
    //shadowOpacity: 0.2,
    //shadowColor: "#000",
    //shadowOffset: {width:0, height:0},
    //elevation: 1,
  },
  headerText: {
    flexDirection: "row",
    paddingLeft: 5,
  },
  textLogo: {
    fontSize: 30,
    fontWeight: "800",
    color: "#0A0D44",
  },
});

export default Header;
