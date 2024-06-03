import React, { useEffect, useState, useRef } from "react";
import { Platform, StyleSheet, View, Text } from "react-native";
import MaterialMapView from "../components/MaterialMapView";
import MaterialSearchBar from "../components/MaterialSearchBar";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons"; // 추가됨
import { GlobalStyles, Color, Border } from "../utils/styles";
import TransparentGradientBox from "../components/TransparentGradientBox";
import WhiteBox from "../components/WhiteBox";
import RoundIconButton from "../components/RoundIconButton";
import RoundImageButton from "../components/RoundImageButton";
import { usePath } from "../hooks/usePath";
import { usePlaces } from "../hooks/usePlaces";
import { useRefresh } from "../hooks/useRefresh";
import { shareAsync } from "expo-sharing";
import ViewShot from "react-native-view-shot";
import {
  storeBookmark,
  storeRecentPath,
  storeRecentPlace,
  getData,
  removeData,
} from "../utils/storage";
import Loading from "../components/Loading";
import Toast from "react-native-toast-message";

function Result(props) {
  const params = props.route.params;
  const { refresh, setRefresh } = useRefresh();

  const { loading, findPath } = usePath();

  const [path, setPath] = useState();
  const [bookmarkIndex, setBookmarkIndex] = useState(-1);

  const { places } = usePlaces();

  const [ids, setIds] = useState({
    startId: params?.startId ?? -1,
    endId: params?.endId ?? -1,
  });

  useEffect(() => {
    if (params?.startId === params?.endId) {
      Toast.show({
        type: "success",
        text1: "Warning",
        text2: "Start and end locations cannot be same",
        visibilityTime: 2000, // 2 seconds
        autoHide: true,
        topOffset: 50,
        bottomOffset: 100,
      });
      props.navigation.navigate("SettingStack", {
        startId: params?.startId,
        endId: -1,
      });
    }
  }, []);

  const viewShotRef = useRef();

  const handleSearchPress = (type) => {
    props.navigation.navigate("Select", {
      type: type,
      startId: ids.startId,
      endId: ids.endId,
    });
  };

  useEffect(() => {
    setIds({
      startId: params?.startId ?? -1,
      endId: params?.endId ?? -1,
    });
    const store = async () => {
      await storeRecentPlace(ids.startId);
      await storeRecentPlace(ids.endId);
      await storeRecentPath(ids.startId, ids.endId);
    };
    store();
  }, []);

  useEffect(() => {
    const fetch = async () => {
      setPath(null);
      if (ids.startId <= places.length && ids.endId <= places.length) {
        const result = await findPath(
          places[ids.startId - 1],
          places[ids.endId - 1]
        );
        setPath(result);
      }
    };
    fetch();
  }, [JSON.stringify(places), ids]);

  useEffect(() => {
    const fetch = async () => {
      const result = await getData("Bookmark");
      if (result === null) return;

      let index = -1;
      result.forEach((item, i) => {
        if (item.startId === ids.startId && item.endId === ids.endId) {
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
        <ViewShot
          ref={viewShotRef}
          options={{ fileName: "shared", format: "png", quality: 1 }}
        >
          <MaterialMapView
            style={{ height: "100%", width: "100%" }}
            loading={loading}
            path={path?.path}
          ></MaterialMapView>
        </ViewShot>
        <View style={styles.wrap}>
          <TransparentGradientBox height={200} borderRadius={Border.br_xl}>
            <View style={{ marginTop: 20 }}>
              <MaterialSearchBar
                type="Departure"
                placeholder={
                  ids.startId > 0
                    ? places[ids.startId - 1]?.englishName ?? "Departure"
                    : "Departure"
                }
                onSearchPress={() => handleSearchPress("Departure")}
              />
              <MaterialSearchBar
                type="Destination"
                placeholder={
                  ids.endId > 0
                    ? places[ids.endId - 1]?.englishName ?? "Destination"
                    : "Destination"
                }
                onSearchPress={() => handleSearchPress("Destination")}
              />
            </View>

            <View style={styles.button}>
              <RoundImageButton
                onPress={() =>
                  setIds({ startId: ids.endId, endId: ids.startId })
                }
                imageSource={require("../assets/images/자산_2switch_icon.png")}
              />
            </View>
          </TransparentGradientBox>

          <View style={{ flex: 1 }} />

          <WhiteBox height={160}>
            {loading ? (
              <View
                style={{
                  width: "100%",
                  height: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Loading />
              </View>
            ) : (
              <View>
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
                          <FontAwesomeIcon
                            name="star-o"
                            style={styles.bigIcon}
                          />
                        ) : (
                          <FontAwesomeIcon name="star" style={styles.bigIcon} />
                        )
                      }
                      onPress={async () => {
                        if (bookmarkIndex < 0) {
                          await storeBookmark(ids.startId, ids.endId);
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
                      onPress={async () => {
                        const uri = await viewShotRef.current
                          .capture()
                          .catch((err) => console.log(err));
                        await shareAsync(
                          Platform.OS === "ios" ? `file://${uri}` : uri,
                          {
                            mimeType: "image/png",
                            dialogTitle: "공유하기",
                            UTI: "image/png",
                          }
                        );
                      }}
                      // onPress={onCapture}
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
                    <Text style={GlobalStyles.h3}>
                      {Math.floor(path?.distance / 0.75)} steps
                    </Text>
                  </View>
                  <View style={styles.iconRow}>
                    <MaterialCommunityIconsIcon
                      name="fire"
                      style={styles.smallIcon}
                    />
                    <Text style={GlobalStyles.h3}>
                      {((path?.distance * 3) / 1000).toFixed(1)} kcal
                    </Text>
                  </View>
                </View>
              </View>
            )}
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
