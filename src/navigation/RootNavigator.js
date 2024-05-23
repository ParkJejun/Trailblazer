import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

import Bookmark from "../screens/Bookmark";
import Edit from "../screens/Edit";
import Setting from "../screens/Setting";
import Select from "../screens/Select"; // Select 스크린을 import합니다.
import { Color } from "../../GlobalStyles";
import SelectMap from "../screens/SelectMap";
import BackButton from "../components/BackButton";

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const BookmarkStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="BookmarkStack"
      component={Bookmark}
      options={({ navigation }) => ({
        title: "Bookmarked",
        headerTitleAlign: "center",
        headerLeft: () => (
          <BackButton onPress={() => navigation.navigate("Search")} />
        ),
      })}
    />
  </Stack.Navigator>
);

const EditStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="EditStack"
      component={Edit}
      options={({ navigation }) => ({
        title: "Edit Map",
        headerTitleAlign: "center",
        headerLeft: () => (
          <BackButton onPress={() => navigation.navigate("Search")} />
        ),
      })}
    />
  </Stack.Navigator>
);

const SettingStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="SettingStack"
      component={Setting}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Select"
      component={Select}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="SelectMap"
      component={SelectMap}
      options={({ navigation }) => ({
        title: "Select Map",
        headerTitleAlign: "center",
        headerLeft: () => <BackButton onPress={() => navigation.goBack()} />,
      })}
    />
  </Stack.Navigator>
);

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Search"
        activeColor={Color.purple}
        inactiveColor="gray"
        barStyle={{ backgroundColor: "white" }}
        // tabBar={(props) => (
        //   <Animated.View
        //     entering={FadeInUp}
        //     exiting={FadeOutDown}
        //     layout={Layout.duration(100)}
        //     style={{
        //       height: tabBarVisible ? 80 : 0,
        //     }}
        //   >
        //     <BottomTabBar {...props} />
        //   </Animated.View>
        // )}
      >
        <Tab.Screen
          name="Bookmark"
          component={BookmarkStack}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="bookmark" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={SettingStack}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="magnify" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Edit"
          component={EditStack}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="pencil" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
