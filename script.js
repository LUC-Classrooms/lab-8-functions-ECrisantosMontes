function setup() {
  createCanvas(600, 400);
  this.color = color(random(255), random(255), random(255));// random eye color
}

function draw() {
  background(255, 50, 140);

  //this is a call to myShape()
  myShape(width / 2, height / 2, 1);
  myShape(-100, 40, 1);
  // myShape() takes three arguments
  // arg1: horizontal location
  // arg2: vertical location
  // arg3: scale factor (1 is full size)
  /* add two more calls to myShape that draw your shape in different locations
  */
  
  myShape(width / 4, height / 4, 1);
}

function myShape(x, y, s) {
  // make this function more interesting
  push(); // make a separate layer
  translate(x, y); // move the origin point
  scale(s);
  strokeWeight(1)
  fill(250)
  ellipse(0, 0, 60); // eyeball
  fill(this.color)//random eye color
  ellipse(0, 0, 40) //iris
  fill(0);// black pupil
  ellipse(0, 0, 20)//pupil
  //...eyeballs with a top-hat because why not?
  strokeCap(SQUARE);
  strokeWeight(8);//thick line
  line(30, -30, -30, -30); //easier than making a skinny rectangle
  fill(0);
  rect(-19,-85, width / 16, height / 8); // top part of top-hat
  //pop(); // dispose of the layer
}
