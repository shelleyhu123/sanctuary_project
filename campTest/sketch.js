
var map;
var campPop;
var tl = 0;
var speed = 1;

function preload(){
campPop = loadJSON("camp_population_by_month.json");
  map = loadImage("us_map.jpg");
}

function setup() { 
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  textSize(20);
  frameRate(2);
} 

function draw() { 
   background(220);
    image(map, 0, 0);

 tl += speed;
  if (tl >= 45){
  tl = 45;
  }
  noStroke();
  fill(255, 0, 0, 120);

  ellipse(100, 262, -campPop[tl]['Tule Lake']/100, -campPop[tl]['Tule Lake']/100);  
  ellipse(300, 330, -campPop[tl]['Topaz_Central Utah']/100, -campPop[tl]['Topaz_Central Utah']/100);  
  ellipse(265, 510, -campPop[tl]['Poston_Colorado River']/100, -campPop[tl]['Poston_Colorado River']/100);
  ellipse(323, 535, -campPop[tl]['Gila River']/100, -campPop[tl]['Gila River']/100);
  ellipse(555, 375, -campPop[tl].Granada/100, -campPop[tl].Granada/100);
  ellipse(390, 178, -campPop[tl]['Heart Mountain']/100, -campPop[tl]['Heart Mountain']/100);
  ellipse(820, 530, -campPop[tl].Jerome/100, -campPop[tl].Jerome/100);
  ellipse(160, 420, -campPop[tl].Manzanar/100, -campPop[tl].Manzanar/100);
  ellipse(265, 235, -campPop[tl].Minidoka/100, -campPop[tl].Minidoka/100);
  ellipse(822, 510, -campPop[tl].Rohwer/100, -campPop[tl].Rohwer/100);
  
  push();
  stroke(0);
  fill(0);
  text(campPop[tl]['Tule Lake'], 100, 262);
  text(campPop[tl]['Topaz_Central Utah'], 300, 330);
  text(campPop[tl]['Poston_Colorado River'], 265, 510);
  text(campPop[tl]['Gila River'], 323, 535);
  text(campPop[tl].Granada, 555, 375);
  text(campPop[tl]['Heart Mountain'], 390, 178);
  text(campPop[tl].Jerome, 820, 530);
  text(campPop[tl].Manzanar, 160, 420);
  text(campPop[tl].Minidoka, 265, 235);
  text(campPop[tl].Rohwer, 822, 510);
	pop();  
  //
  push();
  textSize(40);
  fill(0);
  text(campPop[tl].Date, width/2, 40);
  pop();
  
  console.log(tl);
 
}