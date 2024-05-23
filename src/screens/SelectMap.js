import React, {
  Component,
  useState,
  useRef,
  useEffect,
  useLayoutEffect,
} from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import MaterialMapView from "../components/MaterialMapView";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import Svg, { Ellipse } from "react-native-svg";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import MaterialButtonWithShadow from "../components/MaterialButtonWithShadow";
import MaterialIconTextButtonsFooter from "../components/MaterialIconTextButtonsFooter";
import TransparentGradientBox from "../components/TransparentGradientBox";
import { GlobalStyles, Color } from "../../GlobalStyles";
import WhiteBox from "../components/WhiteBox";
import RoundIconButton from "../components/RoundIconButton";
import RoundImageButton from "../components/RoundImageButton";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const data = {
  name: "E3 Information & Electronics B/D",
  description:
    "A building containing laboratories and classrooms for the Department of Electrical and Electronic Engineering and Computer Science.",
};

const tags = [
  {
    id: "1",
    icon: "silverware-fork-knife",
    caption: "Restaurant",
  },
  {
    id: "2",
    icon: "coffee",
    caption: "Cafe",
  },
  {
    id: "3",
    icon: "printer",
    caption: "Printer",
  },
  {
    id: "4",
    icon: "store",
    caption: "Store",
  },
];

const tagItem = ({ item }) => (
  <View style={GlobalStyles.listItemRow}>
    <MaterialButtonWithShadow
      icon={item.icon}
      caption={item.caption}
      style={{ height: 40 }}
    ></MaterialButtonWithShadow>
  </View>
);

