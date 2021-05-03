// star class

class Star {

	constructor() {
		this.x = random(width); // random x location
		this.y = random(height); // random y location
		this.size = random(0.10, 2); // random size ranging from 0.10 to 2 (small)
		this.p = random(TWO_PI); // random size
	}

	display() {
		this.p += 0.1; // speed (slow)
		var twinkle = this.size + cos(this.p) * 2; // twinkle effect = random size + random size * 2
		noStroke(); // no stroke
		fill(255); // white
		ellipse(this.x, this.y, twinkle, twinkle); // star is an ellipse shape. random x & y, random size

	}
}