var thickness,wall;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
  speed = random(223,321)
  weight = random(30,52)
  thickness = random(22,83)
  wall = createSprite(1200, 200, thickness, height/2 );
  bullet = createSprite(330,200,15,10)
  bullet.velocityX = speed;
  wall.shapeColor = color(80,80,80);
  bullet.shapeColor = "white";
}

function draw() {
  background(0);  
  
  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);
    if(damage>10){
      wall.shapeColor = color(225,0,0)
      bullet.x = 1300;
    }
    if(damage<10){
      wall.shapeColor = color(0,225,0)
      bullet.x = 1170;
    }
  }

  drawSprites();
}