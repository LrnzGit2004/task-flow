import { SafeAreaView, StyleSheet, Text, View, Platform, StatusBar } from "react-native";
import HomeScreen from "./src/screen/HomeScreen";
import Header from "./src/components/Header";

export default function App() {
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <Header/>
      <View>
        <HomeScreen />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
});
