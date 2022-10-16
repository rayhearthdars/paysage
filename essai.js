//points of reference for the ground right side of the road
let p1 = { x: 800 , y: 300 };
let p2 = {x: 475, y: 400};
let p3 = {x: 475, y: 450};
let p4 = {x: 700, y: 600};
let p5 = {x: 800, y: 600};

//points of reference for the ground left side of the road
let p6 = {x: 0, y: 600};
let p7 = {x: 0, y: 450};

//big tree
let trunk = {
	x: 660,
	y: 300,
	width: 20,
	height: 150
}
let branch = {
	x1: 575,
	y1: 300,
	x2: 750,
	y2: 300,
	x3: 662,
	y3: 100
}

//small trees
let smallbranch = {
	x1: 750,
	y1: 300,
	x2: 770,
	y2: 300,
	x3: 760,
	y3:285
}

//clouds
let x = 0
let cloud1 = {
	y: 100,
	width: 100,
	height: 100
}

function setup(){
	createCanvas(800, 600);
	x1 = 0;
	x2 = 300;
	x3 = 520; //520
	y1 = 600; //600
	x4 = 1.1;

}

function draw(){

	noStroke();
	background(149, 206, 208);

//draw some clouds
	x2 =  x2 + 1;
	constrain(x2, 0, 800);
	if (x2 === 800){
		x2 = - 300;
	}
	fill(255, 255, 255);
	ellipse(x2, cloud1.y + 85, cloud1.width, cloud1.height);
	ellipse(x2 + 50, cloud1.y + 85, cloud1.width - 25, cloud1.height - 25);
	ellipse(x2 + 100, cloud1.y + 85, cloud1.width - 50, cloud1.height - 50);
	ellipse(x2 + 250, cloud1.y - 50, cloud1.width, cloud1.height);
	ellipse(x2 + 300, cloud1.y - 50, cloud1.width - 25, cloud1.height - 25);
	ellipse(x2 + 350, cloud1.y - 50, cloud1.width - 50, cloud1.height - 50);

//draw second mountain on the left
	fill(17, 48, 16);
	beginShape();
		vertex((p2.x - 250 + p4.x - 650) / 2, (p2.y + 300) /2);
		vertex(p2.x - 250, p2.y);
		vertex((p1.x + p2.x - 410)/2, (p2.y + p1.y + 50)/ 2);
		vertex(p1.x -160, p1.y + 50);
		vertex(p4.x - 400, 200);
		vertex(p4.x - 500, 250);
	endShape();

//draw clouds
	fill(255, 255, 255);
	x1 =  x1 + 1;
	constrain(x, 0, 800);
	if (x1 === 800){
		x1 = 0;
	}
	ellipse(x1, cloud1.y, cloud1.width, cloud1.height);
	ellipse(x1 + 50, cloud1.y, cloud1.width - 10, cloud1.height - 10);
	ellipse(x1 + 100, cloud1.y, cloud1.width - 30, cloud1.height - 30);
	ellipse(x1 - 100, cloud1.y + 150, cloud1.width + 30, cloud1.height + 30);
	ellipse(x1 - 50, cloud1.y + 150, cloud1.width + 15, cloud1.height + 15);
	ellipse(x1, cloud1.y + 150, cloud1.width, cloud1.height);

//draw first mountain on the left
	fill(36, 100, 34);
	beginShape();
		vertex(p7.x, p7.y);
		vertex(p2.x - 250, p2.y);
		vertex(p4.x - 650, 300);
	endShape();

//draw small trees behind
	fill(135, 86, 13);
	ellipse(trunk.x + 100, trunk.y, trunk.width - 17, trunk.height -125);
	ellipse(trunk.x + 110, trunk.y + 5, trunk.width - 17, trunk.height -125);
	ellipse(trunk.x + 115, trunk.y + 10, trunk.width - 17, trunk.height -125);
	ellipse(trunk.x + 120, trunk.y + 5, trunk.width - 17, trunk.height -125);
	ellipse(trunk.x + 125, trunk.y, trunk.width - 17, trunk.height -125);
	ellipse(trunk.x + 130, trunk.y - 5, trunk.width - 17, trunk.height -125);
	ellipse(trunk.x + 135, trunk.y - 7, trunk.width - 17, trunk.height -125);


	fill(35, 81, 37);
	triangle(smallbranch.x1, smallbranch.y1, smallbranch.x2, smallbranch.y2, smallbranch.x3, smallbranch.y3);
	triangle(smallbranch.x1 + 10, smallbranch.y1 + 5, smallbranch.x2 + 10, smallbranch.y2 + 5, smallbranch.x3 + 10, smallbranch.y3 + 5);
	triangle(smallbranch.x1 + 15, smallbranch.y1 + 10, smallbranch.x2 + 15, smallbranch.y2 + 10, smallbranch.x3 + 15, smallbranch.y3 + 10);
	triangle(smallbranch.x1 + 20, smallbranch.y1 + 5, smallbranch.x2 + 20, smallbranch.y2 + 5, smallbranch.x3 + 20, smallbranch.y3 + 5);
	triangle(smallbranch.x1 + 25, smallbranch.y1, smallbranch.x2 + 25, smallbranch.y2, smallbranch.x3 + 25, smallbranch.y3);
	triangle(smallbranch.x1 + 30, smallbranch.y1 - 5, smallbranch.x2 + 30, smallbranch.y2 - 5, smallbranch.x3 + 30, smallbranch.y3 - 5);
	triangle(smallbranch.x1 + 35, smallbranch.y1 - 7, smallbranch.x2 + 35, smallbranch.y2 - 7, smallbranch.x3 + 35, smallbranch.y3 - 7);


//draw right side of the road
	fill(48,127,72);
	beginShape();
		vertex(p1.x, p1.y);
		vertex(p2.x, p2.y);
		vertex(p3.x, p3.y);
		vertex(p4.x, p4.y);	
		vertex(p5.x, p5.y);	
	endShape();

//draw left side of the road
	beginShape();
		vertex(p2.x - 250, p2.y);
		vertex(p3.x - 250, p3.y);
		vertex(p4.x - 350, p4.y);
		vertex(p5.x - 450, p5.y);
		vertex(p6.x, p6.y);
		vertex(p7.x, p7.y);
	endShape();

//draw road
	fill(185, 176, 93);
	beginShape();
		vertex(p2.x, p2.y);
		vertex(p3.x, p3.y);
		vertex(p4.x, p4.y);
		vertex(p4.x - 350, p4.y);
		vertex(p3.x - 250, p3.y);
		vertex(p2.x - 250, p2.y);
		vertex(p1.x -160, p1.y + 50);
	endShape();

//draw the big tree
	fill(135, 86, 13);
	ellipse(trunk.x, trunk.y, trunk.width, trunk.height);
	fill(77, 178, 80)
	triangle(branch.x1, branch.y1, branch.x2, branch.y2, branch.x3, branch.y3);



	//scale person smaller as he walks (à revoir)
	scale(0.7 * x4);

	//draw character (à revoir)
	push();
	//head
	fill(102, 50, 0);
	ellipse(x3, y1, 20, 25);
	//neck
	ellipse(x3, y1 + 12, 3, 10);
	//trunk
	fill(129, 73, 144);
	ellipse(x3, y1 + 40, 16, 50);
	pop();

	push();
	//right arm
	fill(102, 50, 0);
	ellipseMode(CENTER);
	translate(x3 - 100, y1 + 45);
	rotate(75);
	ellipse(109, 40, 7, 50);
	//left arm
	rotate(-150);
	ellipse(75, - 37, 7, 50);
	pop();

	push();
	fill(0, 0, 0);
	translate(x3 - 100, y1 + 45);
	//right leg
	push();
	rotate(25);
	rect(95, 27, 10, 60);
	pop();
	//left leg
	push();
	fill(0, 0, 0);
	rotate(-50);
	rect(95, -15, 10, 60);
	pop();
	

}

function mouseClicked () {

	fill(250, 250, 250);

	x3 = constrain(x3, 400, 520);
	x3 -= 10;
	if (x3 <= 400){
		x3 = 400;
	}
	y1 = constrain(y1, 400, 600);	
	y1 -= 10;
	if (y1 <= 400){
		y1 = 400;
	}

	x4 = constrain(x4, 0, 1.1);
	while (x4 <= 0.5){
		x4 -= 0.1;
	}
	


	

}