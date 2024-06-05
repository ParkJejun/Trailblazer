import React, { useEffect, useRef } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { getCurrentPosition } from "../utils/location";

function MaterialMapViewSelect(props) {
  const mapViewRef = useRef(null);

  const handleRegionChangeComplete = (region) => {
    props.setRegion(region);
  };

  useEffect(() => {
    const animate = async () => {
      if (mapViewRef?.current && props.refresh > 0) {
        const current = await getCurrentPosition();
        if (!current) return;

        mapViewRef.current.animateToRegion(
          {
            latitude: current.latitude,
            longitude: current.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          },
          1000
        );
      }
    };
    animate();
  }, [props.refresh]);

  return (
    <View style={[styles.container, props.style]}>
      <MapView
        ref={mapViewRef}
        style={styles.MapView1}
        initialRegion={{
          latitude: 36.3703,
          longitude: 127.36251,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        onRegionChangeComplete={handleRegionChangeComplete}
        provider={PROVIDER_GOOGLE}
      ></MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  MapView1: {
    flex: 1,
    backgroundColor: "rgb(230,230,230)",
  },
});

export default MaterialMapViewSelect;
