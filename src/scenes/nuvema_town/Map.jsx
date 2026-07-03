import { useEffect } from "react";
import { MapRenderer } from "../../components/MapRenderer";
import nuvemaTownTilemap from "./nuvema_town.json";

export const Map = ({posX, posY,onMapLoaded, tileSize }) => {
  const visualX = posX * tileSize * -1;
  const visualY = posY * tileSize * -1;
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
    <div style={{transform: `translate3d(${visualX}px, ${visualY}px, 0)`}}>
      <MapRenderer mapData={nuvemaTownTilemap} tileSize={tileSize}/>
    </div>
  );
};
