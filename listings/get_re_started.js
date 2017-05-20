class P5Retest {
  constructor(p){
    this.p = p;
  
    this.p.setup = function() {
      var parent_div_id = "get_re_started";
    
      var canvas = this.p.createCanvas($("#" + parent_div_id).outerWidth(true), 300);
      canvas.parent(parent_div_id);
      this.p.background(255);
      this.p.strokeWeight(3);
      this.p.stroke(0, 0, 255);
      this.p.fill(255);
    };
    
    this.p.mousePressed = function() {
      /* set background and fill to blue */
      this.p.background(0, 0, 255);
      this.p.fill(0, 0, 255);
      /* set stroke to white */
      this.p.stroke(255);
    };
    
    this.p.mouseReleased = function() {
      /* set background and fill to white */
      this.p.background(255);
      this.p.fill(255);
      /* set stroke to blue */
      this.p.stroke(0, 0, 255);
    };
    
    this.p.draw = function() {
      var diameter;
      /* Draw circles that change diameter based on mouse speed */
      diameter = this.p.pow(this.p.dist(this.p.pmouseX, this.p.mouseY, this.p.mouseX, this.p.mouseY), 1.5);
      this.p.ellipse(this.p.mouseX, this.p.mouseY, diameter, diameter);
    };
  }; // end constructor
}
  
new p5(P5Retest, "canvas_container");

