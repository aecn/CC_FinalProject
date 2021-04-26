// Annie Chen - Final Project


var scene = 1; // scenes start with 1, the title screen
var day = false; // the daytime is default until KeyPressed

function setup() {
    createCanvas(1300, 600);
}

function draw() {

    if (scene == 1) { // title screen
        if (day) {
            background(255, 100, 0);
            // floor
            fill("#9999a1");
            rectMode(CENTER);
            rect(625, 600, 1400, 100);
            // sign
            fill(255);
            rect(1250, 400, 60, 60);
        } else {
            // floor
            fill(255);
            rectMode(CENTER);
            rect(625, 600, 1400, 100);
            // sign
            fill(255);
            rect(1250, 400, 60, 60);
        }
    }

    if (scene == 2) { // paintings display
        if (day) {
            background(220);
            // floor
            fill("#9999a1");
            rectMode(CENTER);
            rect(625, 600, 1400, 100);

            // painting 1
            rect(170, 300, 270, 400);

            // painting 2
            rect(550, 300, 400, 250);

            // painting 3
            rect(1000, 300, 400, 470);

            // sign
            fill(255);
            rect(1250, 400, 60, 60);
        } else {
            background(0);
                        // floor
            fill("#9999a1");
            rectMode(CENTER);
            rect(625, 600, 1400, 100);

            // painting 1
            rect(170, 300, 270, 400);

            // painting 2
            rect(550, 300, 400, 250);

            // painting 3
            rect(1000, 300, 400, 470);

            // sign
            fill(255);
            rect(1250, 400, 60, 60);
        }
    }

    if (scene == 3) { // statues/mummies display
        if (day) {
            background(0);
            //painting
            fill(255);
            rect(200, 300, 300, 200);
            // mummy
            rect(650, 400, 200, 100);
            // greco roman man
            rect(1000, 400, 150, 100);
            // floor
            fill("#9999a1");
            rectMode(CENTER);
            rect(625, 600, 1400, 100);
            // sign
            fill(255);
            rect(1250, 400, 60, 60);
        } else {
            background(220);
                        //painting
            fill(255);
            rect(200, 300, 300, 200);
            // mummy
            rect(650, 400, 200, 100);
            // greco roman man
            rect(1000, 400, 150, 100);
            // floor
            fill("#9999a1");
            rectMode(CENTER);
            rect(625, 600, 1400, 100);
            // sign
            fill(255);
            rect(1250, 400, 60, 60);
        }
    }

    if (scene == 4) { // dinosaur fossils display
        if (day) {
        	background(255);
            // trex
            fill(0);
            rect(500, 200, 700, 100);
            // floor
            fill("#9999a1");
            rectMode(CENTER);
            rect(625, 600, 1400, 100);
            // sign
            fill(255);
            rect(1250, 400, 60, 60);
        } else {
            background(220);
                        // trex
            fill(0);
            rect(500, 200, 700, 100);
            // floor
            fill("#9999a1");
            rectMode(CENTER);
            rect(625, 600, 1400, 100);
            // sign
            fill(255);
            rect(1250, 400, 60, 60);
        }
    }

}



function mousePressed() { // controls the scene switch
    if (mouseX > 1220 && mouseX < 1280 && mouseY > 370 && mouseY < 430) { // only if you click the button
        scene = scene + 1;
        if (scene > 4) {
            scene = 1;
        }
    }
}

function keyPressed() { // controls the day and night switch
    if (day) { // boolean expression
        day = false;
    } else {
        day = true;
    }
}