function SelectMap(props) {
  // const [whiteBoxHeight, setWhiteBoxHeight] = useState(0);
  // const whiteBoxRef = useRef(null);

  // useEffect(() => {
  //   if (whiteBoxRef.current) {
  //     const height = whiteBoxRef.current.offsetHeight;
  //     setWhiteBoxHeight(height);
  //     console.log("whiteBoxHeight: " + height);
  //   }
  // }, []);

  return (
    <View style={GlobalStyles.background}>
      <View>
        <MaterialMapView
          style={{ height: "100%", width: "100%" }}
        ></MaterialMapView>
        <View style={styles.wrap}>
          <TransparentGradientBox height={60}>
            <Text style={{ ...GlobalStyles.h3, color: "white" }}>
              Move the map to save the location
            </Text>
          </TransparentGradientBox>
          <EntypoIcon name="location-pin" style={styles.loc_icon}></EntypoIcon>

          <View style={{ flex: 1 }} />
          <View
            style={{
              position: "absolute",
              right: 30,
              bottom: 300,
              // bottom: WhiteBoxHeight+40,
            }}
          >
            <RoundIconButton
              onPress={() => console.log("Button pressed")}
              icon={
                <MaterialCommunityIcons
                  name="target"
                  style={styles.target_icon}
                />
              }
              backgroundColor="white"
            />
          </View>

          {/* <WhiteBox ref={whiteBoxRef}> */}

          <WhiteBox>
            <View style={{ flexDirection: "row", margin: 20 }}>
              <Text
                style={{ ...GlobalStyles.h2, flex: 1, whiteSpace: "nowrap" }}
              >
                {data.name}
              </Text>
              <View style={{ marginLeft: 30 }}>
                <RoundIconButton
                  icon={
                    <FontAwesomeIcon
                      name="long-arrow-right"
                      style={styles.arrow_icon}
                    />
                  }
                />
              </View>
            </View>
            <Text
              style={{
                ...GlobalStyles.body2,
                marginLeft: 20,
                marginRight: 20,
              }}
            >
              {data.description}
            </Text>
            <View
              style={{
                margin: 20,
                marginBottom: 0,
                height: 50,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FlatList
                data={tags}
                renderItem={tagItem}
                keyExtractor={(item) => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />
            </View>
            <TouchableOpacity onPress={() => console.log("Button pressed")}>
              <Text
                style={{
                  ...GlobalStyles.body2,
                  margin: 20,
                  marginTop: 10,
                  marginBottom: 10,
                  textAlign: "right",
                }}
              >
                Edit the information
              </Text>
            </TouchableOpacity>
          </WhiteBox>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rect2: {
    width: 350,
    height: 50,
    position: "absolute",
    top: 100,
    borderRadius: 15,
    left: 13,
    overflow: "hidden",
  },
  target_icon: {
    color: Color.purple, // 아이콘 색상 설정
    fontSize: 35, // 아이콘 크기 설정
  },
  arrow_icon: {
    color: "white", // 아이콘 색상 설정
    fontSize: 35, // 아이콘 크기 설정
  },
  rect1: {
    left: 0,
    width: 375,
    height: 91,
    position: "absolute",
    top: 0,
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: "row",
  },
  icon4: {
    color: "rgba(128,128,128,1)",
    fontSize: 30,
    height: 33,
    width: 30,
  },
  loremIpsum: {
    color: "#121212",
    fontSize: 18,
    marginLeft: 56,
    marginTop: 8,
  },
  icon4Row: {
    height: 33,
    flexDirection: "row",
    flex: 1,
    marginRight: 103,
    marginLeft: 17,
    marginTop: 45,
  },
  wrap: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
  },
  loc_icon: {
    position: "absolute",
    alignSelf: "center",
    top: "30%",
    color: Color.purple,
    fontSize: 70,
  },
  group2: {
    top: 460,
    left: 17,
    width: 336,
    height: 250,
    position: "absolute",
  },
  rect3: {
    width: 336,
    height: 230,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 30,
    marginTop: 20,
  },
  n13TaeWulGwan: {
    color: "#121212",
    lineHeight: 20,
    fontSize: 18,
    marginTop: 2,
  },
  button3: {
    width: 45,
    height: 45,
    marginLeft: 98,
  },
  ellipse4: {
    top: 0,
    left: 0,
    width: 45,
    height: 45,
    position: "absolute",
  },
  icon9: {
    top: 7,
    left: 7,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 30,
  },
  ellipse4Stack: {
    width: 45,
    height: 45,
  },
  n13TaeWulGwanRow: {
    height: 45,
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 28,
    marginRight: 27,
  },
  text3: {
    color: "#121212",
    opacity: 0.5,
    fontSize: 12,
    marginTop: 21,
    marginLeft: 28,
  },
  group1: {
    width: 80,
    height: 36,
  },
  icon7: {
    top: 7,
    left: 16,
    position: "absolute",
    color: "#6e45e2",
    fontSize: 20,
  },
  materialButtonWithShadow1: {
    height: 36,
    width: 80,
    position: "absolute",
    left: 0,
    top: 0,
  },
  icon7Stack: {
    width: 80,
    height: 36,
  },
  group3: {
    width: 80,
    height: 36,
    marginLeft: 24,
  },
  materialButtonWithShadow2: {
    height: 36,
    width: 100,
    position: "absolute",
    left: 0,
    top: 0,
  },
  icon10: {
    top: 7,
    left: 13,
    position: "absolute",
    color: "#6e45e2",
    fontSize: 20,
  },
  materialButtonWithShadow2Stack: {
    width: 100,
    height: 36,
  },
  group1Row: {
    height: 36,
    flexDirection: "row",
    marginTop: 21,
    marginLeft: 20,
    marginRight: 133,
  },
  editTheInformation: {
    color: "#121212",
    opacity: 0.5,
    fontSize: 12,
    marginTop: 14,
    marginLeft: 203,
  },
  materialIconTextButtonsFooter1: {
    height: 81,
    width: 375,
    position: "absolute",
    left: 0,
    top: 731,
  },
  button2: {
    top: 420,
    left: 281,
    width: 45,
    height: 45,
    position: "absolute",
  },
  ellipse2: {
    top: 0,
    left: 0,
    width: 45,
    height: 45,
    position: "absolute",
  },
  image: {
    top: 6,
    left: 6,
    width: 32,
    height: 32,
    position: "absolute",
  },
  ellipse2Stack: {
    width: 45,
    height: 45,
  },
});

export default SelectMap;
