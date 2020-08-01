
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,engine,world,bottomRed,rightRed,leftRed,ground,bottom,right,left;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100,100);
	paper.shapeColor="white";

	bottomRed = createSprite(600,650,200,20);
	rightRed = createSprite(700,610,20,100);
	leftRed = createSprite(500,610,20,100);

	groundSprite=createSprite(400, 680, 800,10);
	groundSprite.shapeColor=color(150);

	ground = Bodies.rectangle(400, 650, 800, 10 , {isStatic:true} );
	World.add(world, ground);
	//ground.debug=true;

	bottom=Bodies.rectangle(600,650,200,20);
	World.add(world,ground);
	//paper.velocityY=paper.velocityY+0.8;
	Engine.run(engine);
  
} 


function draw() {
	Engine.update(engine);
	  rectMode(CENTER);
	  rect(ground.position.x,ground.position.y,800,10)
  	background(0);
	
	
	//ground.shapeColor="blue";
	  drawSprites();
	  keyPressed();
	paper.display();
	
	
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:3,y:-3});
		
		//paper.velocityY=-5;

	}
}

