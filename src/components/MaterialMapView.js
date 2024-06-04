import React, { useEffect, useRef } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import { Color } from "../utils/styles";

function MaterialMapView(props) {
  const mapViewRef = useRef(null);

  const gradientColors = [Color.lightBlue, Color.blue, Color.purple];

  const totalPoints = props.path?.length;
  const colorsPerSection = gradientColors.length; // 색상 그라데이션 간격 계산

  const strokeColors = props.path?.map((point, index) => {
    const colorIndex = Math.floor((index / totalPoints) * colorsPerSection);
    return gradientColors[colorIndex];
  });

  const animate = async () => {
    if (mapViewRef?.current && props?.path) {
      const minLat = Math.min(...props.path.map((point) => point.latitude));
      const maxLat = Math.max(...props.path.map((point) => point.latitude));
      const minLng = Math.min(...props.path.map((point) => point.longitude));
      const maxLng = Math.max(...props.path.map((point) => point.longitude));

      const latitudeDelta = maxLat - minLat;
      const longitudeDelta = maxLng - minLng;

      mapViewRef.current.animateToRegion(
        {
          latitude: (minLat + maxLat) / 2,
          longitude: (minLng + maxLng) / 2,
          latitudeDelta: latitudeDelta,
          longitudeDelta: longitudeDelta + 0.005,
        },
        1000
      );
    }
  };

  useEffect(() => {
    animate();
  }, [props?.path]);

  return (
    <View style={[styles.container, props.style]}>
      <MapView
        ref={mapViewRef}
        style={styles.MapView1}
        initialRegion={{
          latitude: props.path ? props.path[0].latitude : 36.3703,
          longitude: props.path ? props.path[0].longitude : 127.36251,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        {!props.loading && props.path ? (
          <Marker
            coordinate={{
              latitude: props.path[0].latitude,
              longitude: props.path[0].longitude,
            }}
            pinColor="green"
          />
        ) : null}
        {!props.loading && props.path ? (
          <Marker
            coordinate={{
              latitude: props.path[props.path.length - 1].latitude,
              longitude: props.path[props.path.length - 1].longitude,
            }}
            pinColor="red"
          />
        ) : null}
        {!props.loading && props.path ? (
          <Polyline
            coordinates={props.path}
            strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
            strokeColors={strokeColors}
            strokeWidth={4}
          />
        ) : null}
      </MapView>
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

export default MaterialMapView;
