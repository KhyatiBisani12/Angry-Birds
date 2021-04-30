class Bird extends BaseClass{
    constructor(x,y){
        super(x,y,50,50);
        this.image = loadImage('sprites/bird.png');
        this.smokeImage = loadImage('sprites/smoke.png');
        this.trajectory=[];

    }
    Display(){
     //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
     super.Display();  

     if(this.body.position.x>220){
        var position = [this.body.position.x,this.body.position.y];
        this.trajectory.push(position);
     }
     

        // trajectory = [[200,130],[210,300],[220,150]]; 
        // this.trajectory[0] = [200,130];
        //this.trajectory[0][0],this.trajectory[0][1]


     for(var i= 0;i < this.trajectory.length; i++){
        image(this.smokeImage,this.trajectory[i][0], this.trajectory[i][1]);
     }
    }

}