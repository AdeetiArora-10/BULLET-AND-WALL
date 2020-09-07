var  wall;
var speed, weight, bullet;
var deformation;


function setup() {
  createCanvas(1200, 400);

  //choosing random spped and weight of the car
  speed = random(223,321);
  weight=random(30,52)
  thickness=random(22,83)

  //car 
  bullet=createSprite(50, 200, 100, 30);
  
  //move the bullet
  bullet.velocityX = speed;
  wall=createSprite(1100,200,thickness,500);
      

}

function draw() {
  background(245);
  drawSprites();

  if(abs(wall.x-bullet.x)<(100+ wall.width/2)){
     //calculate deformation amount of the car
     deformation=Math.round((0.5*weight*speed*speed)/(thickness*
     thickness*thickness)); 

      bullet.velocityX=0;

    if(deformation<10){
       bullet.shapeColor="green";
    }
  }
     else if(deformation>10){
       bullet.shapeColor="red";
     }
    }
