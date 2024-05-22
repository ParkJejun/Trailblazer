import { useCallback, useState } from "react";

export const usePath = () => {
  const [loading, setLoading] = useState(false);
  const [path, setPath] = useState();

  const findPath = useCallback(async (src, dst) => {
    setLoading(true);

    try {
      const response = await fetch(
        "https://api.openrouteservice.org/v2/directions/foot-walking/geojson",
        {
          method: "POST",
          headers: {
            Accept:
              "application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8",
            Authorization: "API_KEY",
            "Content-Type": "application/json; charset=utf-8",
          },
          body: JSON.stringify({
            coordinates: [
              [src.longitude, src.latitude],
              [dst.longitude, dst.latitude],
            ],
          }),
        }
      );
      const json = await response.json();
      const distance = json.features[0].properties.summary.distance;
      const duration = json.features[0].properties.summary.duration;

      const coordinates = json.features[0].geometry.coordinates;

      const p = [];

      for (let i = 0; i < coordinates.length; i++) {
        p.push({
          latitude: coordinates[i][1],
          longitude: coordinates[i][0],
        });
      }

      setPath({ distance: distance, duration: duration, path: p });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return { loading, path, findPath };
};
