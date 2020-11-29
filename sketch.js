var Background,backgroundImage
var BlueBalloon,BlueBalloonImage
var GreenBalloon,GreenBalloonImage
var PinkBalloon,PinkBalloonImage
var RedBalloon,RedBalloonImage
var Bow,BowImage
var arrow,arrowImage
var createArrow
var temp_arrow

function preload(){
 //load your images here 
  backgroundImage=loadImage("background0.png")
  BlueBalloonImage=loadImage("blue_balloon0.png")
  GreenBalloonImage=loadImage("green_balloon0.png")
  PinkBalloonImage=loadImage("pink_balloon0.png")
  RedBalloonImage=loadImage("red_balloon0.png")
  BowImage=loadImage("bow0.png")
  arrowImage=loadImage("arrow0.png")
 
  
}

function setup() {
  createCanvas(600, 600);
   backGround=createSprite(200,200,600,350);
  backGround.addImage(backgroundImage)
  
  
  for(var i=50;i<400;i=i+50){
    BlueBalloon=createSprite(70,i,30,30)
  BlueBalloon.addImage(BlueBalloonImage)
  BlueBalloon.scale=0.1
    
  }
  
  for(var i =80;i<400;i=i+80){
  GreenBalloon=createSprite(150,i,30,30)
  GreenBalloon.addImage(GreenBalloonImage)
  GreenBalloon.scale=0.09
  }
  for(var i=70;i<400; i=i+70){
  PinkBalloon=createSprite(110,i,30,30)
  PinkBalloon.addImage(PinkBalloonImage)
  }
  
  for(var i=100;i<400; i=i+100){
  RedBalloon=createSprite(190,i,30,30)
  RedBalloon.addImage(RedBalloonImage)
    RedBalloon.scale=0.1
  }
  
  
  Bow=createSprite(350,mouseY,20,20)
  Bow.addImage(BowImage)
  
   
  
  //add code here
  
}

function draw() {
  background("white")
  Bow.y=World.mouseY
  
  if(keyDown("space")){
    var arrow = createArrow();
    arrow.addImage(arrowImage)
    arrow.y=Bow.y
     
  
 
   
   
  }
 
    drawSprites()


  //add code here
  
}
function createArrow(){
  arrow=createSprite(350,100,20,20)
  arrow.velocityX=-15;
  arrow.scale=0.3
  
  return arrow;
  
  
}

