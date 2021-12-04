var balloon, balloonImg, backgroundImg,bg,topObs, birdImg, building,buildingImg,edges,balloonObsImg;

function preload(){
balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
backgroundImg = loadImage("assets/bg.png");
birdImg = loadImage("assets/obsTop2.png")
buildingImg = loadImage("assets/obsBottom1.png");
balloonObsImg = loadImage("assets/obsTop1.png");
}
function setup(){
createCanvas(windowWidth-20,windowHeight-25);
bg = createSprite(windowWidth/2,600)
bg.addImage('bg',backgroundImg)
bg.scale = 1.6

balloon = createSprite(300,200,20,50)
balloon.addAnimation('balloon',balloonImg);
balloon.scale = 0.5

edges = createEdgeSprites();

}
function draw(){
  background("black");
if(keyDown("SPACE")){
  balloon.velocityY = -5
}
balloon.velocityY = balloon.velocityY+0.08
balloon.collide(edges[3])
spawnTopObs();
drawSprites()
}
function spawnTopObs(){
if(frameCount%100===0){
topObs = createSprite(windowWidth-20,random(30,100))
topObs.velocityX = -4
topObs.scale = 0.2
var rand = Math.round(random(1,2))
switch(rand){
  case 1: topObs.addImage("bird",birdImg);
  break;
  case 2 : topObs.addImage("balloonObs",balloonObsImg);
  break;
  default: break;
}
}
}