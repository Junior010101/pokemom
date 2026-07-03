import { useEffect,useState } from "react";
import "./index.css";
import movim from "./scripts/index.js";
import { Map } from "./scenes/nuvema_town/Map";
import { Player } from "./components/Player";

function App() {
  const [mapDimensions, setMapDimensions] = useState({
    widthPx: 0,
    heightPx: 0,
  });
  const [characterPosition, setCharacterPosition] = useState({ x: 14, y: 15 });
  const TILE_SIZE = 16;
    useEffect(() => {
      movim(setCharacterPosition,);
    }, []);
  return (
    <div className="GameCamera">
      <div
        className="World"
        style={{
          width: `${mapDimensions.widthPx}px`,
          height: `${mapDimensions.heightPx}px`,
        }}
      >
        <Player
          posX={characterPosition.x}
          posY={characterPosition.y}
          tileSize={TILE_SIZE}
        />
        <Map 
        tileSize={TILE_SIZE} 
        onMapLoaded={setMapDimensions} 
        posX={characterPosition.x}
        posY={characterPosition.y}
        />
      </div>
    </div>
  );
}

export default App;
