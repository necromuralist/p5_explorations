/**
 * A container of random circles
 */
class Circles {
  constructor(p, setup_settings){
    this.p = p;
    this.setup_settings = setup_settings;
  } // constructor

  setup() {
    this.p.createCanvas(
      $("#" + this.setup_settings.parent_id).outerWidth(true),
      this.setup_settings.height
    );
    this.p.background(this.setup_settings.background);
    this.p.smooth();
    this.p.strokeWeight(this.setup_settings.stroke_weight);
    this.p.fill(this.setup_settings.fill);
    this.draw_circles();
  }

  draw() {
    this.p.background(this.setup_settings.background);
    for (var circle of this.circles){
      circle.update();
    }
  }
} // Circles

/**
 * A random Circle class
 */
class Circle {
  /**
   * Sets up the initial values
   *
   * @param {p5} p: p5 object
   * @param {object} initialize: values to intialize the circle
   */
  constructor(p, initialize){
    this.initialize = initialize;
    this.p = p;
    this._x = null;
    this._y = null;
    this._radius = null;
    this._diameter = null;
    this._line_color = null;
    this._fill_color = null;
    this._alpha = null;
  }

  /**
   * The x-value for the circle center
   */
  get x() {
    if (this._x === null) {
      this._x = this.p.random(this.p.width);
    }
    return this._x;
  } // end x

  get y() {
    if (this._y === null) {
      this._y = this.p.random(this.p.height);
    }
  return this._y;
  } // end y

  get radius() {
    if (this._radius === null) {
      this._radius = this.p.random(this.initialize.maximum) + this.initialize.minimum;
    }
    return this._radius;    
  }

  get diameter() {
    if (this._diameter === null) {
      this._diameter = this.radius * 2;
    }
  }

  get line_color() {
    if (this._line_color === null) {
      this._line_color = this.random_color();
    }
    return this._line_color;
  }

  get fill_color() {
    if (this._fill_color === null) {
      this._fill_color = this.random_color();
    }
  }

  get alpha() {
    if (this._alpha === null) {
      this._alpha = this.p.random(this.initialize.max_color);
    }
    return this._alpha;
  }

  random_color() {
      return this.p.color(this.p.random(this.initialize.max_color),
                          this.p.random(this.initialize.max_color),
                          this.p.random(this.initialize.max_color));
  } // end random_color

  draw() {
    this.p.noStroke();
    this.p.fill(this.fill_color, this.alpha);
    this.p.ellipse(this.x, this.y, this.diameter, this.diameter);
    this.p.stroke(this.line_color, this.alpha);
    this.p.noFill();
    this.ellipse(this.x, this.y,
                 this.initialize.minimum, this.initialize.minimum);
  }
};

let WHITE = 255;

let initialize = {
  minimum: 10,
  maximum: 100,
  height: 200,
  max_color: WHITE,
  parent_id: "emergent-circles"
}

function circle_builder(p) {
  let circle = new Circle(p);
}

var circle_sketch = new p5(circle_builder, initialize.parent_id);
