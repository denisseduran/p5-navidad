
function draw() {
  image(img, 0, 0);
  ellipse(20, 30, 50);
}

function setup() {
  createCanvas(400, 400);
  background(220, 190, 5);
  print(  "Inicia"  );
}

function draw() {  
  print(  "p5js bug de print"  ); 
}
var y = 0;
var incremento = 3;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(255,0,0);
  stroke(255);
  strokeWeight(4);
  noFill();
  ellipse(200, y, 100, 100);

  if (y > height) {
    incremento = -3;
  }else if(y <0 ){
    incremento = 3;
  }

  y = y + incremento;
}
var y = 0, y2 = 0, y3= 0;
var incremento = 3, inc2 = 5, inc3 = 4;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(255,0,0);
  stroke(255);
  strokeWeight(4);
  noFill();
  ellipse(200, y, 100, 100);
  ellipse(350, y2, 100, 100);
  ellipse(500, y3, 100, 100);

  if (y > height) {
    incremento = -3;
  }else if(y <0 ){
    incremento = 3;
  }

  y = y + incremento;
  
  if (y2 > height) {
    inc2 = -2;
  }else if(y2 <0 ){
    inc2 = 2;
  }

  y2 = y2 + inc2;
  
  if (y3 > height) {
    inc3 = -3;
  }else if(y3 <0 ){
    inc3 = 3;
  }

  y3 = y3 + inc3;
}
var x = [];// esto es un arreglo
var y = [];// esto es un arreglo
var incremento = [];
var h = [];

function setup() {
  createCanvas(600, 400);
  print(floor(random(1, 10)))
  for(var i = 0; i < 15; i = i +1){
    x[i] = floor(random(0, width));
    y[i] = 0;
    incremento[i] = floor(random(1, 20));
    h[i] = floor(random(1, 20));
  }
  print(x);
  print(y);
  print(incremento);
  print(h);
}

function draw() {
  background('rgb(0,255,0)');;
  stroke('red');
  strokeWeight(4);
  fill(255);
  for(var i = 0; i < 15; i = i +1){
     ellipse(x[i], y[i] ,h[i]);  
    if (y[i] > height) {
      incremento[i] = incremento[i] * -1;
    }else if(y[i] <0 ){
      incremento[i] = incremento[i] * -1;
    }
    y[i] = y[i] + incremento[i];
  }
  
text('¡ F E L I Z     N A V I D A D !', 10, 90);
}


