import { useNavigation } from "@react-navigation/native";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
// import Ionicons from "@expo/vector-icons/Ionicons";
const ShopItem = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Scan")}>
      <View style={styles.wrapper}>
        <View>
          <Image
            style={styles.ItemImg}
            source={{
              uri: "https://feelgoodfoodie.net/wp-content/uploads/2021/11/how-to-make-hot-chocolate-7.jpg",
            }}
          />
        </View>
        <View>
          <Text style={styles.title}>Hot Chocolate</Text>
        </View>
        <View>
          <Text style={styles.price}>$3.12 / spruce</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default ShopItem;

const styles = StyleSheet.create({
  wrapper: {
    margin: 10,
  },
  whiteText: {
    color: "white",
  },
  ItemImg: { width: 160, height: 180, borderRadius: 4 },
  title: {
    fontWeight: "bold",
    marginTop: 10,
    fontSize: 16,
  },
  price: {
    fontSize: 13,
    fontWeight: "300",
    color: "#2D2A2B",
    marginTop: 5,
  },
});
