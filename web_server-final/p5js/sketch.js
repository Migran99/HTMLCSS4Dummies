var s1;
var scl = 20;
var f1;

function setup(){
	createCanvas(400,400);
	frameRate(10);
	background(0);
	stroke(170);
	s1 = new snake(width/2, height/2, scl);
	f1 = new food(scl);

}
//
function draw(){
	background(0);
	f1.draw();
	s1.tail();
	s1.draw();
	s1.move();
	s1.eat(f1);
	s1.die();
	hud();
}

function hud(){
	noStroke();
	textSize(32);
	fill(100, 102, 153);
	text("Length: " + s1.length, 10, 30);
	textSize(13);
	fill(180);
	text("Miguel Granero",10 , height-5);
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		if(s1.vely != 1) s1.dir(0,-1);
	}
	if(keyCode === DOWN_ARROW){
		if(s1.vely != -1) s1.dir(0,1);
	}
	if(keyCode === RIGHT_ARROW){
		if(s1.velx != -1) s1.dir(1, 0);
	}
	if(keyCode === LEFT_ARROW){
		if(s1.velx != 1) s1.dir(-1, 0);
	}
}