const hitbox = Array.from({ length: 30 }, () => Array(30).fill(0));
const lista_de_blocos_com_colisão = [
    {x:0,y:0},{x:1,y:27},{x:0,y:0},{x:0,y:27},{x:1,y:27},{x:2,y:27},{x:3,y:26},{x:4,y:27}]
lista_de_blocos_com_colisão.forEach(element => {
hitbox[element.y][element.x] = 1
}); 



export default hitbox