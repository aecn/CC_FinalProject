// Annie Chen - Final Project


// eye inspo: https://p5js.org/examples/math-arctangent.html
var scene = 1; // scenes start with 1, the title screen
var day = false; // the daytime is default until KeyPressed
var sprite;
// museum
let daymuseum;
let nightmuseum;
// stars
var stars = []; // array storing stars
// paintings
// pearl
let pearl;
let nightpearl;
// persistence of time
let memory;
var warpmemory;
// the scream
let scream;
// painting frames
let vertical;
let horizontal;
// terracotta
let terracotta;
// ancient egyptian
let casket;
let mummy;
// roman statue
let dayroman;
var nightroman;
// dinosaurs
let dino;
let closeupdino;

// asychronously loading of heavy images
function preload() {
    // images
    daymuseum = loadImage('art/museum.png');
    nightmuseum = loadImage('art/nightmuseum.png');
    pearl = loadImage('art/pearl.png');
    nightpearl = loadImage('art/nightpearl.png');
    memory = loadImage('art/memory.jpeg');
    scream = loadImage('art/scream.jpeg');
    vertical = loadImage('art/vertical.png');
    horizontal = loadImage('art/horizontal.png');
    terracotta = loadImage('art/terracotta.png');
    casket = loadImage('art/casket.png');
    dayroman = loadImage('art/roman1.png');
    dino = loadImage('art/dino.png');
    closeupdino = loadImage('art/closeupdino.png');
    // animations
    warpmemory = loadAnimation('art/memory/memory1.png', 'art/memory/memory2.png', 'art/memory/memory3.png', 'art/memory/memory4.png', 'art/memory/memory5.png', 'art/memory/memory6.png', 'art/memory/memory7.png');
    nightroman = loadAnimation('art/roman/roman.png', 'art/roman/roman2.png', 'art/roman/roman3.png');
    mummy = loadAnimation('art/mummy/open1.png', 'art/mummy/open2.png', 'art/mummy/open3.png', 'art/mummy/open4.png', 'art/mummy/open5.png', 'art/mummy/open6.png', 'art/mummy/open7.png');
}

