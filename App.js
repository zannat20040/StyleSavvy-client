import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Root from "./src/Layout/Root";
import SignUp from "./src/Layout/SignUp";
import SignIn from "./src/Layout/SignIn";
import BackBtn from "./src/Component/BackBtn";
import Profile from "./src/Layout/Profile";
import Home from "./src/Layout/Home";
import Cart from "./src/Layout/Cart";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  tabBar: {
    paddingVertical: 20,
    elevation: 7,
    height: 70,
  },
  tabBarLabel: {
    fontSize: 14,
    marginBottom: 5,
  },
});

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#FF2A5E",
        tabBarInactiveTintColor: "gray",
        tabBarLabelStyle: styles.tabBarLabel, // Apply custom label style
        tabBarStyle: styles.tabBar, // Apply custom tab bar style
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerTintColor: "#000",
          headerTitle: "Discover",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Signin"
        component={Cart}
        options={{
          headerTintColor: "#000",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Users"
        component={Profile}
        options={{
          headerTintColor: "#000",
          headerTitle: "My Users",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: "#fff" }, // Set background color to white for the whole page
        }}
      >
        <Stack.Screen
          name="Root"
          component={Root}
          options={{
            headerTransparent: true,
            headerTintColor: "#fff",
            headerTitle: "",
          }}
        />
        <Stack.Screen
          name="Signup"
          component={SignUp}
          options={{
            headerTransparent: true,
            headerTintColor: "#fff",
            headerTitle: "",
          }}
        />
        <Stack.Screen
          name="Signin"
          component={SignIn}
          options={{
            headerTransparent: true,
            headerTintColor: "#fff",
            headerTitle: "",
            headerRight: () => <BackBtn />,
          }}
        />

        <Stack.Screen
          name="MainTabs"
          component={MainTabs}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
