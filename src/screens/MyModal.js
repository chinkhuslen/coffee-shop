import {
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  ScrollView,
} from "react-native";
const MyModal = ({ navigation }) => {
  return (
    <ScrollView>
      <View>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    </ScrollView>
  );
};
export default MyModal;

const styles = StyleSheet.create({
  whiteText: {
    color: "white",
  },
});
