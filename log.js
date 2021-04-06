class Log{
    constructor(x,y,height,angle){
        var log_options ={
            restitution: 1,
            friction :1,
            density : 1
        }
    
        this.body = Bodies.rectangle(x,y,20,height,log_options);
        Matter.Body.setAngle(this.body,angle); 
        this.width = 20;
        this.height = height;
        World.add(world,this.body);
    
    }
     logDisplay(){
        push ();
        translate (this.body.position.x , this.body.position.y);
        angleMode(RADIANS);
        rotate (this.body.angle);
        fill ("brown");
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop ();

     }


}