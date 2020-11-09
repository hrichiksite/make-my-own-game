var crred, crgreen, orange, cyan;


function preload() {
 redImg = loadImage("img/Red.png");
 greenImg = loadImage("img/Green.png");
 orangeImg = loadImage("img/Orange.png");
 cyanImg = loadImage("img/Cyan.png");
 bgImg = loadImage("img/bg.png")
}


function setup() {

    canvas = createCanvas(displayWidth - 20, displayHeight-30);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
  
crred = createSprite(100, 200, 50, 50);
crgreen = createSprite(300, 200, 50, 50);
orange = createSprite(500, 200, 50, 50);
cyan = createSprite(789, 200, 50, 50);

crred.scale = 0.5;
crgreen.scale = 0.5;
orange.scale = 0.5;
cyan.scale = 0.5;

// add images
crred.addImage(redImg);
crgreen.addImage(greenImg);
orange.addImage(orangeImg);
cyan.addImage(cyanImg);

}

function draw() {
  background(bgImg);  
  drawSprites();
 
}

  
  if(keyIsDown(UP_ARROW)){
    crred.x = crred.x + 3

  }
