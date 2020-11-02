
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ball1;
var log1;


function preload()
{
	 keyPressed()
	
}

function setup() {
	 var canvas = createCanvas(1200,800);


	engine = Engine.create();
	world = engine.world;

	
	//Create the Bodies Here.


	Engine.run(engine);

	ground = new Ground(600,790,1200,20)

	ball1 = new Ball(200,200);
	
	log1 = new Log(710,630,200,20)
    log2 =  new Log(1000,630,200,20);
	log3 = new Log(810,260,300,PI/2)
	log4 =  new Log(810,180,300,PI/2)
    
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  	ground.display();

	ball1.display();
	
    log1.display();
    log2.display();
    log3.display();
    log4.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(ballObject.body,ball.body.position,{x;85,y:-85});
	}
}



