import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Bookmark from "../screens/Bookmark";
import Edit from "../screens/Edit";
import Setting from "../screens/Setting";
import Select from "../screens/Select"; // Select 스크린을 import합니다.
import { Color } from "../../GlobalStyles";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Bookmark 스크린에 대한 Stack Navigator 구성
const BookmarkStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Bookmark"
      component={Bookmark}
      options={({ navigation }) => ({
        // navigation prop을 받아서 사용
        title: "Bookmarked",
        headerTitleAlign: "center", // 타이틀을 가운데로 정렬
        headerLeft: () => (
          <MaterialCommunityIcons
            name="arrow-left"
            size={24}
            color={Color.darkGray}
            style={{ marginLeft: 10 }}
            onPress={() => navigation.navigate("Setting")} // navigation prop에서 navigate 호출
          />
        ),
      })}
    />
  </Stack.Navigator>
);

// Edit 스크린에 대한 Stack Navigator 구성
const EditStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Edit"
      component={Edit}
      options={({ navigation }) => ({
        // navigation prop을 받아서 사용
        title: "Edit Map",
        headerTitleAlign: "center", // 타이틀을 가운데로 정렬
        headerLeft: () => (
          <MaterialCommunityIcons
            name="arrow-left"
            size={24}
            color="black"
            style={{ marginLeft: 10 }}
            onPress={() => navigation.navigate("Setting")} // navigation prop에서 navigate 호출
          />
        ),
      })}
    />
  </Stack.Navigator>
);

// Setting 스크린에 대한 Stack Navigator 구성
const SettingStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Setting"
      component={Setting}
      options={{
        headerShown: false, // Setting 스크린은 헤더를 숨깁니다.
      }}
    />
    <Stack.Screen
      name="Select"
      component={Select}
      options={{
        headerShown: false, // Setting 스크린은 헤더를 숨깁니다.
      }}
    />
  </Stack.Navigator>
);

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "Bookmark") {
              iconName = "bookmark";
            } else if (route.name === "Search") {
              iconName = "magnify";
            } else if (route.name === "Edit") {
              iconName = "pencil";
            }

            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          },
          tabBarActiveTintColor: Color.purple, // 활성 탭의 아이콘 색상
          tabBarInactiveTintColor: "gray", // 비활성 탭의 아이콘 색상
        })}
      >
        <Tab.Screen name="Bookmark" component={BookmarkStack} />
        <Tab.Screen name="Search" component={SettingStack} />
        <Tab.Screen name="Edit" component={EditStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
