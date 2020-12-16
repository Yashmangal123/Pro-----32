class GreenBox extends Box{
    constructor(x,y){
        super(x,y,40,50);
        this.Visiblity = 255;
    }

    display(){
        if(this.body.speed < 3){
          fill(87,200,206);
          super.display();
        }
        else{
          World.remove(world, this.body);
          push();
          this.Visiblity = this.Visiblity - 10;
          tint(255,this.Visiblity);
          rect(this.x,this.y, 20, 30);
          pop();
        }
      }
      score(){

        if(this.Visiblity < 0 && this.Visiblity > -105){
            score++
        }
       }
}