function setup() {
    createCanvas(1300, 600);
    // stars
    for (var i = 0; i < 500; i++) { // 500 stars stored in array
        stars[i] = new Star(); // star class called in array
    }

    mummy.frameDelay = 10; // slow down speed of animation
    sprite = createSprite(650, 300);
    sprite.addAnimation("open", mummy);
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
            // building
            imageMode(CENTER); // all images in sketch use center points
            image(daymuseum, 650, 280, 1000, 750);
            daysign(1250, 500); // sign

        } else {
            noStroke();
            // sky
            background("#0e0e52");
            for (var i = 0; i < stars.length; i++) { // fetch whole array of stars
                stars[i].display(); // array of stars is displayed
            }
            // grass
            fill("#0d2818");
            rectMode(CENTER);
            rect(625, 600, 1400, 100);
            // building
            imageMode(CENTER);
            image(nightmuseum, 650, 280, 1000, 750);
            nightsign(1250, 500); // sign
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
            fill("#4c3416");
            bench(600, 500); // bench
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

            daysign(1250, 500); // sign

        } else {
            noStroke();
            background("#660708"); // dark red wall
            fill("#40250b"); // dark brown
            rectMode(CENTER);
            rect(625, 600, 1400, 100); // floor
            fill(0);
            bench(600, 500); // bench

            // Painting 1: The Girl With the Pearl Earring
            fill("#000000");
            rect(190, 260, 270, 360);
            imageMode(CENTER);
            image(nightpearl, 190, 270, 200, 286); // night ver


            image(vertical, 190, 260, 400, 533); // frame
            fill(255, 237, 71, 50);
            triangle(190, 0, 50, 600, 300, 600); // light

            // Painting 2: The Persistence of Memory
            animation(warpmemory, 600, 250);
            image(horizontal, 600, 250); // frame
            fill(255, 237, 71, 50);
            triangle(600, 0, 450, 600, 750, 600); // light

            // Painting 3: The Scream
            image(scream, 1020, 270, 300, 378);
            image(vertical, 1020, 270, 450, 600);
            fill(255, 237, 71, 50);
            triangle(1020, 0, 850, 600, 1200, 600); // light

            nightsign(1250, 500); // sign
        }
    }

    if (scene == 3) { // statues/mummies display
        if (day) {
            noStroke();

            // wall
            background("#245501");

            // Terracotta Warrior
            fill(255);
            imageMode(CENTER);
            image(terracotta, 200, 300, 170, 498);

            // Ancient Egyptian Casket
            image(casket, 650, 300, 400, 533);

            // Roman statue - Augustus of Prima Porta
            image(dayroman, 1000, 300, 400, 533);


            // floor
            fill("#583101");
            rectMode(CENTER);
            rect(625, 600, 1400, 100);

            daysign(1250, 500); // sign

        } else {
            noStroke();
            // wall
            background("#143601");
            // Terracotta Warrior
            fill(255);
            imageMode(CENTER);
            image(terracotta, 200, 300, 170, 498);
            fill(255, 237, 71, 50);
            triangle(190, 0, 50, 600, 300, 600); // light

            // Ancient Egyptian Casket
            drawSprites();
            fill(255, 237, 71, 50);
            triangle(600, 0, 450, 600, 750, 600); // light


            // Roman statue - Augustus of Prima Porta
            animation(nightroman, 1000, 300);
            fill(255, 237, 71, 50);
            triangle(1020, 0, 850, 600, 1200, 600); // light

            // floor
            fill("#583101");
            rectMode(CENTER);
            rect(625, 600, 1400, 100);

            nightsign(1250, 500); // sign
        }
    }

    if (scene == 4) { // dinosaur fossils display
        if (day) {
            noStroke();
            // wall
            background("#0496ff");
            // trex
            imageMode(CENTER);
            image(dino, 650, 380, 800, 696);

            daysign(1250, 500); // sign
        } else {
            noStroke();
            // wall
            background("#0a2472");
            // trex
            fill(0);
            rect(500, 200, 700, 100);
            imageMode(CENTER);
            image(closeupdino, 650, 380);
            nightsign(1250, 500); // sign

        }
    }
}

// functions

function daysign(posX, posY) {
    strokeWeight(5);
    stroke("#5c3208");
    line(1250, 430, 1250, 550); // sign stick
    fill(255); // white
    noStroke();
    rectMode(CENTER);
    rect(1250, 400, 60, 60); // sign itself
    // arrow on sign
    fill("#5c3208"); // black
    triangle(1250, 380, 1250, 420, 1270, 400); // arrowhead
    stroke("#5c3208"); // black
    strokeWeight(5); // thicker tail
    line(1230, 400, 1250, 400); // arrow tail
}

function nightsign(posX, posY) {
    stroke(0);
    strokeWeight(5);
    line(1250, 430, 1250, 550); // sign stick
    fill("#7b95d4"); // blue
    noStroke();
    rectMode(CENTER);
    rect(1250, 400, 60, 60); // sign itself
    // arrow on sign
    fill(0); // black
    triangle(1250, 380, 1250, 420, 1270, 400); // arrowhead
    stroke(0); // black
    strokeWeight(5); // thicker tail
    line(1230, 400, 1250, 400); // arrow tail	
}

function bench(posX, posY) {
    // bench
    rect(600, 500, 400, 20); // seat
    rect(410, 530, 10, 50); // left leg
    rect(790, 530, 10, 50); // right leg        
    fill("#0c0903");
    rect(410, 600, 20, 100); // left leg shadow
    rect(790, 600, 20, 100); // right leg shadow
    rect(600, 600, 400, 20); // seat shadow
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