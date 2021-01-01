
var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);
  fixedRectangle= createSprite(200, 200, 50, 80);
  fixedRectangle.shapeColor="blue";
  movingRectangle= createSprite(400, 200, 80, 30);
  movingRectangle.shapeColor="green";
  movingRectangle.velocityX = 5;
fixedRectangle.velocityX = -5;  
}

function draw() {
  background(255,255,255);  
//  movingRectangle.x=World.mouseX;
  //movingRectangle.y=World.mouseY;
  console.log(movingRectangle.x-fixedRectangle.x);


// if(isTouching(movingRectangle,fixedRectangle))
// {
//   fixedRectangle.shapeColor="red";
//   movingRectangle.shapeColor="red";


// }

// else
// {
//   fixedRectangle.shapeColor="green";
//     movingRectangle.shapeColor="green";
// }

bounceOff(movingRectangle,fixedRectangle);

  drawSprites();
}

