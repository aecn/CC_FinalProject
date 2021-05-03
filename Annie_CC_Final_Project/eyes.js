// The Girl with the Pearl Earring eyes class

class Eyes {

  constructor() { // class constructor
    this.wanderX = 0;
    this.wanderY = 0;
  }

  update() {
  	display(wanderX, wanderY);
    this.wanderX = map(mouseX, 0, width, -5, 5);
    this.wanderY = map(mouseX, 0, width, -1, 1);
  }

  display() {
    fill(0);
    ellipse(x+100, y-200, 20, 20);
    ellipse(x+300, y-200, 20, 20);
  }
} // end class