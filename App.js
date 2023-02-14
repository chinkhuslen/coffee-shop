// import {  StyleSheet } from "react-native";
import { SafeAreaView } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
// import { AuthProvider, useAuth } from "./src/providers";
import { AuthStackComponent } from "./src/navigator";
import { NavigationContainer } from "@react-navigation/native";
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <NavigationContainer>
        {/* <AuthProvider> */}
        {/* <TabNav /> */}
        <AuthStackComponent />
        {/* </AuthProvider> */}
      </NavigationContainer>
    </SafeAreaView>
  );
}
