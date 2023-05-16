import { View, Text, StyleSheet } from "react-native";

function BuildingsScreen() {
  return (
    <View style={styles.rootContainer}>
      <Text>
        This is the <Text style={styles.highlight}>"Buildings Screen"</Text>{" "}
        screen!
      </Text>
    </View>
  );
}

export default BuildingsScreen;

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
