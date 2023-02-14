import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { Pressable, SafeAreaView, Text, TextInput } from "react-native";
import { useAuth } from "../providers";

export const LoginScreen = ({ navigation }) => {
  const { handleChangePhoneNumber, signInWithPhoneNumber, user } = useAuth();
  const navigate = useNavigation();
  useEffect(() => {
    if (user) navigate.navigate("mainscreen");
  }, []);
  return (
    <SafeAreaView>
      <Text>This is login</Text>
      <TextInput
        placeholder="99009900"
        onChangeText={handleChangePhoneNumber}
        keyboardType="phone-pad"
      />
      <Pressable
        onPress={async () => {
          await signInWithPhoneNumber();
          navigation.navigate("otpscreen");
        }}
      >
        <Text>GOTO OTP</Text>
      </Pressable>
    </SafeAreaView>
  );
};
