// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
 noStroke();
  fill(128)
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
  if((i + j) % 2 == 0){
    fill(255);
  }
  else {
    fill(128);
  }

    rect(size * i, size * j, size, size);

    if((i + j) % 2 != 0 && j < 3){
      fill('red');
      ellipse(size * i + size * 1/2, size * j + size * 1/2, size, size);
    }
    if  ((i + j) % 2 != 0 && j > 4){
      fill(0);
      ellipse(size * i + size * 1/2, size * j+ size * 1/2, size, size);
    }

}


    }

    }
