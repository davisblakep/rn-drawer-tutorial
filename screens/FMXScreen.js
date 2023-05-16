import { View, Text, StyleSheet } from "react-native";
import MaintenanceRequestsScreen from "./MaintenanceRequestsScreen";
import { Ionicons } from "@expo/vector-icons";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import EquipmentScreen from "./EquipmentScreen";
import TransportationRequestsScreen from "./TransportationRequestsScreen";
import BuildingsScreen from "./BuildingsScreen";
import InventoryScreen from "./InventoryScreen";
import ResourcesScreen from "./ResourcesScreen";

const Drawer = createDrawerNavigator();

function FMXScreen() {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#E7F4F7" },
          headerTintColor: "#38383D",
          drawerActiveBackgroundColor: "#94C5D1",
          drawerActiveTintColor: "#38383D",
          // drawerStyle: { backgroundColor: "#ccc" },
        }}
      >
        <Drawer.Screen
          name="Maintenance"
          component={MaintenanceRequestsScreen}
          options={{
            drawerLabel: "Maintenance",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="build" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="Transportation"
          component={TransportationRequestsScreen}
          options={{
            drawerLabel: "Transportation",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="md-car" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="Buildings"
          component={BuildingsScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="md-business" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="Equipment"
          component={EquipmentScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="ios-briefcase" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="Inventory"
          component={InventoryScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="cube" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="Resources"
          component={ResourcesScreen}
          options={{
            drawerLabel: "Resources & Locations",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="flag" color={color} size={size} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default FMXScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  highlight: {
    fontWeight: "bold",
    color: "#eb1064",
  },
});
