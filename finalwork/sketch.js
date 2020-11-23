// 最終課題を制作しよう
let x, y, l;

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
     l += 5
   }

function star(cx, cy, size, c){
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
