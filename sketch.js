const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var object;
var box1, box2, box3, box4, box5;
var pig1, pig2;
var bird;
var log1, log2, log3, log4, logTest;
var sling;
var backgroundImage;
var ground;
var platform;

// Arrays 
/*var abc= 10;
var abc_array = [10,20,30,40,50,"hi"];
console.log(abc_array);
console.log("Length is " + abc_array.length);

abc_array.push("Khyati");
console.log(abc_array);

abc_array.pop();
abc_array.pop();
console.log(abc_array);

abc_array = [];
console.log(abc_array);
var sub_array=[[1,2],[3,4],["Hi","Hello"],[5,6]]
//console.log(sub_array);

console.log(sub_array[0][1]);*/



function preload(){
    backgroundImage = loadImage("sprites/bg.png")
}
function setup(){
    var canvas = createCanvas(1400,600);
    engine = Engine.create();
    world = engine.world;

//    object= Bodies.rectangle(600,590,1200,20,object_options);
//     World.add(world,object);
    ground = new Ground(700,590,1400,20);
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    box5 = new Box(810,160,70,70);
    pig1 = new Pig(810,350);
    pig2 = new Pig(810,220);

    bird = new Bird(100,100);
    log1 = new Log(810,260,300,PI/2);
    log2 = new Log(810,180,300,PI/2);
    log3 = new Log(747,120,150,PI/7);
    log4 = new Log(853,120,150,-PI/7);
    
    platform = new Ground(150,495,300,170);

    sling = new SlingShot(bird.body,{x:200 ,y: 210 });
    //console.log(object);
}

function draw(){
    background(backgroundImage);
    Engine.update(engine);
    // rectMode(CENTER);
    // rect(object.position.x,object.position.y,1200,20);
    ground.groundDisplay();
    platform.groundDisplay();
    box1.Display();
    box2.Display();
    box3.Display();
    box4.Display();
    box5.Display();
    pig1.Display();
    pig2.Display();
    bird.Display();
    log1.Display();
    log2.Display();
    log3.Display();
    log4.Display();
    sling.Display();
    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body,{x:mouseY , y:mouseY});
}

function mouseReleased(){
    sling.fly();
}

function keyPressed(){
    if(keyCode === 32){
      sling.attach(bird.body)
    }
}