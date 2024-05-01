import { useEffect, useState } from "react";
import { usePlaces } from "./usePlaces";

export const usePath = () => {
  const places = usePlaces();
  const [path, setPath] = useState();

  useEffect(async () => {
    if (places) {
      try {
        const response = await fetch(
          "https://api.openrouteservice.org/v2/directions/foot-walking/geojson",
          {
            method: "POST",
            headers: {
              Accept:
                "application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8",
              Authorization: API_KEY,
              "Content-Type": "application/json; charset=utf-8",
            },
            body: '{"coordinates":[[127.3623634,36.3706918],[127.3649988,36.3742862]]}',
          }
        );
        const json = await response.json();
        const distance = json.features[0].properties.summary.distance;
        const duration = json.features[0].properties.summary.duration;
        console.log(distance, duration);

        const coordinates = json.features[0].geometry.coordinates;

        const path = [];

        for (let i = 0; i < coordinates.length; i++) {
          path.push({
            latitude: coordinates[i][1],
            longitude: coordinates[i][0],
          });
        }

        // console.log(path);
        setPath({ distance: distance, duration: duration, path: path });
      } catch (error) {
        console.log(error);
      }
    }
  }, [places]);

  return path;
};
