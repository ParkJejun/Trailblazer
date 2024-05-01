import { useEffect, useState } from "react";
import { places as p } from "../assets/place";

export const usePlaces = () => {
  const [places, setPlaces] = useState();

  useEffect(() => {
    // fetch from blockchain
    setPlaces(p);
  }, []);

  return places;
};
