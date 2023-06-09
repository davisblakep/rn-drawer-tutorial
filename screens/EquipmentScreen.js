import { View, Text, StyleSheet } from "react-native";

function EquipmentScreen() {
  return (
    <View style={styles.rootContainer}>
      <Text>
        This is the <Text style={styles.highlight}>"Equipment Screen"</Text>{" "}
        screen!
      </Text>
    </View>
  );
}

export default EquipmentScreen;

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
