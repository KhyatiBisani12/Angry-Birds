class Ground {
    constructor(x,y,width,height){
        var ground_options ={
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,ground_options)
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }

    groundDisplay(){
        fill ("red");
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
    }
}


