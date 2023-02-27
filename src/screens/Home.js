import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import PickUpStoreBanner from "../../components/pickUpStoreBanner";
import HomeScreenBoard from "../../components/homeScreenBoard";
import ShopItem from "../../components/shopItem";
const HomeScreen = () => {
  return (
    <ScrollView>
      <PickUpStoreBanner />
      <HomeScreenBoard />
      <View style={{ display: "flex", width: "100%" }}>
        <ShopItem />
        <ShopItem />
      </View>
    </ScrollView>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  whiteText: {
    color: "white",
  },
});
