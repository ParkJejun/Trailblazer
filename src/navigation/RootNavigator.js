import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Bookmark from "../screens/Bookmark";
import Edit from "../screens/Edit";
import EditInfo from "../screens/EditInfo";
import Result from "../screens/Result";
import Search from "../screens/Search";
import Select from "../screens/Select";
import Select1 from "../screens/Select1";
import SelectMap from "../screens/SelectMap";
import Setting from "../screens/Setting";
import Splash from "../screens/Splash";

const Tab = createBottomTabNavigator();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Bookmark" component={Bookmark} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Edit" component={Edit} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
