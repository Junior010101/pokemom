import hitbox from "../scenes/nuvema_town/hitbox";

function movim(setCharacterPosition) {
  const keys = {};
  let interval = null;

  const handleKeyDown = (e) => {
    keys[e.key.toLowerCase()] = true;
  };

  const handleKeyUp = (e) => {
    keys[e.key.toLowerCase()] = false;
  };

  document.addEventListener("keydown", handleKeyDown);
  document.addEventListener("keyup", handleKeyUp);

  // ===== MOVIMENTO =====
  const move = () => {
    setCharacterPosition((pos) => {
      let x = pos.x;
      let y = pos.y;

      if (keys["w"]) {
        if (hitbox[y - 1]?.[x] === 0) y--;
      }

      if (keys["s"]) {
        if (hitbox[y + 1]?.[x] === 0) y++;
      }

      if (keys["a"]) {
        if (hitbox[y]?.[x - 1] === 0) x--;
      }

      if (keys["d"]) {
        if (hitbox[y]?.[x + 1] === 0) x++;
      }
      return { x, y };
    });
  };

  interval = setInterval(move, 120); 

  return () => {
    document.removeEventListener("keydown", handleKeyDown);
    document.removeEventListener("keyup", handleKeyUp);
    clearInterval(interval);
  };
}

export default movim;