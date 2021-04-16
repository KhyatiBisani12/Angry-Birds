class SlingShot{
    // log5 = new Log(30,10,50,20,PI/4);
    // sling = new SlingShot(bird.body,log5.body);
    constructor(bodyA,bodyB){
        var options ={
            bodyA : bodyA,  // bodyA : bird.body
            bodyB : bodyB,  // bodyB : log5.body
            length : 20,
            stiffness : 0.05
        };
    
        this.slingshot = Constraint.create(options);
        World.add(world,this.slingshot);
    
    }
    Display(){
        var pointA = this.slingshot.bodyA.position;
        var pointB = this.slingshot.bodyB.position;
        strokeWeight(3);
        stroke("brown");
        line(pointA.x,pointA.y,pointB.x,pointB.y);

     }


}

