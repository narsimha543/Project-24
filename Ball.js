class Ball {
    constructor(x,y) {
      var options = {
          isStatic : false,
          restitution : 0.3,
          friction : 0.5,
          density : 1.2, 
      }
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 50;
      this.height = 50;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      pos.x = mouseX;
      pos.y = mouseY;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4)
      //stroke("blue")
      //fill("red");
      ellipse(56, 46, 55, 55);
      pop();
    }
  };