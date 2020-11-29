var bullet,wall;
var speed,weight,deformation,thickness;
function setup() {
  createCanvas(1500,1500);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  bullet = createSprite(50, 300, 80, 50);
  bullet.shapeColor=("white");
  wall = createSprite(1200,300,thickness,height/2); 
  bullet.velocityX=speed;
 
}

function draw() {
  background("black");  
  
  wall.shapeColor=("white");
  if(hascollided(bullet,wall)){
  bullet.velocityX=0;
  var damage=0.5 * weight * speed * speed/(thickness *thickness *thickness);
  
  if (damage>10){
    wall.shapeColor=color(255,0,0);
  }
  if (damage<10){
    wall.shapeColor=color(0,255,0);
  }
  }
  
  

  drawSprites();
}

function hascollided(bullet1,wall1){
  bulletRightEdge=bullet1.x+bullet1.width;
  wallLeftEdge=wall1.x;
  if (bulletRightEdge>=wallLeftEdge){
    return true
  }
  {
  return false;
  }
}