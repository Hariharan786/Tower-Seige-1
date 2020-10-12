const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11;
var engine, world;
var poim,poim1;
var slingshot;

function preload() {

  poim1 = loadImage("poly.png");

}

function setup() {
  engine = Engine.create();
    world = engine.world;
  createCanvas(1200,400);
  //createSprite(400, 200, 50, 50);

  

  polygon = Bodies.circle(170,230,20);
  slingshot = new SlingShot(this.polygon,{x:100, y:200});

  World.add(world,polygon);
  ground = new Ground(600,height,1200,20);
  box1 = new Box(700,height-45,70,70);
  box2 = new Box(920,height-45,70,70);

  box3 = new Box(700,height-115,70,70);
  box4 = new Box(920,height-115,70,70);

  box5 = new Box(810,height-45,70,70);
  box6 = new Box(850,height-115,70,70);
  box7 = new Box(770,height-115,70,70);
  box8 = new Box(810,height-185,70,70);
  box9 = new Box(735,height-185,70,70);
  box10 = new Box(885,height-185,70,70);
  box11 = new Box(810,height-255,70,70);

  console.log(slingshot.x);

}

function draw() {
  background(255,255,255); 
  
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  //slingshot.display();

  imageMode(CENTER)
  image(poim1 ,polygon.position.x,polygon.position.y,40,40);
  
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}