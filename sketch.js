const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var platform1, platform2;
var leftTower = [];
var rightTower = [];
var leftMostTower = [];
var rightMostTower = [];
var middleTower = [];

var hex, slingshot;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  platform1 = new Ground(550,310,150,8);
  platform2 = new Ground(500,350,300,8);
  ibox1= 0;

  var yVal = 150;
  for(var i = 0; i <= 3; i = i + 1){
    leftTower[i] = new Box1(435,yVal,20,30);
    rightTower[i] = new Box1(565,yVal,20,30);
    yVal = yVal - 30;
  }
  
  var yVal2 = 150
  for(var i = 0; i <= 7; i = i + 1){
    leftMostTower[i] = new Box1(370,yVal2,20,30);
    rightMostTower[i] = new Box1(635,yVal2,20,30);
    middleTower[i] = new Box1(490,yVal2,20,30);
    yVal2 = yVal2 - 30;
  }

  hex = new Hex(180,180,40,6);

  slingshot = new SlingShot(hex.body, {x: 180, y: 150});

}

function draw() {
  background(0);  

  stroke("black");
  strokeWeight(1);

  platform1.display();
  platform2.display();

  hex.display();

  for(var i = 0; i <= 3; i = i + 1){
    leftTower[i].display();
    rightTower[i].display();
  }

  for(var i = 0; i <= 7; i = i + 1){
    leftMostTower[i].display();
    rightMostTower[i].display();
    middleTower[i].display();
  }

//  box.display();
//  slingshot.display();
  slingshot.display();

  Engine.update(engine);
}

function mouseDragged(){
  Matter.Body.setPosition(hex.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}