function setup() {
  createCanvas(800,800);
  fill('green');//house color
  rect(200,400,200,200); // draw the body of the house
  fill('yellow');//roof color
  triangle(200-10,400,400+10,400,300,325); // draw the roof
  fill('blue');//door color
  rect(250,500,50,100);//door
  fill('white');//window color
  rect(320,420,40,40);//window
  ellipse(260,550,10,10);//door knob
  
}

function draw() {
  
}