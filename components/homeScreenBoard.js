import { Text, View, StyleSheet, Image } from "react-native";
// import Ionicons from "@expo/vector-icons/Ionicons";
const HomeScreenBoard = () => {
  return (
    <View
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        marginTop: 15,
      }}
    >
      <Image
        style={{ width: "95%", height: 200, borderRadius: 5 }}
        source={require("../assets/homeScreen.png")}
      />
    </View>
  );
};
export default HomeScreenBoard;

const styles = StyleSheet.create({
  whiteText: {
    color: "white",
  },
});
