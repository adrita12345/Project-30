class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);

      this.image = loadImage("block.png");
      this.visibility = 255;
    }
    display(){
      if(this.body.speed>3){
        push();
         World.remove(world, this.body);
         this.visibility = this.visibility-10;
         tint(255, this.visibility);
         image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
       pop();
       }
       else{
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
       }
      
    }
}