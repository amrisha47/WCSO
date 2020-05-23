var bullet, wall;
var speed, weight, thickness;

function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);  
  thickness = random(22,83);
  bullet = createSprite(50, 200, 150, 30);
  bullet.velocityX = speed;
  wall = createSprite(1200,200,thickness,height/2);

}

function draw() {
  background(0);
  if(wall.x-bullet.x<bullet.width/2+wall.width/2) {
    bullet.velocityX = 0;
    var damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
    if(weght=32, speed=223, thickness=70, damage=3.68) {
      bullet.shapeColor = color(0,255,0);
    } else if(weght=32,speed=223, thickness=40, damage=12.43) {
      bullet.shapeColor = color(255,0,0); 
    } else if(damage<100) {
      bullet.velocityX = speed;
    }
  }  
  drawSprites();
}