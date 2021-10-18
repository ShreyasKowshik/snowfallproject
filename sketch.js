const Engine = Matter.Engine;
const World = Matter.World;
const Bodies =  Matter.Bodies;
const Constraint = Matter.Constraint;

var bg,ground,gimg;
var ice=[];
var maxSnow=100;

var engine, world;
var backgroundImg;
var backgroundImage;

function preload(){
  bg=loadImage("snow1.jpg","snow2.jpg","snow3.jpg");
  gimg=loadImage("ground.PNG");
getBackgroundImage();
}

function setup() {
  createCanvas(1300,600);
  
  engine=Engine.create();
  world= engine.world;
  


ground=createSprite(650,670);
ground.addImage(gimg);
ground.scale=3.2;

 

if(frameCount % 275 === 0){
  for(var i=0; i<maxSnow; i++){
  ice.push(new Snow(random(0,1350), random(0,50)));
  }
  }


}

function draw() {
  background(bg);  
  Engine.update(engine); 


  if(backgroundImage){
    background(backgroundImage);
}

else{
background("white");
}
Engine.update(engine);

for(var i = 0;i < maxSnow; i++){
  ice[i].display();
  ice[i].changePosition();
  }    
  
  ground.display();
  
  drawSprites();

}

async function getBackgroundImage(){
var responce = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
console.log(responce);
var responceJSON = await responce.json(); 
console.log(responceJSON);
var date_time = responceJSON.datetime;
console.log(date_time);
var hour = date_time.slice(11,13);
console.log(hour);
if(hour >= 06 && hour < 12){
bg = "snow1.jpg";
}

else if(hour >= 05 && hour < 07){
    bg = "snow2.jpg";
}
else {
bg = "snow3.jpg";
}
backgroundImage = loadImage(bg);

}