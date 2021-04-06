class Pig{
    constructor(x,y){
        var box_options ={
            restitution: 1,
            friction :1,
            density : 1
        }
    
        this.body = Bodies.rectangle(x,y,50,50,box_options);
        this.width = 50;
        this.height = 50;
        World.add(world,this.body);
    
    }
    pigDisplay(){
        push ();
        translate (this.body.position.x , this.body.position.y);
        angleMode(RADIANS);
        rotate (this.body.angle);
        fill ("green");
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop ();

     }


}

