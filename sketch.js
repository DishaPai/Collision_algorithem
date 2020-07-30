var rect;
var mrect;
function setup() {
  createCanvas(800,400);
  rect = createSprite(400, 200, 150, 50);
  mrect= createSprite(250, 200, 50, 150);
}

function draw() {
  background(255,255,255);  
  mrect.x = World.mouseX;
  mrect.y = World.mouseY;     
   if (mrect.x-rect.x<mrect.width/2+rect.width/2 && 
    rect.x-mrect.x<mrect.width/2+rect.width/2 && 
    mrect.y-rect.y<mrect.height/2+rect.height/2 && 
    rect.y-mrect.y<mrect.height/2+rect.height/2 ) {
     rect.shapeColor = "blue";
     mrect.shapeColor = "blue";
   } else {
    rect.shapeColor = "green";
    mrect.shapeColor = "green"; 
   }
  drawSprites();
}