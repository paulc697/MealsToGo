import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { RestaurantsScreen } from "./src/features/restaurants/components/restaurants.screen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { Text } from "react-native";
import { SafeArea } from "./src/components/utility/safe-area.component";
import { Ionicons } from "@expo/vector-icons";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  const HomeScreen = () => {
    return <RestaurantsScreen />;
  };

  const SettingsScreen = () => {
    return (
      <SafeArea>
        <Text>Settings!</Text>
      </SafeArea>
    );
  };

  const MapScreen = () => {
    return (
      <SafeArea>
        <Text>Map!</Text>
      </SafeArea>
    );
  };

  const Tab = createBottomTabNavigator();

  const TAB_ICON = {
    Restaurants: "md-restaurant",
    Settings: "md-settings",
    Map: "md-map",
  };

  const createScreenOptions = ({ route }) => {
    const iconName = TAB_ICON[route.name];
    return {
      tabBarIcon: ({ size, color }) => (
        <Ionicons name={iconName} size={size} color={color} />
      ),
      tabBarActiveTintColor: "tomato",
      tabBarInactiveTintColor: "gray",
    };
  };

  const MyTabs = () => {
    return (
      <Tab.Navigator screenOptions={createScreenOptions}>
        <Tab.Screen name="Restaurants" component={HomeScreen} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <MyTabs />
        <ExpoStatusBar style="auto" />
      </NavigationContainer>
    </ThemeProvider>
  );
}
