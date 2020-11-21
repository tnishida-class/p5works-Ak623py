// テキスト「アニメーション」
let angle, x, y, vx, vy;

function setup(){
  createCanvas(windowWidth, windowHeight);
  angle = 0;
  x = width / 2;
  y = height / 2;
  vx = 10;
  vy = 10;
 }

function draw(){
    background(160, 192, 255);
   star(x, y, 20, angle);
   x += vx;
   y -= vy;
   angle += 0.1;
  // BLANK[2] (hint: 作った star 関数を使います)
// 端の処理パターン (1) 反対側から出てくる
    if(x > width){ x = 0; }
    else if(x < 0){ x = width; }
    if(y > height){ y = 0; }
    if(y < 0){ y = height; }
  }

function star(cx, cy, r, angle){
  beginShape();
  for(var i = 0; i < 20; i++){
    var theta = TWO_PI * i * 2 / 5 - HALF_PI + angle;
    // BLANK[1] (hint: angle 分だけ星を回転させるには？)
    var x = cx + cos(theta) * r;
    var y = cy + sin(theta) * r;
    vertex(x,y);
  }
  endShape(CLOSE);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
