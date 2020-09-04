class Box{
  constructor(x, y) {
      var options = {
         
          restitution :0.1,
          friction :0.5,
          //isStatic:true
         
      }
      this.visibility = 225;
      this.body = Bodies.rectangle(x, y, 40, 50, options);
      this.width = 30;
      this.height = 50;
      World.add(world, this.body);
      
    }
    score(){
      if(this.visibility<0 && this.visibility >-105){
        score++;
      }
    }
    display(){
      console.log(this.body.speed);
      var angle = this.body.angle;
      var pos= this.body.position;
      fill("lightblue");
      if(this.body.speed <11){
      //push();
      //translate(pos.x, pos.y);
      //rotate(angle);
      rectMode(CENTER);
      rect(pos.x,pos.y,this.width, this.height);
    }
    else{
      World.remove(world, this.body);
      this.visibility = this.visibility -5;
      
    }
  }
}