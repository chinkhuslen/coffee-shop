import { Text, View, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const PickUpStoreBanner = () => {
  return (
    <View style={styles.shopLocBanner}>
      <View style={{ marginLeft: 15 }}>
        <Text style={styles.whiteText}>Pick-up store</Text>
        <Text style={styles.whiteText}>Barkley village * 0.5 mi</Text>
      </View>
      <View>
        <Ionicons
          style={{ marginRight: 15 }}
          name={"chevron-forward-outline"}
          size={20}
          color={"white"}
          onPress={() => alert("This is a button!")}
        />
      </View>
    </View>
  );
};
export default PickUpStoreBanner;

const styles = StyleSheet.create({
  shopLocBanner: {
    width: "100%",
    height: 50,
    backgroundColor: "#2D2A2B",
    display: "flex",
    color: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  whiteText: {
    color: "white",
  },
});
