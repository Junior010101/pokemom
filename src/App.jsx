import { useEffect, useState } from "react";
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

  // Use a state or ref to track viewport if it needs to update on resize
  const [viewport, setViewport] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const TILE_SIZE = 16;
  const SCALE = 6;

  // Calculate visual positions outside of useEffect so they are available to JSX
  const visualX = Math.max(
    Math.min(
      -(characterPosition.x * TILE_SIZE - viewport.width / (2 * SCALE)),
      0,
    ),
    -(mapDimensions.widthPx - viewport.width / SCALE),
  );

  const visualY = Math.max(
    Math.min(
      -(characterPosition.y * TILE_SIZE - viewport.height / (2 * SCALE)),
      0,
    ),
    -(mapDimensions.heightPx - viewport.height / SCALE),
  );

  useEffect(() => {
    movim(setCharacterPosition);
  }, []);

  return (
    <div className="GameCamera">
      <div
        className="World"
        style={{
          width: `${mapDimensions.widthPx}px`,
          height: `${mapDimensions.heightPx}px`,
          // Ensure you use the variables calculated above
          transform: `scale(${SCALE}) translate3d(${visualX - 45}px, ${visualY - 10}px, 0)`,
          transformOrigin: "top left",
        }}
      >
        <Player
          posX={characterPosition.x}
          posY={characterPosition.y}
          tileSize={TILE_SIZE}
        />
        <Map tileSize={TILE_SIZE} onMapLoaded={setMapDimensions} />
      </div>
    </div>
  );
}

export default App;
