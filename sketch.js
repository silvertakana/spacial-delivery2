var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,fall = 0,hi = 0;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

 	boxPosition=width/2-100
 	boxY=610;


 	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor=color(255,0,0);

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);


	Engine.run(engine);
  
}


function draw() {
	
  rectMode(CENTER);
  background(0);
 
  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;
  packageSprite.rotation = packageBody.angle;
	if(keyIsDown(LEFT_ARROW))
  		helicopterSprite.x -= 10;
    
    if(keyIsDown(RIGHT_ARROW))
  		helicopterSprite.x += 10;
		  if(keyIsDown(UP_ARROW)){
			helicopterSprite.y -= 10;
	  }
  
	  if(keyIsDown(DOWN_ARROW)){
			helicopterSprite.y += 10;
	  }
	if(keyWentDown("space")){
		Matter.Body.setStatic(packageBody, false);
		
		
		
		fall = 1;
	}
    if(fall == 0){
		Matter.Body.setPosition(packageBody, createVector(helicopterSprite.x,helicopterSprite.y));
		packageBody.position.x
	}
  console.log(hi);
  drawSprites();
  
  
 
}
