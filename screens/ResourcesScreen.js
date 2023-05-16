import { View, Text, StyleSheet } from "react-native";

function ResourcesScreen() {
  return (
    <View style={styles.rootContainer}>
      <Text>
        This is the <Text style={styles.highlight}>"Resources Screen"</Text>{" "}
        screen!
      </Text>
    </View>
  );
}

export default ResourcesScreen;

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
