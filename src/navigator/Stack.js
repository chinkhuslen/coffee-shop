import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, TouchableOpacity } from "react-native";
import MyModal from "../screens/MyModal";
// import { Home, LoginScreen, OTPScreen, Profile } from "../screens";
import { BottomTabs } from "./Bottom";

const AuthStack = createNativeStackNavigator();

export const AuthStackComponent = () => {
  return (
    <AuthStack.Navigator>
      {/* <AuthStack.Screen name="login" component={LoginScreen} />
      <AuthStack.Screen
        name="otpscreen"
        component={OTPScreen}
        options={({ navigation }) => ({
          headerLeft: () => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate("login")}>
                <Text>back to login</Text>
              </TouchableOpacity>
            );
          },
        })}
      /> */}
      <AuthStack.Screen
        name="mainscreen"
        component={BottomTabs}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="MyModal"
        component={MyModal}
        options={{
          headerShown: false,
        }}
      />
    </AuthStack.Navigator>
  );
};
