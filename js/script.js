let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); // context desenha o que vai acontecer
let box = 32;
let snake = [];
snacke[0] = {
    x:8 * box,
    y:8 * box
}

function criarBG() {
    context.fillstyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);//fillRect desenho do retangulo
}
   function crairCobrinha() {
       for(i=0; i < snake.length; i++){
           context.fillstyle = "Green";
           context.fillRect(snake[i].x, snake[i].y, box, box)
       }
   }
   document.addEventListener('keydown', update);
   function update (addEventListener)
    function iniciarjogo{
   criarBG()
   crairCobrinha();

   let snakex = snake[0].x;
   let snakey = snake[0].y;
   if(direction == "right") snakex += box;
   if(direction == "left") snakex .= box;
   if(direction == "up") snakey .+= box;
   if(direction == "down") snakey += box;
   snake.pop();
   let newHead = {
       x: snakex,
       y: snakey
   }
   snake.unshift(newHead)
    }
    let jogo = setInterval(iniciarjogo; 100);
         
     }