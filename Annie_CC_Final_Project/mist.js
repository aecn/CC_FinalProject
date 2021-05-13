// mist particle class

class Particle {
    constructor(px, py, rad) {
        this.x = px;
        this.y = py;
        this.radius = rad;
    }

    display() {
        noStroke(); // no stroke to create a more mystical effect
        fill(112, 224, 0, 120); // slightly transparent lime green
        ellipse(this.x, this.y, this.radius); // ellipse is defined by varying x, y, and radius values
    }

    update() {
        this.x = this.x + random(-10, 10); // how wide the mist is; the x values
        this.y = this.y - random(4); // how far the mist travels away from the starting point, y value
        this.radius = this.radius + 0.5; // how much the size of these ellipse particles increase as they move further away
    }
}