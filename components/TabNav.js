import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../src/screens/Home.js";
import ScanScreen from "../src/screens/Scan.js";
import OrderScreen from "../src/screens/Order.js";
import ProfileScreen from "../src/screens/Profile.js";
import Ionicons from "@expo/vector-icons/Ionicons";
const Tab = createBottomTabNavigator();

export const TabNav = () => {
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
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Scan" component={ScanScreen} />
      <Tab.Screen name="Order" component={OrderScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
