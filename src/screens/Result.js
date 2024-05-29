import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import MaterialMapView from "../components/MaterialMapView";
import MaterialSearchBar from "../components/MaterialSearchBar";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons"; // 추가됨
import { GlobalStyles, Color, Border } from "../utils/styles";
import TransparentGradientBox from "../components/TransparentGradientBox";
import RoundImageButton from "../components/RoundImageButton";
import WhiteBox from "../components/WhiteBox";
import RoundIconButton from "../components/RoundIconButton";
import { usePath } from "../hooks/usePath";
import { usePlaces } from "../hooks/usePlaces";
import { useRefresh } from "../hooks/useRefresh";
import {
  storeBookmark,
  storeRecentPath,
  storeRecentPlace,
  getData,
  removeData,
} from "../utils/storage";

function Result(props) {
  const { refresh, setRefresh } = useRefresh();

  const { loading, findPath } = usePath();

  const [path, setPath] = useState();
  const [bookmarkIndex, setBookmarkIndex] = useState(-1);

  const { startId, endId } = props.route.params;

  const { places } = usePlaces();

  useEffect(() => {
    const store = async () => {
      await storeRecentPlace(startId);
      await storeRecentPlace(endId);
      await storeRecentPath(startId, endId);
    };
    store();
  }, []);

  useEffect(() => {
    const fetch = async () => {
      setPath(null);
      if (startId <= places.length && endId <= places.length) {
        const result = await findPath(places[startId - 1], places[endId - 1]);
        setPath(result);
      }
    };
    fetch();
  }, [startId, endId, JSON.stringify(places)]);

  useEffect(() => {
    const fetch = async () => {
      const result = await getData("Bookmark");
      if (result === null) return;

      let index = -1;
      result.forEach((item, i) => {
        if (item.startId === startId && item.endId === endId) {
          index = i;
        }
      });
      setBookmarkIndex(index);
    };
    fetch();
  }, [refresh]);

  return (
    <View style={GlobalStyles.background}>
      <View>
        <MaterialMapView
          style={{ height: "100%", width: "100%" }}
          loading={loading}
          path={path?.path}
        ></MaterialMapView>
        <View style={styles.wrap}>
          <TransparentGradientBox height={200} borderRadius={Border.br_xl}>
            <View style={{ marginTop: 20 }}>
              <MaterialSearchBar
                placeholder={
                  startId <= places.length
                    ? places[startId - 1]?.englishName ?? "Departure"
                    : "Departure"
                }
                navigation={props.navigation}
              ></MaterialSearchBar>
              <MaterialSearchBar
                placeholder={
                  endId <= places.length
                    ? places[endId - 1]?.englishName ?? "Destination"
                    : "Destination"
                }
                navigation={props.navigation}
              ></MaterialSearchBar>
            </View>
            <View style={styles.button}>
              <RoundImageButton
                imageSource={require("../assets/images/자산_2switch_icon.png")}
              />
            </View>
          </TransparentGradientBox>

          <View style={{ flex: 1 }} />

          <WhiteBox>
            <View style={styles.upperGroup}>
              <View style={styles.textRow}>
                <Text style={{ ...GlobalStyles.h1, marginRight: 10 }}>
                  {path?.duration}
                </Text>
                <Text style={GlobalStyles.h2}>min</Text>
              </View>
              <View style={styles.buttonRow}>
                <RoundIconButton
                  icon={
                    bookmarkIndex < 0 ? (
                      <FontAwesomeIcon name="star-o" style={styles.bigIcon} />
                    ) : (
                      <FontAwesomeIcon name="star" style={styles.bigIcon} />
                    )
                  }
                  onPress={async () => {
                    if (bookmarkIndex < 0) {
                      await storeBookmark(startId, endId);
                    } else {
                      await removeData("Bookmark", bookmarkIndex);
                    }
                    setRefresh(refresh + 1);
                  }}
                  backgroundColor="transparent"
                />
                <RoundIconButton
                  icon={<EntypoIcon name="share" style={styles.bigIcon} />}
                  backgroundColor="transparent"
                />
              </View>
            </View>

            <View style={styles.iconGroup}>
              <View style={styles.iconRow}>
                <MaterialCommunityIconsIcon
                  name="map-marker-distance"
                  style={styles.smallIcon}
                />
                <Text style={GlobalStyles.h3}>{path?.distance} m</Text>
              </View>
              <View style={styles.iconRow}>
                <IoniconsIcon name="footsteps" style={styles.smallIcon} />
                <Text style={GlobalStyles.h3}>1,462</Text>
              </View>
              <View style={styles.iconRow}>
                <MaterialCommunityIconsIcon
                  name="fire"
                  style={styles.smallIcon}
                />
                <Text style={GlobalStyles.h3}>42 kcal</Text>
              </View>
            </View>
          </WhiteBox>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    top: 85,
    right: 50,
    width: 45,
    height: 45,
    position: "absolute",
    zIndex: 1,
  },
  bigIcon: {
    color: Color.purple,
    fontSize: 35,
  },
  wrap: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
  },
  upperGroup: {
    flexDirection: "row",
    margin: 20,
    alignItems: "center",
  },
  iconGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    margin: 20,
    marginTop: 5,
    marginBottom: 35,
  },
  smallIcon: {
    color: Color.purple,
    marginRight: 10,
    fontSize: 25,
  },
  textRow: {
    height: 60,
    flexDirection: "row",
    flex: 2,
    alignItems: "baseline",
  },
  buttonRow: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
  },
  iconRow: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
  },
  icon1: {
    top: 368,
    left: 249,
    position: "absolute",
    color: "#b82c44",
    fontSize: 70,
  },
  icon2: {
    top: 257,
    left: 64,
    position: "absolute",
    color: "rgba(68,186,179,1)",
    fontSize: 70,
  },
});

export default Result;
