import "./global";
import React, { useCallback } from "react";
import { useFonts } from "expo-font";
import RootNavigator from "./src/navigation/RootNavigator";
import { Web3ContextProvider } from "./src/contexts/Web3Context";
import { RefreshContextProvider } from "./src/contexts/RefreshContext";
import Splash from "./src/screens/Splash";

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "Roboto-Bold": require("./src/assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Medium": require("./src/assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./src/assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Light": require("./src/assets/fonts/Roboto-Light.ttf"),
  });

  if (!fontsLoaded && !fontError) {
    return <Splash />;
  }

  return (
    <RefreshContextProvider>
      <Web3ContextProvider>
        <RootNavigator />
      </Web3ContextProvider>
    </RefreshContextProvider>
  );
}
