// Annie Chen - Final Project


var scene = 1; // scenes start with 1, the title screen
var day = false; // the daytime is default until KeyPressed

// paintings
let pearl;
let memory;
let scream;

// painting frames
let vertical;
let horizontal;

// terracotta
let terracotta;
// ancient egyptian
let casket;
// roman statue
var roman;


// dinosaurs
let dino;

// asychronously load heavy images
function preload() {
    pearl = loadImage('art/pearl.png');
    memory = loadImage('art/memory.jpeg');
    scream = loadImage('art/scream.jpeg');
    vertical = loadImage('art/vertical.png');
    horizontal = loadImage('art/horizontal.png');
    casket = loadImage('art/casket.png');
    roman = loadImage('art/roman.png');
    dino = loadImage('art/dino.png')
}

function setup() {
    createCanvas(1300, 600);
}

function draw() {

    if (scene == 1) { // title screen
        if (day) {
            noStroke();
            // sky
            background("#ade8f4");
            // grass
            fill("#38b000");
            rectMode(CENTER);
            rect(625, 600, 1400, 100);

            daysign(); // sign

        } else {
            noStroke();
            // sky
            background("#0e0e52");
            // grass
            fill("#0d2818");
            rectMode(CENTER);
            rect(625, 600, 1400, 100);

            daysign(); // sign
        }
    }

    if (scene == 2) { // paintings display
        if (day) {
            noStroke();
            // wall
            background("#ba181b"); // red
            // floor
            fill("#583101"); // brown
            rectMode(CENTER);
            rect(625, 600, 1400, 100);

            // Painting 1: The Girl With the Pearl Earring
            fill("#000000");
            rect(190, 260, 270, 360);
            imageMode(CENTER);
            image(pearl, 190, 270, 200, 286);
            // Painting 1: Frame
            image(vertical, 190, 260, 400, 533);

            // Painting 2: The Persistence of Memory
            image(memory, 600, 250, 300, 228);
            // Painting 2: Frame
            image(horizontal, 600, 250);

            // Painting 3: The Scream
            image(scream, 1020, 270, 300, 378);
            // Painting 3: Frame
            image(vertical, 1020, 270, 450, 600);

            daysign(); // sign

        } else {
            noStroke();
            // wall
            background("#660708"); // dark red
            // floor
            fill("#261a0c"); // dark brown
            rectMode(CENTER);
            rect(625, 600, 1400, 100);

            // Painting 1: The Girl With the Pearl Earring
            fill("#000000");
            rect(190, 260, 270, 360);
            imageMode(CENTER);
            image(pearl, 190, 270, 200, 286);
            // Painting 1: Frame
            image(vertical, 190, 260, 400, 533);

            // Painting 2: The Persistence of Memory
            image(memory, 600, 250, 300, 228);
            // Painting 2: Frame
            image(horizontal, 600, 250);

            // Painting 3: The Scream
            image(scream, 1020, 270, 300, 378);
            // Painting 3: Frame
            image(vertical, 1020, 270, 450, 600);

            daysign(); // sign
        }
    }

    if (scene == 3) { // statues/mummies display
        if (day) {
            noStroke();

            // wall
            background("#245501");

            // Terracotta Warrior
            fill(255);
            rect(200, 300, 300, 200);

            // Ancient Egyptian Casket
            image(casket, 650, 300, 400, 533);

            // Roman statue - Augustus of Prima Porta
            image(roman, 1000, 300, 400, 533);
            

            // floor
            fill("#583101");
            rectMode(CENTER);
            rect(625, 600, 1400, 100);

            daysign(); // sign

        } else {
            noStroke();
            // wall
            background("#143601");
            // Terracotta Warrior
            fill(255);
            rect(200, 300, 300, 200);

            // Ancient Egyptian Casket
            image(casket, 650, 300, 400, 533);

            // Roman statue - Augustus of Prima Porta
            image(roman, 1000, 300, 400, 533);
            

            // floor
            fill("#583101");
            rectMode(CENTER);
            rect(625, 600, 1400, 100);

            daysign(); // sign
        }
    }

    if (scene == 4) { // dinosaur fossils display
        if (day) {
            noStroke();
            // wall
            background("#0496ff");
            // trex
            image(dino, 650, 380, 800, 696);

            daysign(); // sign
        } else {
            noStroke();
            background("#0a2472");
            // trex
            fill(0);
            rect(500, 200, 700, 100);
            // floor
            fill("#261a0c");
            rectMode(CENTER);
            rect(625, 600, 1400, 100);
            daysign(); // sign

        }
    }

}

// functions

function daysign() {
    stroke(0);
    strokeWeight(5);
    line(1250, 430, 1250, 550); // sign stick
    fill(255); // white
    noStroke();
    rect(1250, 400, 60, 60); // sign itself
    // arrow on sign
    fill(0); // black
    triangle(1250, 380, 1250, 420, 1270, 400); // arrowhead
    stroke(0); // black
    strokeWeight(5); // thicker tail
    line(1230, 400, 1250, 400); // arrow tail
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