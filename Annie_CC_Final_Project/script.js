// Annie Chen - Final Project


var scene = 1; // scenes start with 1, the title screen
let day = true; // the daytime is default until KeyPressed
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
let leye;
let reye;
let lx = 160;
let rx = 240;
let ly = 248;
let ry = 248;
// persistence of time
let memory;
var warpmemory; // animation
// the scream
let scream;
let nightscream;
// painting frames
let vertical;
let horizontal;
let nightvertical;
let nighthorizontal;
// terracotta
let terracotta;
// ancient egyptian
let casket;
let mummy;
// roman statue
let dayroman;
var nightroman; // animation
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
    nightvertical = loadImage('art/nvertical.png');
    nighthorizontal = loadImage('art/nhorizontal.png');
    terracotta = loadImage('art/terracotta.png');
    casket = loadImage('art/casket.png');
    dayroman = loadImage('art/roman1.png');
    dino = loadImage('art/dino.png');
    closeupdino = loadImage('art/closeupdino.png');
    // animations
    warpmemory = loadAnimation('art/memory/memory1.png', 'art/memory/memory2.png', 'art/memory/memory3.png', 'art/memory/memory4.png', 'art/memory/memory5.png', 'art/memory/memory6.png', 'art/memory/memory7.png');
    nightscream = loadAnimation('art/scream/scream1.png', 'art/scream/scream2.png', 'art/scream/scream3.png', 'art/scream/scream4.png', 'art/scream/scream5.png', 'art/scream/scream6.png', 'art/scream/scream7.png', 'art/scream/scream8.png', 'art/scream/scream9.png');
    nightroman = loadAnimation('art/roman/roman.png', 'art/roman/roman2.png', 'art/roman/roman3.png');
    mummy = loadAnimation('art/mummy/open1.png', 'art/mummy/open2.png', 'art/mummy/open3.png', 'art/mummy/open4.png', 'art/mummy/open5.png', 'art/mummy/open6.png', 'art/mummy/open7.png');
}

function setup() {
    createCanvas(1300, 600);
    // stars
    for (var i = 0; i < 500; i++) { // 500 stars stored in array
        stars[i] = new Star(); // star class called in array
    }

    // animations 
    mummy.frameDelay = 10; // slow down speed of animation
    sprite = createSprite(650, 300);
    sprite.addAnimation("open", mummy);

    // time

    startTime = millis(); // start time
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
            background("#bfd8bd"); // teal
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
            image(pearl, 190, 270, 200, 286); // painting
            image(vertical, 190, 260, 400, 533); // frame

            // Painting 2: The Persistence of Memory
            image(memory, 600, 250, 300, 228); // painting
            image(horizontal, 600, 250); // frame

            // Painting 3: The Scream
            image(scream, 1020, 270, 300, 378); // painting
            image(vertical, 1020, 270, 450, 600); // frame

            daysign(1250, 500); // sign

        } else {

            noStroke();
            background("#384a37"); // dark 
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
            image(nightvertical, 190, 260, 400, 533); // frame
            // her pupils moving, following mouse
            fill(0); // pupil color = black
            ellipse(lx, ly, 6); // left pupil location depends on variables
            ellipse(rx, ry, 6); // right pupil location depends on variables
            ly = map(mouseY, 0, height, 244, 245); // left pupil- vertical distance (y) : mouseY has range from 0 - height, map it between 244-245
            ry = map(mouseY, 0, height, 248, 250); // right pupil- vertical distance (y) : mouseY has range from 0 - height, map it between 248-250
            lx = map(mouseX, 0, width, 115, 122); // left pupil - horizontal distance (x) : mouseX has range from 0 - width, map it between 115-122
            rx = map(mouseX, 0, width, 143, 155); // right pupil - horizontal distance (x) : mouseX has range from 0 - width, map it between 143-155

            // Painting 2: The Persistence of Memory
            animation(warpmemory, 600, 250);
            image(nighthorizontal, 600, 250); // frame

            // Painting 3: The Scream
            animation(nightscream, 1020, 270);
            image(nightvertical, 1020, 270, 450, 600); // frame

            nightsign(1250, 500); // sign
        }
    }

    if (scene == 3) { // statues/mummies display
        if (day) {
            noStroke();
            // wall
            background("#d5c6e0");
            stand(); // stands

            // Terracotta Warrior
            imageMode(CENTER);
            image(terracotta, 200, 280, 170, 498);

            // Ancient Egyptian Casket
            image(casket, 600, 280, 400, 533);

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
            background("#52455c");
            nstand(); // stands

            // Terracotta Warrior
            fill(255);
            imageMode(CENTER);
            image(terracotta, 200, 280, 170, 498);
            fill(255, 237, 71, 50);

            // Roman statue - Augustus of Prima Porta
            animation(nightroman, 1000, 300);
            fill(255, 237, 71, 50);

            // floor
            fill("#583101");
            rectMode(CENTER);
            rect(625, 600, 1400, 100);

            // Ancient Egyptian Casket - goes to front of screen, this is why its in front of floor
            drawSprites(); // animation
            fill(255, 237, 71, 50);


            nightsign(1250, 500); // sign
        }
    }

    if (scene == 4) { // dinosaur fossils display
        if (day) {
            noStroke();
            // wall
            background("#cfebdf");
            // trex
            imageMode(CENTER);
            image(dino, 650, 380, 800, 696);

            fill("#bc8a5f");
            rect(1200, 550, 100, 100); // sign stand

            daysign(1250, 500); // sign
        } else {


            noStroke();
            // wall
            background("#36453e");


            setTimeout(confusion1, 2000);

            // trex
            fill(0);
            imageMode(CENTER);
            image(closeupdino, 600, 380);


            fill(0);
            ellipseMode(CENTER);
            ellipse(1000, 600, 10, 10);

            fill("#000000");
            rect(1200, 550, 100, 100); // sign stand
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

function stand() {
    // terracotta
    rectMode(CENTER);
    fill("#ddb892");
    rect(200, 550, 250, 80); // stand shading
    fill("#fefae0");
    rect(200, 540, 250, 30); // stand	
    //mummy
    rectMode(CENTER);
    fill("#ddb892");
    rect(600, 550, 250, 80); // stand shading
    fill("#fefae0");
    rect(600, 540, 250, 30); // stand
    // roman 
    rectMode(CENTER);
    fill("#ddb892");
    rect(1000, 550, 250, 80); // stand shading
    fill("#fefae0");
    rect(1000, 540, 250, 30); // stand
}

function nstand() {
    // terracotta
    rectMode(CENTER);
    fill("#261a0c");
    rect(200, 550, 250, 80); // stand shading
    fill("#352713");
    rect(200, 540, 250, 30); // stand	
    //mummy
    rectMode(CENTER);
    fill("#261a0c");
    rect(600, 550, 250, 80); // stand shading
    fill("#352713");
    rect(600, 540, 250, 30); // stand
    // roman 
    rectMode(CENTER);
    fill("#261a0c");
    rect(1000, 550, 250, 80); // stand shading
    fill("#352713");
    rect(1000, 540, 250, 30); // stand	
}

function confusion1() {
    fill(255);
    textSize(50);
    text("?", 550, 300);

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