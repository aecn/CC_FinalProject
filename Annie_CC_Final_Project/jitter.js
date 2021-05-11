// jittery/shaking/shivering effect of the question marks & dinos

class Jitter {
    constructor() {
        this.posX = random(width);
        this.posY = random(height);
        this.size = (10, 30);
        this.speed = 1;
    }

    display() {
        ellipse(this.x, this.y, this.size, this.size);
    }

    update() {
        this.x += random(-this.speed, this.speed);
        this.y += random(-this.speed, this.speed);
    }
}