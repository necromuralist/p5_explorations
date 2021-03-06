function setup() {
  var parent_div_id = "get_started";
  // this sets the width of the canvas to match the div (center column)
  canvas = createCanvas($("#" + parent_div_id).outerWidth(true), 300);
  canvas.parent(parent_div_id);
  background(255);
  strokeWeight(3);
  stroke(0, 0, 255);
  fill(255);
}

function mousePressed() {
  /* set background to blue */
  background(0, 0, 255);
}

function mouseReleased() {
  /* set background to white */
  background(255);
}

function draw() {
  var diameter;
  /* Draw circles that change diameter based on mouse speed */
  /* and color based on if mouse-pressed (or not pressed)   */
  if (mouseIsPressed) {
    fill(0, 0, 255);
    stroke(255);
  } else {
    fill(255);
    stroke(0, 0, 255);
  }
  diameter = pow(dist(pmouseX, pmouseY, mouseX, mouseY), 1.5);
  ellipse(mouseX, mouseY, diameter, diameter);
}
