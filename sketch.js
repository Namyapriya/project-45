var soldier;
var soldierImg;
var terrorist;
var terroristImg;
var gun;
var gunImg;
var bullet;
var bg;
var bgImg;

function preload(){
soldierImg = loadImage("Hero Image.png");
terroristImg = loadImage("Villian Image.png");
gunImg = loadImage("Gun Image.png");
bgImg = loadImage("Bg Image.jpg");
}
function setup() {
  createCanvas(1000,800);
  
  terrorist = createSprite(850,700,20,20);
  terrorist.addImage(terroristImg);

  soldier = createSprite(250,700, 20, 20);
  soldier.addImage(soldierImg);

  gun = createSprite(285,700,20,20);
  gun.addImage(gunImg);

  bullet = createSprite(300,690,20,5);

}

function draw() {
  background(bgImg);
  textSize(50);
  fill("black");
  text("Police Shooting Game", 250, 100);
  

  if(keyDown("space")){
    bullet.velocityX = 100;
    terrorist.destroy();
  }

  drawSprites();
}

function destroy() {
  if(bullet.isTouching(terrorist)){
    terrorist.velocityX = 0;
}
}