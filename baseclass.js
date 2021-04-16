class BaseClass{
    constructor(x,y,width,height){
        var box_options ={
            restitution: 0.8,
            friction :1,
            density : 1
        }
    
        this.body = Bodies.rectangle(x,y,width,height,box_options);
        this.width = width;
        this.height = height;
        this.image = loadImage('sprites/base.png');
        World.add(world,this.body);
    
    }
    Display(){
        push ();
        translate (this.body.position.x , this.body.position.y);
        angleMode(RADIANS);
        rotate (this.body.angle);
        imageMode(CENTER);
        image(this.image,0, 0, this.width, this.height);
        pop ();

     }


}

