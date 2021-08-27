const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var ball,b,b3;
var ground;
var con,con2,c3,r;



function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;

  var ball_options = {
    restitution: 0.8
  }
  
  
  ball = Bodies.circle(200,50,10,ball_options);
  World.add(world,ball);
 
  b = Bodies.circle(200,100,10,ball_options);
  World.add(world,b);
  
  b3 = Bodies.circle(300,100,10,ball_options);
  World.add(world,b3);
  
  r = new Rope(b,b3);
  
  con = Matter.Constraint.create({
          pointA:{x:200,y:20},
          bodyB:ball,
          pointB:{x:0,y:0},
          length:100,
          stiffness:0.1
        });
  
      World.add(world,con);
      con2 = Matter.Constraint.create({
        bodyA:ball,
        pointA:{x:0,y:0},
        bodyB:b,
        pointB:{x:0,y:0},
        length:100,
        stiffness:0.1
      });

    World.add(world,con2);     
      
  
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background(51);
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,10);
  ellipse(b.position.x,b.position.y,10);
  ellipse(b3.position.x,b3.position.y,10);
  

  push();
  strokeWeight(2);
  stroke(255);
 line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y);
 line(ball.position.x,ball.position.y,b.position.x,b.position.y);
  
  pop();
 r.show();
}

function keyPressed()
{
  if(keyCode==RIGHT_ARROW)
    {
      Matter.Body.applyForce(b,{x:0,y:0},{x:0.05,y:0.05});
    }
}

