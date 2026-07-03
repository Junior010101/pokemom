
function movim(setCharacterPosition,setmapposition){
    document.addEventListener("keydown", (event) => {
        if (event.key === "w") {
        setCharacterPosition((pos) => ({
            ...pos,
            y: pos.y - 0.5,
        }));
        setmapposition((pos) => ({
            ...pos,
            y: pos.y + 8,
        }));
        }
        if (event.key === "a") {
            setCharacterPosition((pos) => ({
            ...pos,
            x: pos.x - 0.5,
        }))
            setmapposition((pos) => ({
            ...pos,
            x: pos.x + 8,
        }))
        }
        if (event.key === "d") {
            setCharacterPosition((pos) => ({
            ...pos,
            x: pos.x + 0.5,
        }))
            setmapposition((pos) => ({
            ...pos,
            x: pos.x - 8,
        }))
    }
        if (event.key === "s") {
        setCharacterPosition((pos) => ({
            ...pos,
            y: pos.y + 0.5,
        }));
        setmapposition((pos) => ({
            ...pos,
            y: pos.y - 8,
        }));
        }
    });}
export default movim;