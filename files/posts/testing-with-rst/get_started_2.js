/**
 * Instance mode implementation of a simple sketch that draws blue circles
 * on a white background when the user moves the mouse cursor over it, basing
 * the size of the circles on how fast the cursor is moving. If the user clicks
 * and drags the mouse it draws white circles on a blue background instead.
 **/
class GetStarted2 {
  /**
   * The constructor sets up the p5 functions
   *
   * @param {object} p: the `p5` object
   * @param {string} parent_div_id: ID of the div to attach the canvas to
   * @param {integer} height: Pixel-heght for the canvas
   **/
  constructor(p, parent_div_id, height){
    /**
     * Creates the canvas using ``height`` and the width of the parent div
     * Also sets up some coloring
     **/
    p.setup = function() {
      var canvas = p.createCanvas($("#" + parent_div_id).outerWidth(true),
                                  height);
      p.background(255);
      p.strokeWeight(3);
      p.stroke(0, 0, 255);
      p.fill(255);
    };

    /** 
     * sets the background and fill to blue
     * and the stroke to white 
     **/
    p.mousePressed = function() { 
      p.background(0, 0, 255);
      p.fill(0, 0, 255);
      p.stroke(255);
    };

    /**
     * sets the background and fill to white 
     * and the stroke to blue 
     **/
    p.mouseReleased = function() {
      p.background(255);
      p.fill(255);
      p.stroke(0, 0, 255);
    };

    /**
     * Draws circles that change diameter based on mouse speed
     **/
    p.draw = function() {
      var diameter;
      diameter = p.pow(p.dist(p.pmouseX, p.mouseY, p.mouseX, p.mouseY), 1.5);
      p.ellipse(p.mouseX, p.mouseY, diameter, diameter);
    };
  }; // end constructor
};// end GetStarted2

/** 
 * Builds the GetStarted2 sketch
 * 
 * p5 thinks it's getting a function, not a class      
 * so it doesn't use the `new` statement. This function 
 * works around that and passes in some parameters
 *
 * @param {object} p: a ``p5`` instance
 **/
function build_get_started_2(p){
  return new GetStarted2(p, "get_started_2", 300);
};

var p5_retest = new p5(build_get_started_2, "get_started_2");

