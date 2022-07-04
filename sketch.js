const dess = [];
const obss = [];
var numD = 70;
var numO = 5;
var frame = 0;
var Travazanga;
var Asteroid;
var score=0;
var x,y;
var Ground,UpperGround;

function setup() {
	
	Blue = color(0,0,255);
	Green = color(0,255,0);
	Gray = color(100);
	Black = color(0);
	Yellow = color(252,207,3);
		
	createCanvas(600, 400);
	
	background(180);
	
	for (var r = 0; r < numD; r=r+1) {
		desc(dess);
	}
	for (var j = 0; j < numO; j=j+1) {
		obsc(obss);
	}
	
	rectMode(CENTER);
	
	frameRate(60);
	
	Travazanga = new runner(450, 200, 2);
	Asteroid = new obstacle();
	
	
	print("Arrow Keys To Move The Astronaut Who Is Floating On The Moon");
	print("Dodge The Yellow Asteroids Which Speed Up After Each Rotation Around The Moon");
	print("Remember You Have Limited Oxygen, Don't Let It Hit Zero");
	print("The Green Squares Replenish Oxygen But Are Really Small, Use Them Wisely");
	print("Depending On Where You Are The Score Goes Up Faster");
	print("Good Luck Astronaut And Happy Floating");

	
}

function draw() {

	Collide();
	Collide1();
	Collide2();
	Collide3();
	Collide4();
	
	
	
	if (Travazanga.x >= 550 && Travazanga.y <= 50 && Travazanga.y >= 25 ){
			Travazanga.oxygen = Travazanga.oxygen + 0.5;
	}
	
	if (Travazanga.x >=550 && Travazanga.y >= 350 && Travazanga.y <=375){
			Travazanga.oxygen = Travazanga.oxygen + 0.5;
	}
	
			
	if (Travazanga.alive) {
		frame=frame+1;
		
		if(Travazanga.x >= 300 && Travazanga.x <= 350){
			score = score + 0.05;	
		}else if (Travazanga.x >= 350 && Travazanga.x <= 450){
			score = score	+ 0.025;
		}else if (Travazanga.x >= 450 && Travazanga.x <= 600){
			score = score + 0.01;	
		}
		
		background(180);
		
		/*********************************/
	//text(dist(obss[e].x, obss[e].y, Travazanga.x, Travazanga.y),50,50);
		
		fill(Green);
		rect(575,25,50);
		rect(575,375,50);
		
		fill(Gray);
		Ground = rect(300,0,600,25);
		UpperGround = rect(300,400,600,25);
		
		if (Travazanga.oxygen <= 0) {
			Travazanga.collide();
		}
		text("Oxygen: " + Math.round(Travazanga.oxygen), 200, 50);
		text("Score: " + Math.round(score),350,50);
		
		for (var i = 0; i < dess.length; i=i+1) {
			dess[i].update();
		}
		for (var j = 0; j < obss.length; j=j+1) {
			obss[j].update(frame);
		}
		Travazanga.move(frame);
	} else {
		textSize(50);
		text("You Died", 200, 200)
	}
}

function desc(dess) {
	dess.push(new design(random(500, -300), random(5, 390), 2));
}

function obsc(obss) {
	obss.push(new obstacle(random(-8, -200), random(5, 395), 5));
}

function Collide(){
	if(dist(obss[0].x, obss[0].y, Travazanga.x, Travazanga.y) <= 20){
	 Travazanga.collide();	
	}
}
function Collide1(){
	if(dist(obss[1].x, obss[1].y, Travazanga.x, Travazanga.y) <= 20){
	 Travazanga.collide();	
	}
}
function Collide2(){
	if(dist(obss[2].x, obss[2].y, Travazanga.x, Travazanga.y) <= 20){
	 Travazanga.collide();	
	}
}
function Collide3(){
	if(dist(obss[3].x, obss[3].y, Travazanga.x, Travazanga.y) <= 20){
	 Travazanga.collide();	
	}
}
function Collide4(){
	if(dist(obss[4].x, obss[4].y, Travazanga.x, Travazanga.y) <= 20){
	 Travazanga.collide();	
	}
}