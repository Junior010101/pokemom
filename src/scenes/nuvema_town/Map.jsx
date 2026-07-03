import { useEffect } from "react";
import { MapRenderer } from "../../components/MapRenderer";
import nuvemaTownTilemap from "./nuvema_town.json";

export const Map = ({posX, posY,onMapLoaded, tileSize }) => {
  const visualX = posX * tileSize;
  const visualY = posY * tileSize;
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
    <div>
      <MapRenderer mapData={nuvemaTownTilemap} tileSize={tileSize}/>
    </div>
  );
};
