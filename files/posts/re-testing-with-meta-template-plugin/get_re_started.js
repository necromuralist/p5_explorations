class P5Retest {
  constructor(p){
    p.setup = function() {
      var parent_div_id = "get_re_started";
    
      var canvas = p.createCanvas($("#" + parent_div_id).outerWidth(true), 300);
      canvas.parent(parent_div_id);
      p.background(255);
      p.strokeWeight(3);
      p.stroke(0, 0, 255);
      p.fill(255);
    };
    
    p.mousePressed = function() {
      /* set background and fill to blue */
      p.background(0, 0, 255);
      p.fill(0, 0, 255);
      /* set stroke to white */
      p.stroke(255);
    };
    
    p.mouseReleased = function() {
      /* set background and fill to white */
      p.background(255);
      p.fill(255);
      /* set stroke to blue */
      p.stroke(0, 0, 255);
    };
    
    p.draw = function() {
      var diameter;
      /* Draw circles that change diameter based on mouse speed */
      diameter = p.pow(p.dist(p.pmouseX, p.mouseY, p.mouseX, p.mouseY), 1.5);
      p.ellipse(p.mouseX, p.mouseY, diameter, diameter);
    };
  }; // end constructor
}

function build_p5_retest(p){
  return new P5Retest(p);
};

var p5_retest = new p5(build_p5_retest, "get_re_started");

