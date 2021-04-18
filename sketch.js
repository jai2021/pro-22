var starImg,bgImg;
var star, starBody;
var fairy,fairyImg,fairyBody,fsImg,fs;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starryNight.jpg");
	fairyImg = loadAnimation("images/fairyImage2.png","images/fairyImage1.png");
	fsImg = loadAnimation("images/fr 1.png","images/fairyimg.png");

}

function setup() {
	createCanvas(800, 750);
	fairy = createSprite(100,550);
	fairy.addAnimation("flying",fairyImg);
	fairy.scale = 0.2;

	fairyBody = Bodies.circle(100 ,550 , 100);

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;
    star.lifetime=300;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.1, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);
}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  if(star.isTouching(fairy)){
	fairy.velocityX=0;
	fairy.addAnimation("flying",fsImg);
	fairy.scale=0.3;
  }
  drawSprites();
}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}
	if (keyCode === LEFT_ARROW) {
		fairy.velocityX=-5;
	}
	if (keyCode === RIGHT_ARROW) {
		fairy.velocityX=5;
	}
}
