class Paper {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.2
          
      }
      this.body = Bodies.circle(x, y, 20, options);
      //this.width = 20;
      //this.height = height;
      //Matter.Body.setAngle(this.body,angle);
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle=this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      fill("pink");
      ellipse(500, 300, 30, 30);
      pop();
      
    }
  };
  