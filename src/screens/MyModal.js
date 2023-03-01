import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { Button } from "react-native-elements";
import Ionicons from "@expo/vector-icons/Ionicons";
const MyModal = ({ route, navigation }) => {
  const { itemId, itemUrl, itemName, itemPrice } = route.params;
  return (
    <ScrollView>
      <View>
        <View style={styles.nav}>
          <Button
            icon={
              <Ionicons size={25} name="chevron-back-outline" color={"black"} />
            }
            style={styles.iconBtn}
            onPress={() => navigation.goBack()}
            type="clear"
          />
          <Button
            icon={<Ionicons name={"ios-basket"} size={25} color={"black"} />}
            style={styles.iconBtn}
            onPress={() => alert("This is a button!")}
            type="clear"
          />
        </View>
        <View style={{ zIndex: -9999999999 }}>
          <Image
            style={{
              width: "95%",
              height: 200,
              borderRadius: 5,
              display: "absolute",
              top: 0,
              zIndex: -9999,
            }}
            source={{ uri: itemUrl }}
          />
        </View>
      </View>
    </ScrollView>
  );
};
export default MyModal;

const styles = StyleSheet.create({
  whiteText: {
    color: "white",
  },
  nav: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    width: "100%",
    top: 50,
  },
  iconBtn: {
    backgroundColor: "rgba(0,0,0,0.3)",
    borderRadius: "50%",
    margin: 20,
  },
});
``;
