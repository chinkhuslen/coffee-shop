import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { ScanScreen, OrderScreen, ProfileScreen } from "../screens";
import HomeScreen from "../screens/Home";
import ScanScreen from "../screens/Scan";
import OrderScreen from "../screens/Order";
import ProfileScreen from "../screens/Profile";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Image } from "react-native";
const Tab = createBottomTabNavigator();

export const ModalScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 30 }}>This is a modal!</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
};

export const BottomTabs = () => {
  function HeaderLogo() {
    return (
      <Image
        style={{ width: 168, height: 25 }}
        source={require("../../assets/headerLogo.png")}
      />
    );
  }
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case "Home":
              iconName = focused ? "ios-home" : "ios-home-outline";
              break;
            case "Profile":
              iconName = focused ? "ios-person" : "ios-person-outline";
              break;
            case "Scan":
              iconName = focused ? "ios-scan" : "ios-scan-outline";
              break;
            case "Order":
              iconName = focused ? "ios-cart" : "ios-cart-outline";
              break;
            default:
              iconName = focused
                ? "ios-help-circle"
                : "ios-help-circle-outline";
              break;
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: (props) => <HeaderLogo />,
          headerRight: () => (
            <Ionicons
              style={{ marginRight: 15 }}
              name={"ios-basket"}
              size={20}
              color={"black"}
              onPress={() => alert("This is a button!")}
            />
          ),
        }}
      />
      <Tab.Screen name="Scan" component={ScanScreen} />
      <Tab.Screen name="Order" component={OrderScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
