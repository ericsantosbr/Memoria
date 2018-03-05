// Define objeto carta

var tipo,
    img,
    virada = false,
    x,
    y;

function carta(tipo, img, x, y){
    this.tipo = tipo;
    this.img = new Image();
    this.img.src = img;
    this.x = x;
    this.y = y;
    this.virada = false;
}