import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import FMXScreen from "./screens/FMXScreen";
import UserScreen from "./screens/UserScreen";
import UtilitiesScreen from "./screens/UtilitiesScreen";
import SettingsScreen from "./screens/SettingsScreen";

const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <BottomTab.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#0F92B3" },
            headerTintColor: "white",
            tabBarActiveTintColor: "#0F92B3",

            // drawerStyle: { backgroundColor: "#ccc" },
          }}
        >
          <BottomTab.Screen
            name="FMX"
            component={FMXScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" size={size} color={color} />
              ),
            }}
          />
          <BottomTab.Screen
            name="Utilities"
            component={UtilitiesScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="color-wand" size={size} color={color} />
              ),
            }}
          />
          <BottomTab.Screen
            name="User"
            component={UserScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="person" size={size} color={color} />
              ),
            }}
          />
          <BottomTab.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="settings" size={size} color={color} />
              ),
            }}
          />
        </BottomTab.Navigator>
      </NavigationContainer>
    </>
  );
}
