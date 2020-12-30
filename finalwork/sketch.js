// 最終課題を制作しよう
let x, y, l, t;

function setup(){
  createCanvas(windowWidth, windowHeight);
    x = width / 5;
    y = height / 4;
    l = 1;
}

function draw(){
  background(0, 0, 128);
   for(let i = 0; i < 27; i += 3){
      let r = i * 10 + 10
      if(i < 9){
        fill(255, 0, 0);
        stroke(255, 0, 0);
      }
   else if(i < 18){
        noFill();
        stroke(238, 130, 255);
      }
   else if(i < 27){
        noFill();
        stroke(0, 255, 0);
      }
   ellipse(width / 2, height / 2, r, r);
    }

   star(x, y, 30);
    if(keyIsDown(RIGHT_ARROW)) { x += 2; }
    if(keyIsDown(LEFT_ARROW)){ x -= 2; }
    if(keyIsDown(DOWN_ARROW)){ y += 2; }
    if(keyIsDown(UP_ARROW)){ y -= 2; }

   stroke(255, 255, 240)
   ellipse(width / 2, height / 2, l, l);
     l += 4.5

   textSize(200);
   fill(255, 255, 240);
   text(t, width / 2 - 400, height / 3);
     if(l < width && x > (width / 2 - 50) && x < (width /2 + 50) && y > (height /2 - 50) && y < (height /2 + 50)){
       t ='CLEAR!'; }
     else if(l > width && !(x > (width / 2 - 50) && x < (width /2 + 50) && y > (height /2 - 50) && y < (height /2 + 50))){
       t ='TIME UP!'; }
   }

function star(cx, cy, size){
  push();
  fill(255, 255, 0)
  stroke(255, 255, 0);
  beginShape();
  for(var i = 0; i < 20; i++){
    var theta = TWO_PI * i * 2 / 5 - HALF_PI;
    var x = cx + cos(theta) * size;
    var y = cy + sin(theta) * size;
    vertex(x,y);
  }
  endShape(CLOSE);
  pop();
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
