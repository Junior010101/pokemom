
function movim(setCharacterPosition){
    document.addEventListener("keydown", (event) => {
        if (event.key === "w") {
        setCharacterPosition((pos) => ({
            ...pos,
            y: pos.y - 0.5,
        }));
        }
        if (event.key === "a") {
            setCharacterPosition((pos) => ({
            ...pos,
            x: pos.x - 0.5,
        }))
        }
        if (event.key === "d") {
            setCharacterPosition((pos) => ({
            ...pos,
            x: pos.x + 0.5,
        }))}
        if (event.key === "s") {
        setCharacterPosition((pos) => ({
            ...pos,
            y: pos.y + 0.5,
        }));
        }
    });}
export default movim;