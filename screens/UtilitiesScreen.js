import { View, Text, Button, StyleSheet } from "react-native";

function UtilitiesScreen({ navigation }) {
  // function openDrawerHandler() {
  //   navigation.toggleDrawer();
  // }

  return (
    <View style={styles.rootContainer}>
      <Text>
        This is the <Text style={styles.highlight}>"Utilities"</Text> screen!
      </Text>

      {/* <Button title="Open Drawer" onPress={openDrawerHandler} /> */}
    </View>
  );
}

export default UtilitiesScreen;

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
