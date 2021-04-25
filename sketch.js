const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var box, ball, rope;

function setup() {
  createCanvas(1200,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 795);
  ball = new Ball(800, 300, 50, 50);
  rope = new Rope(ball.body, {x:800, y: 200});

  box1 = new Box(650, 760);
  box2 = new Box(570, 760);
  box3 = new Box(490, 760);
  box4 = new Box(410, 760);
 
  box6 = new Box(650, 680);
  box7 = new Box(570, 680);
  box8 = new Box(490, 680);
  box9 = new Box(410, 680);
  
  box11 = new Box(650, 600);
  box12 = new Box(570, 600);
  box13 = new Box(490, 600);
  box14 = new Box(410, 600);
 
  box16 = new Box(650, 540);
  box17 = new Box(570, 540);
  box18 = new Box(490, 540);
  box19 = new Box(410, 540);
 
  box21 = new Box(650, 460);
  box22 = new Box(570, 460);
  box23 = new Box(490, 460);
  box24 = new Box(410, 460);
 
  box26 = new Box(650, 380);
  box27 = new Box(570, 380);
  box28 = new Box(490, 380);
  box29 = new Box(410, 380);

  box30 = new Box(650, 300);
  box31 = new Box(570, 300);
  box32 = new Box(490, 300);
  box33 = new Box(410, 300);

  box34 = new Box(650, 240);
  box35 = new Box(570, 240);
  box36 = new Box(490, 240);
  box37 = new Box(410, 240);
 
}

function draw() {
  background("lightBlue");  

  Engine.update(engine);
  
  rope.display();

  ball.display();
 
  box1.display();
  box2.display();
  box3.display();
  box4.display();
 
  box6.display();
  box7.display();
  box8.display();
  box9.display();
 
  box11.display();
  box12.display();
  box13.display();
  box14.display();
 
  box16.display();
  box17.display();
  box18.display();
  box19.display();
 
  box21.display();
  box22.display();
  box23.display();
  box24.display();
 
  box26.display();
  box27.display();
  box28.display();
  box29.display();

  box30.display();
  box31.display();
  box32.display();
  box33.display();

  box34.display();
  box35.display();
  box36.display();
  box37.display();
  
  ground.display();
  
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x:mouseX, y:mouseY});
}