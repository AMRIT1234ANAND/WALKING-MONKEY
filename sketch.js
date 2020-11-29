
var monkey; 
 var monkey_running;
var banana ;
var bananaImage;
 var obstacle;
var obstacleImage;
var bananaGroup; 
var obstacleGroup;
var score;
var ground;
var survivalTime=0;
var score=0;
var invisibleGround;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(450,450);
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
 // console.log(ground.x);
  survivalTime=0;
  score=0;
   console.log(monkey.y);
 bananaGroup= createGroup();
  obstaclesGroup=createGroup();
  invisibleGround = createSprite(400,351,900,10);
  invisibleGround.visible = false;
}


function draw() {
background("white");
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+score,500,50);
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("SurvivalTime:"+survivalTime,100,50);
  
   monkey.velocityY=monkey.velocityY+1;
  if (ground.x<0){
      ground.x = ground.width/2;
    }
  if(keyDown("space")&&monkey.y>=315){
    monkey.velocityY=-20;
  }
  if(monkey.isTouching(bananaGroup)){
    bananaGroup.destroyEach();
  }
  monkey.collide(invisibleGround);
  food();
  monkey.debug=false;
  spawnObstacles();
   drawSprites();
}
function food(){
  if(frameCount%80===0){
   banana = createSprite(250,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.10;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adjust the depth
    
    
    //add each cloud to the group
    bananaGroup.add(banana);
  }
}

function spawnObstacles(){
 if (frameCount%300=== 0){
   var obstacle = createSprite(400,330,20,20);
       obstacle.addImage(obstacleImage);
   
     obstacle.velocityX = -5;
   
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.10;
    obstacle.lifetime = 300;
   
   //add each obstacle to the group
    obstaclesGroup.add(obstacle);
 }
}



