
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var groundObject;
var boxObject1,boxObject2,boxObject3,boxObject4,boxObject5,boxObject6,boxObject7;
var boxObject8,boxObject9,boxObject10,boxObject11,boxObject12;
var boxObject13,boxObject14,boxObject15;
var boxObject14;
var polygonB, polygonImg;

function preload(){
  polygonImg=loadImage("polygon.png")
}
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	groundObject=new Ground(450,600,280,20);
    boxObject1=new Box(330,565,40,50);
    boxObject2=new Box(370,565,40,50);
    boxObject3=new Box(410,565,40,50);
    boxObject4=new Box(450,565,40,50);
    boxObject5=new Box(490,565,40,50);
    boxObject6=new Box(530,565,40,50);
    boxObject7=new Box(570,565,40,50);
    
    boxObject8=new Box(370,515,40,50);
    boxObject9=new Box(410,515,40,50);
    boxObject10=new Box(450,515,40,50);
    boxObject11=new Box(490,515,40,50);
    boxObject12=new Box(530,515,40,50);

    boxObject13=new Box(410,465,40,50);
    boxObject14=new Box(450,465,40,50);
    boxObject15=new Box(490,465,40,50);

    boxObject16=new Box(450,415,40,50);

    polygonB=Bodies.rectangle(200,550,50,50);
    World.add(world,polygonB);

    imageMode(CENTER);
    image(polygonImg,150,565,50,50)
  Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();
 groundObject.display();
boxObject1.display();
boxObject2.display();
boxObject3.display();
boxObject4.display();
boxObject5.display();
boxObject6.display();
boxObject7.display();

boxObject8.display();
boxObject9.display();
boxObject10.display();
boxObject11.display();
boxObject12.display();

boxObject13.display();
boxObject14.display();
boxObject15.display();

boxObject16.display();

}



