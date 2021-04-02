const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var box1, box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var object_options ={
        isStatic: true
    }
    
   object= Bodies.rectangle(200,390,400,20,object_options);
    World.add(world,object);
   
    box1 = new Box(300,100,100,50);
    box2 = new Box(250,250,40,50);


    console.log(object);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(object.position.x,object.position.y,400,20);
    box1.boxDisplay();
    box2.boxDisplay();
}
