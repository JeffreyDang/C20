var movingrect, fixedrect;

function setup() {
  createCanvas(800,400);
  movingrect  = createSprite(200,200,40,60);
  movingrect.shapeColor= "blue";
  fixedrect = createSprite(200,200,60,40);
  fixedrect.shapeColor= "blue";
  
}

function draw() {
  background(0,0,0);  
  movingrect.x = mouseX
  movingrect.y = mouseY
  if(movingrect.x - fixedrect.x < fixedrect.width/2 + movingrect.width/2
    && fixedrect.x - movingrect.x < fixedrect.width/2 + movingrect.width/2
    &&movingrect.y - fixedrect.y < fixedrect.width/2 + movingrect.width/2
    && fixedrect.y - movingrect.y < fixedrect.width/2 + movingrect.width/2){

    movingrect.shapeColor= "red"; 
    fixedrect.shapeColor= "red";
  }
  else{
    movingrect.shapeColor= "blue";
    fixedrect.shapeColor= "blue";
  }
  drawSprites();
}