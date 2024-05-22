import "./global";
import React from "react";
import RootNavigator from "./src/navigation/RootNavigator";
import { Web3ContextProvider } from "./src/contexts/Web3Context";

export default function App() {
  return (
    <Web3ContextProvider>
      <RootNavigator />
    </Web3ContextProvider>
  );
}
