
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload() {
	boyImage = loadImage("boy.png");
	treeImage = loadImage("tree.png");
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	
	ground = new Ground(750, 700, 1500, 20);

	mango1 = new Mango(775, 350, 50);
	mango2 = new Mango(900, 260, 50);
	mango3 = new Mango(1000, 450, 50);
	mango4 = new Mango(1000, 260, 50);
	mango5 = new Mango(900, 400, 50);
	mango6 = new Mango(1300, 260, 50);
	mango7 = new Mango(1300, 430, 50);
	mango8 = new Mango(1200, 260, 50);
	mango9 = new Mango(1100, 300, 50);
	mango10 = new Mango(1150, 330, 50);

	stone = new Stone(100, 570, 75);

	sling = new Sling(stone.body, {x: 100, y: 570});
}


function draw() {
  	rectMode(CENTER);
	background(0);
	Engine.update(engine);

	image(boyImage, 60, 450, 350, 350);
	image(treeImage, 700, 100, 750, 750);

	ground.display();

	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	mango9.display();
	mango10.display();

	stone.display();

	sling.display();

	collision(mango1, stone);
	collision(mango2, stone);
	collision(mango3, stone);
	collision(mango4, stone);
	collision(mango5, stone);
	collision(mango6, stone);
	collision(mango7, stone);
	collision(mango8, stone);
	collision(mango9, stone);
	collision(mango10, stone);
}

function collision(m, s) {
	var p1 = m.body.position;
	var p2 = s.body.position;

	var distance = dist(p2.x, p2.y, p1.x, p1.y);

	if(distance <= m.z + s.z) {
		Matter.Body.setStatic(m.body, false);
	}
}

function mouseDragged() {
	Body.setPosition(stone.body, {x: mouseX, y: mouseY});
}

function mouseReleased() {
	sling.fly();
}

function keyPressed() {
	if(keyCode == 32) {
		sling.attach(stone.body);
	}
}