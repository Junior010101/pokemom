import hitbox from "../scenes/nuvema_town/hitbox";

function movim(setPlayerPosition) {
  const keys = {
    w: false,
    s: false,
    a: false,
    d: false,
  };
  const fps = 120;

  let interval = null;

  const handleKeyDown = (e) => {
    const key = e.key.toLowerCase();

    if (key in keys) {
      keys[key] = true;
    }
  };

  const handleKeyUp = (e) => {
    const key = e.key.toLowerCase();

    if (key in keys) {
      keys[key] = false;
    }
  };

  const move = () => {
    setPlayerPosition((pos) => {
      let x = pos.x;
      let y = pos.y;

      if (keys.w && hitbox[y - 1]?.[x] === 0) {
        y--;
      }
      if (keys.s && hitbox[y + 1]?.[x] === 0) {
        y++;
      }
      if (keys.a && hitbox[y]?.[x - 1] === 0) {
        x--;
      }
      if (keys.d && hitbox[y]?.[x + 1] === 0) {
        x++;
      }

      return { x, y };
    });
  };

  document.addEventListener("keydown", handleKeyDown);
  document.addEventListener("keyup", handleKeyUp);

  interval = setInterval(move, fps);

  return () => {
    document.removeEventListener("keydown", handleKeyDown);
    document.removeEventListener("keyup", handleKeyUp);
    clearInterval(interval);
  };
}

export default movim;
