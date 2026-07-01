import { useEffect } from "react";
import { MapRenderer } from "../../components/MapRenderer";
import nuvemaTownTilemap from "./nuvema_town.json";

export const Map = ({ onMapLoaded, tileSize }) => {
  useEffect(() => {
    const { width, height } = nuvemaTownTilemap;

    if (onMapLoaded) {
      onMapLoaded({
        widthPx: width * tileSize,
        heightPx: height * tileSize,
      });
    }
  }, [onMapLoaded, tileSize]);

  return (
    <>
      <MapRenderer mapData={nuvemaTownTilemap} tileSize={tileSize} />
    </>
  );
};
