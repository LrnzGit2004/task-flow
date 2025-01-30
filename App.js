import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TaskProvider } from "./TaskContext";
import HomeScreen from "./src/screen/HomeScreen";
import FormScreen from "./src/screen/FormScreen";
import Header from "./src/components/Header";

const Stack = createStackNavigator();

export default function App() {
  return (
    <TaskProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ header: () => <Header /> }}
          />
          <Stack.Screen
            name="Form"
            component={FormScreen}
            options={{ title: "Créez une tâche" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </TaskProvider>
  );
}
