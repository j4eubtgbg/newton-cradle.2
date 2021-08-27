class Rope{
    constructor(bodyA,bodyB){
      //  this.pointA= pointA;
        this.rope = Matter.Constraint.create({
           bodyA:bodyA,
            bodyB:bodyB,
            length:100,
            stiffness:0.1
          });
      World.add(world,this.rope);
    }

show(){
    let pos = this.rope.bodyA.position;
    let pos2 = this.rope.bodyB.position;
    //push();
    stroke(255);
    line(pos.x, pos.y,pos2.x,pos2.y);
   // pop();
  }


}




