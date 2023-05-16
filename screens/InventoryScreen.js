import { View, Text, StyleSheet } from "react-native";

function InventoryScreen() {
  return (
    <View style={styles.rootContainer}>
      <Text>
        This is the <Text style={styles.highlight}>"Inventory Screen"</Text>{" "}
        screen!
      </Text>
    </View>
  );
}

export default InventoryScreen;

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
