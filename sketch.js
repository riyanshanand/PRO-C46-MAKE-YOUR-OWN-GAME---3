var trex;
var ground;
var bg;
var bgImage;
var line2
function preload(){
bgImage = loadImage("bg2.jpg")
}
function setup(){
  createCanvas(windowWidth-300,windowHeight)
  bg = createSprite(width/2,height,width,height)
  bg.addImage("tower",bgImage)
  bg.x = width/2
  bg.velocityX = -5
  bg.scale = 4.67

  trex = createSprite(250,520,50,50)
  trex.shapeColor = "Yellow"
  //trex.velocityX = 2.5
  line2 = createSprite(250,600,250,5)

  lineGroup = new Group()
}

function draw(){
  background(0)

  if(bg.x<0){
    bg.x = width/2+60
  }

  if(keyDown("up")){
    trex.y -= 9
  }

  

  //gravity
  trex.y +=0.8
trex.collide(line2)

  spawnLines()
  trex.collide(lineGroup)
  drawSprites()
}

function spawnLines(){
  if(frameCount % 150 === 0){
    line2.visible = false;
    line1 = createSprite(1000,Math.round(random(300,550)),250,5)
    line1.velocityX = -2;
    line1.shapeColor=("yellow")
   lineGroup.add(line1)

  }
}