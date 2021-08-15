var dock = false;






function preload(){
  bg = loadImage("spacebg.jpg")
  iss = loadImage("iss.png")
  sp1 = loadImage("spacecraft1.png")
  sp2 = loadImage("spacecraft2.png")
  sp3 = loadImage("spacecraft3.png")
sp4 = loadImage("spacecraft4.png")



}



function setup() {
  createCanvas(1600,800);
satellite = createSprite(600, 350);
satellite.addImage(iss);
spp1 = createSprite(550,500)
spp1.addImage(sp1)
spp1.scale = 0.3

}

function draw() {
  background(bg);

text(mouseX+":"+mouseY,600,400)


if(!dock){
  spp1.x = spp1.x+random(-1,1)
}

  if(keyDown(LEFT_ARROW)){
    spp1.x = spp1.x-1
spp1.addImage(sp3)

  }
  if(keyDown(RIGHT_ARROW)){
    spp1.x = spp1.x+1
spp1.addImage(sp4)

  }
  if(keyDown(UP_ARROW)){
    spp1.y = spp1.y-1
spp1.addImage(sp2)

  }
  if(keyDown(DOWN_ARROW)){
    spp1.y = spp1.y+1
spp1.addImage(sp2)

  }
if(spp1.y<= (satellite.y+100)&&spp1.x<=(satellite.x-10)){
  dock = true;
  textSize(25);
  fill("white")
  textSize("Docking Successful!",200,300);
}

  drawSprites();
}