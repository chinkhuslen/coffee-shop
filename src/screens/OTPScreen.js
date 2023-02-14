import { useNavigation } from "@react-navigation/native";
import { Button, SafeAreaView, Text, TextInput } from "react-native";
import { useAuth } from "../providers";
import firestore from "@react-native-firebase/firestore";

export const OTPScreen = () => {
  const navigator = useNavigation();
  const { handleChangeConfirmationCode, confirmCode } = useAuth();
  return (
    <SafeAreaView>
      <Text>This is OTP</Text>
      <TextInput
        placeholder="123456"
        onChangeText={handleChangeConfirmationCode}
        keyboardType="number-pad"
      />
      <Button
        title="goto mainscreen"
        onPress={async () => {
          try {
            const isConfirmed = await confirmCode();
            console.log(isConfirmed);
            if (!isConfirmed?.additionalUserInfo?.isNewuser) {
              console.log(
                "is new",
                isConfirmed?.additionalUserInfo?.phoneNumber
              );
              await firestore()
                .collection("users")
                .doc(isConfirmed?.user?.uid)
                .set({
                  phoneNumber: isConfirmed?.user?.phoneNumber,
                });
            }
            console.log("isConfirmed", isConfirmed);
            navigator.navigate("mainscreen");
          } catch (error) {
            console.log(error);
          }
        }}
      />
    </SafeAreaView>
  );
};
