var car, wall;
var speed, weight;

function setup() {
  createCanvas(800,400);

  wall = createSprite(700,200,60,200);
  car = createSprite(200,200,20,20);

  speed = random(55,90);
  weight = random(400,1500);

  car.velocityX = speed;

}

function draw() {
  background("black");  

  if(car.x - wall.x < car.width/2 + wall.width/2
    && wall.x - car.x < car.width/2 + wall.width/2){

     var deformation = 0.5 * weight * speed * speed / 22500;

     car.velocityX = 0;

     if(deformation < 100){
       car.shapeColor = color(0, 255, 0);
     }
     if(deformation > 100 
      && deformation < 180){
        car.shapeColor = color(230, 230, 0);
      }
      if(deformation > 180){
        car.shapeCOlor = color(255, 0, 0);
      }
  }

  drawSprites();
}