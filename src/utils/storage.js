import AsyncStorage from "@react-native-async-storage/async-storage";
import { getDate } from "./time";

const storeData = async (key, value) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    if (jsonValue === null) {
      await AsyncStorage.setItem(key, JSON.stringify([value]));
    } else {
      const arr = JSON.parse(jsonValue);
      // Check if the value already exists in the array
      for (let i = 0; i < arr.length; i++) {
        if (JSON.stringify(arr[i]) === JSON.stringify(value)) {
          return;
        }
      }
      arr.push(value);
      await AsyncStorage.setItem(key, JSON.stringify(arr));
    }
  } catch (e) {
    console.log(e);
  }
};

export const storeBookmark = async (startId, endId) => {
  await storeData("Bookmark", { startId, endId });
};

export const storeRecentPath = async (startId, endId) => {
  const date = getDate();
  await storeData("RecentPath", { startId, endId, date });
};

export const storeRecentPlace = async (placeId) => {
  const date = getDate();
  await storeData("RecentPlace", { placeId, date });
};

export const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(e);
  }
};

export const removeData = async (key, index) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    if (jsonValue !== null) {
      const arr = JSON.parse(jsonValue);
      if (arr.length < index) {
        return;
      }
      arr.splice(index, 1);
      await AsyncStorage.setItem(key, JSON.stringify(arr));
    }
  } catch (e) {
    console.log(e);
  }
};

export const removeAllData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.log(e);
  }
};
