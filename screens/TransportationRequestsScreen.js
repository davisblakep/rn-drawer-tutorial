import { View, Text, StyleSheet } from "react-native";

function TransportationRequestsScreen() {
  return (
    <View style={styles.rootContainer}>
      <Text>
        This is the{" "}
        <Text style={styles.highlight}>"Transportation Requests Screen"</Text>{" "}
        screen!
      </Text>
    </View>
  );
}

export default TransportationRequestsScreen;

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
