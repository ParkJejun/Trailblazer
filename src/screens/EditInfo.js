import React, { useState, useEffect } from "react";
import { StyleSheet, View, Alert } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialStackedLabelTextbox from "../components/MaterialStackedLabelTextbox";
import MaterialButtonViolet1 from "../components/MaterialButtonViolet1";
import { Color, GlobalStyles } from "../utils/styles";
import { usePlaces } from "../hooks/usePlaces";
import Toast from "react-native-toast-message";
import Loading from "../components/Loading";

function EditInfo(props) {
  const { id, name, englishName, buildingNum, latitude, longitude, tags } =
    props.route.params;

  console.log(props.route.params);

  const { places, updatePlace } = usePlaces();

  const [newName, setNewName] = useState(name);
  const [newEnglishName, setNewEnglishName] = useState(englishName);
  const [newBuildingNum, setNewBuildingNum] = useState(buildingNum);
  const [newLatitude, setNewLatitude] = useState(latitude);
  const [newLongitude, setNewLongitude] = useState(longitude);
  const [newTags, setNewTags] = useState(tags);

  const [loading, setLoading] = useState(false); // 로딩 상태 추가

  console.log(
    newName,
    newEnglishName,
    newBuildingNum,
    newLatitude,
    newLongitude,
    newTags
  );

  useEffect(() => {
    setNewName(name);
    setNewEnglishName(englishName);
    setNewBuildingNum(buildingNum);
    setNewLatitude(latitude);
    setNewLongitude(longitude);
    setNewTags(tags);
  }, [name, englishName, buildingNum, latitude, longitude, tags]);

  // useEffect(() => {
  //   const unsubscribe = props.navigation.addListener("beforeRemove", (e) => {
  //     // Prevent default behavior of leaving the screen
  //     e.preventDefault();
  //     // Prompt the user before leaving the screen
  //     if (
  //       places[id - 1].name !== newName ||
  //       places[id - 1].englishName !== newEnglishName ||
  //       places[id - 1].buildingNum !== newBuildingNum ||
  //       places[id - 1].latitude != newLatitude ||
  //       places[id - 1].longitude != newLongitude ||
  //       places[id - 1].tags !== newTags
  //     ) {
  //       console.log(places[id - 1]);
  //       console.log(
  //         newName,
  //         newEnglishName,
  //         newBuildingNum,
  //         newLatitude,
  //         newLongitude,
  //         newTags
  //       );
  //       Alert.alert(
  //         "Discard changes?",
  //         "If you go back, your changes will be discarded.",
  //         [
  //           {
  //             text: "Stay",
  //             style: "cancel",
  //           },
  //           {
  //             text: "Discard",
  //             onPress: () => props.navigation.dispatch(e.data.action),
  //           },
  //         ]
  //       );
  //     } else {
  //       props.navigation.dispatch(e.data.action);
  //     }
  //   });

  //   return unsubscribe;
  // }, [
  //   newName,
  //   newEnglishName,
  //   newBuildingNum,
  //   newLatitude,
  //   newLongitude,
  //   newTags,
  //   props.navigation,
  // ]);

  const handlePress = async () => {
    if (
      places[id - 1].name !== newName ||
      places[id - 1].englishName !== newEnglishName ||
      places[id - 1].buildingNum !== newBuildingNum ||
      places[id - 1].latitude != newLatitude ||
      places[id - 1].longitude != newLongitude ||
      places[id - 1].tags !== newTags
    ) {
      // check if latitude and longitude are valid
      // TODO: handle invalid input
      if (
        isNaN(newLatitude) ||
        Number(newLatitude) < -90 ||
        Number(newLatitude) > 90 ||
        Number(newLatitude) < 36.365 || // 최소 위도
        Number(newLatitude) > 36.3706 // 최대 위도
      ) {
        console.log("Invalid latitude");
        return;
      }
      if (
        isNaN(newLongitude) ||
        Number(newLongitude) < -180 ||
        Number(newLongitude) > 180 ||
        Number(newLongitude) < 127.36 || // 최소 경도
        Number(newLongitude) > 127.38 // 최대 경도
      ) {
        console.log("Invalid longitude");
        return;
      }
      setLoading(true);

      await updatePlace(
        id,
        newName,
        newEnglishName,
        newBuildingNum,
        newLatitude,
        newLongitude,
        newTags
      );
      setLoading(false);
      // Show toast message for successful save
      Toast.show({
        type: "success",
        text1: "Success",
        text2: "Changes saved successfully",
        visibilityTime: 2000, // 2 seconds
        autoHide: true,
        topOffset: 50,
        bottomOffset: 100,
        position: "bottom",
      });
      console.log("saved successly");
      props.navigation.navigate("EditStack");
    }
  };

  return (
    <View style={GlobalStyles.background}>
      <View style={styles.row}>
        <MaterialCommunityIconsIcon
          name="office-building"
          style={styles.icon}
        ></MaterialCommunityIconsIcon>
        <View>
          <MaterialStackedLabelTextbox
            label="Building name"
            value={newName}
            style={styles.materialStackedLabelTextbox}
            setValue={setNewName}
          ></MaterialStackedLabelTextbox>
          <MaterialStackedLabelTextbox
            label="Building name"
            value={newEnglishName}
            style={styles.materialStackedLabelTextbox}
            setValue={setNewEnglishName}
          ></MaterialStackedLabelTextbox>
          <MaterialStackedLabelTextbox
            label="Building number"
            value={newBuildingNum}
            style={styles.materialStackedLabelTextbox}
            setValue={setNewBuildingNum}
          ></MaterialStackedLabelTextbox>
          <MaterialStackedLabelTextbox
            label="Latitude"
            value={newLatitude.toString()}
            style={styles.materialStackedLabelTextbox}
            setValue={setNewLatitude}
          ></MaterialStackedLabelTextbox>
          <MaterialStackedLabelTextbox
            label="Longitude"
            value={newLongitude.toString()}
            style={styles.materialStackedLabelTextbox}
            setValue={setNewLongitude}
          ></MaterialStackedLabelTextbox>
          <MaterialStackedLabelTextbox
            label="Tags"
            value={newTags}
            style={styles.materialStackedLabelTextbox}
            setValue={setNewTags}
          ></MaterialStackedLabelTextbox>
        </View>
      </View>
      <MaterialButtonViolet1
        caption="Save"
        style={styles.materialButtonViolet1}
        onPress={handlePress}
      ></MaterialButtonViolet1>
      {loading && (
        <View style={styles.overlay}>
          <Loading />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    width: "100%",
    height: "100%",
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255,255,255, 0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    margin: 20,
  },
  materialStackedLabelTextbox: {
    width: 300,
    height: 50,
    overflow: "hidden",
    alignSelf: "center",
  },
  icon: {
    color: Color.gray,
    fontSize: 40,
    marginRight: 20,
  },
  materialButtonViolet1: {
    height: 36,
    width: 100,
    borderRadius: 20,
    alignSelf: "center",
  },
});

export default EditInfo;
