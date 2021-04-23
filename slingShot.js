class SlingShot{
    // log5 = new Log(30,10,50,20,PI/4);
    // sling = new SlingShot(bird.body,log5.body);
    constructor(bodyA,pointB){
        var options ={
            bodyA : bodyA,  // bodyA : bird.body
            pointB : pointB,  // bodyB : log5.body
            length : 10,
            stiffness : 0.05
        };
    
        // pointB = (x,y)
        this.sling1 = loadImage('sprites/sling1.png');
        this.sling2 = loadImage('sprites/sling2.png');
        this.sling3 = loadImage('sprites/sling3.png');
        this.pointB = pointB;
        this.slingshot = Constraint.create(options);
        World.add(world,this.slingshot);
    
    }
    Display(){
        image(this.sling1,200, 210);
        image(this.sling2,169, 200);
        var pointA = this.slingshot.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(3);
        stroke(48, 22, 8);
        line(pointA.x,pointA.y,pointB.x-15,pointB.y-55);
        line(pointA.x,pointA.y,pointB.x+20,pointB.y-65);
        image(this.sling3,pointA.x-20,pointA.y+10 , 15,25);
        
     }


}

