/**
 * Created by jpiagetprogramacao on 20/02/18.
 *
 */

// Variáveis para facilitar definição de padrões (largura e altura da tela e.g.)
var larg = 1024,
    alt = 768,
    largCarta = 187,
    altCarta = 242,
    dist = 10;

// Objeto único contendo todas as cartas possíveis
var cartas = {
    c1: new carta(1, "images/Carta1.png", dist, 10),
    c2: new carta(2, "images/Carta2.png", largCarta + (dist * 2), 10),
    c3: new carta(3, "images/Carta3.png", (largCarta * 2) + (dist * 3), 10),
    c4: new carta(4, "images/Carta4.png", (largCarta * 3) + (dist * 4), 10),
    c5: new carta(5, "images/Carta1.png", dist, altCarta + 15),
    c6: new carta(2, "images/Carta2.png", largCarta + (dist * 2), altCarta + 15),
    c7: new carta(3, "images/Carta3.png", (largCarta * 2) + (dist * 3), altCarta + 15),
    c8: new carta(4, "images/Carta4.png", (largCarta * 3) + (dist * 4), altCarta + 15),    
}

function start(){
    canvas = document.getElementById("jogoTeste");
    context = canvas.getContext("2d");
    context.fillStyle="#FFFFFF";
    context.fillRect(0, 0, 800, 600);

    canvas.addEventListener ("mousedown",function(){
        onMouseDown({x:event.clientX, y:event.clientY})
    });
    canvas.addEventListener ("mouseup",function(){
        onMouseUp({x:event.clientX, y:event.clientY})
    });

    bg = new Image();
    bg.src = "images/Fundo.png";

    // Testando a criação de uma carta...
    // Adaptar essa estrutura para permitir a criação de várias cartas de uma forma escalável...
    carta = new Image();
    carta.src = "images/CartaVirada.png";
    carta.position = {x:5, y:10};
}

/**
 * Atualiza o jogo.
 */
function update() {
    draw(); // desenha a cena de jogo...
    setTimeout(update,1); // chama o update novamente após 1 milisegundo.
}

/**
 * Desenha os objetos do jogo.
 */
function draw() {
    context.clearRect(0, 0, larg, alt); // limpa o canvas...
    context.drawImage(bg, 0, 0); // desenha o background, na posição {0, 0}

    // Testando o desenho da carta criada...
    context.drawImage(carta, cartas.c1.x, cartas.c1.y);
    for(var itera in cartas){
        if(cartas[itera].virada == false){
            context.drawImage(carta, cartas[itera].x, cartas[itera].y);
        }
        else{
            context.drawImage(cartas[itera].img, cartas[itera].x, cartas[itera].y)
        }
    }
}

/**
 * Manipula eventos de mouse down.
 * @param event - coordenadas do evento (event.x,event.y).
 */
function onMouseDown(event){
    console.log("COORDENADAS DO CLIQUE: " + event.x + ", " + event.y);
}

/**
 * Manipula eventos de mouse up.
 * @param event - coordenadas do evento (event.x,event.y).
 */
function onMouseUp(event){
    console.log(event.x + ", " + event.y);
}

/**
 * Cria um áudio e toca-o.
 * @param name {String} - o nome do áudio.
 *
 * Hardcode - otimizar se desejado.
 * Dica: concatenação de string.
 */
function playEffect(name) {
    if(name == "acerto")
        var snd = new Audio("sounds/acerto.mp3");
    if(name == "erro")
        snd = new Audio("sounds/erro.mp3");
    if(name == "vira")
        snd = new Audio("sounds/vira.mp3");

    snd.play();
}