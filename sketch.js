const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var box1, box2, box3, box4, box5;
var pig1, pig2;
var log1, log2, log3, log4;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    var object_options ={
        isStatic: true
    }
    
   object= Bodies.rectangle(600,590,1200,20,object_options);
    World.add(world,object);
   
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);

    console.log(object);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(object.position.x,object.position.y,1200,20);
    box1.boxDisplay();
    box2.boxDisplay();
}