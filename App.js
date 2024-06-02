import "./global";
import React, { useCallback } from "react";
import { useFonts } from "expo-font";
import RootNavigator from "./src/navigation/RootNavigator";
import { Web3ContextProvider } from "./src/contexts/Web3Context";
import { RefreshContextProvider } from "./src/contexts/RefreshContext";
import Splash from "./src/screens/Splash";
import Toast from "react-native-toast-message";
import { Color, GlobalStyles } from "./src/utils/styles";
import { View, Text } from "react-native";

const toastConfig = {
  success: ({ text1, text2 }) => (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        height: 50,
        width: "85%",
        backgroundColor: "rgba(255,255,255, 0.7)",
        padding: 10,
        borderRadius: 18,
        justifyContent: "center",
      }}
    >
      <Text style={{ ...GlobalStyles.body, color: Color.black }}>{text2}</Text>
    </View>
  ),
};

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
        <Toast config={toastConfig} />
      </Web3ContextProvider>
    </RefreshContextProvider>
  );
}
