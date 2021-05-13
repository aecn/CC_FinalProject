 // Annie Chen - Final Project

 // GENERAL CONTROLS
 var setting = 1; // starts with setting 1: the museum exterior
 let day = true; // the daytime is default until any key is pressed
 // MUSEUM BUILDING
 let daymuseum; // image of museum in the day
 var color1, color2; // colors for gradient sky
 let nightmuseum; // image of museum in the night
 var stars = []; // array storing stars
 var nightsound; // night time noises
 let dayfloor; // daytime wood floors
 let nightfloor; // night time wood floors
 let light; // image of light
 var flashlight; // user's flashlight controlled by mouse
 // PAINTINGS
 // The Girl With the Pearl Earring
 let pearl; // image of painting in the day
 let nightpearl; // image of painting in the night
 let leye; // left eye
 let reye; // right eye
 let lx = 160; // left pupil horizontal location
 let rx = 240; // right pupil horizontal location
 let ly = 248; // left pupil vertical location
 let ry = 248; // right pupil vertical location
 // The Persistence of Memory
 let memory; // image of painting in the day
 var warpmemory; // animation of painting in the night
 var clocksound; // clock noise
 // The Scream
 let scream; // image of painting in the day
 var nightscream; // animation of painting in the night
 var screamsound; // screaming sfx
 // PAINTING FRAMES
 let vertical; // image of vertical frame in the day
 let horizontal; // image of horizontal frame in the day
 let nightvertical; // image of vertical frame in the night
 let nighthorizontal; // image of horizontal frame in the night
 // terracotta warrior statue
 let terracotta; // image of terracotta warrior in the day
 var nightc; // animation of the warrior in the night
 // ancient egyptian casket + surprise mummy
 let casket; // image of casket in the day
 var mummy; // animation of mummy coming out of the casket in the night
 var casketsound; // sound of casket opening
 let mist = []; // mist is an array of particles
 let num = 500; // number of particles
 // roman statue (Augustus of Prima Porta)
 let dayroman; // image of statue in the day
 var nightroman; // animation of statue in the night
 var romanspeech;
 // dinosaurs
 let dino; // image of dinosaur display in the day
 var daybarrier; // one barrier section
 var nightbarrier; // one barrier section
 var dinosound; // dinosaur roar
 var tick; // sound of question marks
 var surprise; // surprise noise
 var currtime; // current time
 var prevtime; // previous time
 var interval; // time interval
 var scene; // diff. scenes of dino
 var posX; // position x for dino's movement
 var posY; // position y for dino's movement
 var speedX; // x speed of dino's movement
 var speedY; // y speed of dino's movement
 let x_, y_; // x & y of starting position of dino

 // asychronously loading of heavy images
 function preload() {
     // IMAGES
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
     closeupdino2 = loadImage('art/closeupdino2.png');
     dayfloor = loadImage('art/floor.jpeg');
     nightfloor = loadImage('art/nightfloor.jpg');
     daybarrier = loadImage('art/barrier.png');
     nightbarrier = loadImage('art/nightbarrier.png');
     light = loadImage('art/light.png');
     // ANIMATIONS
     warpmemory = loadAnimation('art/memory/memory1.png', 'art/memory/memory2.png', 'art/memory/memory3.png', 'art/memory/memory4.png', 'art/memory/memory5.png', 'art/memory/memory6.png', 'art/memory/memory7.png');
     nightscream = loadAnimation('art/scream/scream1.png', 'art/scream/scream2.png', 'art/scream/scream3.png', 'art/scream/scream4.png', 'art/scream/scream5.png', 'art/scream/scream6.png', 'art/scream/scream7.png', 'art/scream/scream8.png', 'art/scream/scream9.png');
     nightroman = loadAnimation('art/roman/roman.png', 'art/roman/roman2.png', 'art/roman/roman3.png');
     mummy = loadAnimation('art/mummy/open1.png', 'art/mummy/open2.png', 'art/mummy/open3.png', 'art/mummy/open4.png', 'art/mummy/open5.png', 'art/mummy/open6.png', 'art/mummy/open7.png');
     nightc = loadAnimation('art/terracotta/terracotta1.png', 'art/terracotta/terracotta2.png', 'art/terracotta/terracotta3.png', 'art/terracotta/terracotta4.png', 'art/terracotta/terracotta5.png', 'art/terracotta/terracotta6.png', 'art/terracotta/terracotta7.png');
     // SOUNDS
     nightsound = loadSound('nightsound.mp3');
     clocksound = loadSound('clocksound.mp3');
     screamsound = loadSound('screamsound.mp3');
     casketsound = loadSound('casket.mp3');
     romanspeech = loadSound('romanspeech.mp3');
     dinosound = loadSound('dinosound.mp3');
     mummysound = loadSound('mummysound.mp3');
     tick1 = loadSound('tick1.mp3');
     tick2 = loadSound('tick2.mp3');
     tick3 = loadSound('tick3.mp3');
     surprise = loadSound('surprise.mp3');
 }

 function setup() {
     createCanvas(1300, 600);
     // stars
     for (var i = 0; i < 500; i++) { // 500 stars stored in array
         stars[i] = new Star(); // star class called in array
     }
     // animation sprites
     warpmemory.frameDelay = 12; // slow down speed of animations
     sprite1 = createSprite(600, 250); // Dali
     sprite1.addAnimation("memory", warpmemory);
     nightscream.frameDelay = 10;
     sprite2 = createSprite(1020, 270);
     sprite2.addAnimation("scream", nightscream);
     mummy.frameDelay = 30; // super slow
     sprite3 = createSprite(650, 300); // Mummy
     sprite3.addAnimation("open", mummy);
     nightc.frameDelay = 15;
     sprite4 = createSprite(160, 280);
     sprite4.addAnimation("terracotta", nightc);
     // timed scenes
     interval = 3000; // set time interval = 1 second
     prevtime = 0; // prev time starts at 0
     scene = 1; // scene starts at 1
     // gradient
     color1 = color("#ade8f4"); // light blue
     color2 = color("#def5fa"); // even lighter blue
     // dino movement
     posX = 1000; // starting position, x
     posY = 800; // starting postion, y
     speedX = -10; // fast speed of 10. negative because it is going left
     speedY = -10; // fast speed of 10. negative because it is going up
     // dino jitter movement
     x_ = 600;
     y_ = 380;
     // scary Egyptian mist
     for (let i = 0; i < num; i++) {
         let locX = 580; // starting x point of mist
         let locY = 900; // starting y point of mist
         let rad1 = random(5, 25);
         let p = new Particle(locX, locY, rad1); // call the class w/ parameters
         mist[i] = p; // array
     }
 }

 function draw() {
     if (setting == 1) { // title screen
         if (day) {
             scene1day();
         } else {
             scene1night();
         }
     }

     if (setting == 2) { // paintings display
         if (day) {
             noStroke();
             // wall
             background("#bfd8bd"); // teal
             // floor
             imageMode(CENTER);
             image(dayfloor, 625, 600);
             fill("#4c3416");
             rectMode(CENTER);
             bench(600, 500); // bench
             // Painting 1: The Girl With the Pearl Earring
             fill("#000000");
             rectMode(CENTER);
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

             loadPixels();

             noStroke();
             background("#384a37"); // dark 
             //fill("#40250b"); // dark brown
             //rect(625, 600, 1400, 100); // floor
             imageMode(CENTER);
             image(nightfloor, 625, 600);
             rectMode(CENTER);
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
             drawSprite(sprite1);
             image(nighthorizontal, 600, 250); // frame

             // Painting 3: The Scream
             drawSprite(sprite2);
             image(nightvertical, 1020, 270, 450, 600); // frame
             nightsign(1250, 500); // sign


             useFlashlight();

             if (mouseX < 240) {
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
             } else if (mouseX > 500 && mouseX < 700) {
                 // Painting 2: The Persistence of Memory
                 drawSprite(sprite1);
                 image(nighthorizontal, 600, 250); // frame

             } else if (mouseX > 950) {
                 drawSprite(sprite2);
                 image(nightvertical, 1020, 270, 450, 600); // frame
             }


         }
     }

     if (setting == 3) { // statues/mummies display
         if (day) {
             noStroke();
             // wall
             background("#d5c6e0");
             stand(); // stands

             // Terracotta Warrior
             imageMode(CENTER);
             image(terracotta, 160, 280, 344, 500);

             // Ancient Egyptian Casket
             image(casket, 600, 280, 400, 533);

             // Roman statue - Augustus of Prima Porta
             image(dayroman, 1000, 300, 400, 533);

             // floor
             imageMode(CENTER);
             image(dayfloor, 625, 600);
             rectMode(CENTER);


             daysign(1250, 500); // sign

         } else {
             noStroke();
             // wall
             background("#52455c");
             nstand(); // stands

             // Terracotta Warrior
             fill(255);
             drawSprite(sprite4);

             // Roman statue - Augustus of Prima Porta
             animation(nightroman, 1000, 300);
             fill(255, 237, 71, 50);

             // floor
             imageMode(CENTER);
             image(nightfloor, 625, 600);
             rectMode(CENTER);

             evilmist(); // magical mist of the Egyptian tomb

             // Ancient Egyptian Casket - goes to front of screen, this is why its in front of floor
             drawSprite(sprite3); // animation

             useFlashlight();

             if (mouseX < 180) {
                 // Terracotta Warrior
                 fill(255);
                 drawSprite(sprite4);
             } else if (mouseX > 500 && mouseX < 700) {
                 drawSprite(sprite3); // animation
             } else if (mouseX > 850) {
                 // Roman statue - Augustus of Prima Porta
                 animation(nightroman, 1000, 300);
                 fill(255, 237, 71, 50);
             }

             nightsign(1250, 500); // sign
         }
     }

     if (setting == 4) { // dinosaur fossils display
         if (day) {
             noStroke();
             // wall
             background("#cfebdf");
             // trex
             imageMode(CENTER);
             image(dino, 650, 380, 800, 696);
             barrier1(); // barrier
             fill("#bc8a5f");
             rectMode(CORNER);
             rect(1200, 550, 100, 100); // sign stand

             daysign(1250, 500); // sign
         } else {

             sceneManagement();

             if (scene == 1) { // scene 1 - no sign of dino anymore
                 // wall
                 background("#36453e");
                 fill(0);
                 barrier2();
                 rect(1200, 550, 100, 100); // sign stand
                 nightsign(1250, 500); // sign
             }
             if (scene == 2) { // scene 2 - confusion - where did it go? 1 question mark
                 noStroke();
                 // wall
                 background("#36453e");
                 barrier2();
                 fill(255);
                 textSize(50);
                 textFont('serif');
                 text('?', 650, 300); // question mark
                 fill(0);
                 rect(1200, 550, 100, 100); // sign stand
                 nightsign(1250, 500); // sign
             }

             if (scene == 3) { // scene 3 - confusion. 2 question marks
                 noStroke();
                 // wall
                 background("#36453e");
                 barrier2();
                 fill(255);
                 textSize(50);
                 textFont('serif');
                 text('?', 650, 300); // question mark
                 text('??', 200, 200);
                 fill(0);
                 rect(1200, 550, 100, 100); // sign stand
                 nightsign(1250, 500); // sign
             }

             if (scene == 4) { // scene 4 - cconfusion. 3 question marks
                 noStroke();
                 // wall
                 background("#36453e");
                 barrier2();
                 fill(255);
                 textSize(50);
                 textFont('serif');
                 text('?', 650, 300);
                 text('??', 200, 200);
                 text('???', 1000, 250); // question mark
                 fill(0);
                 rect(1200, 550, 100, 100); // sign stand
                 nightsign(1250, 500); // sign
             }

             if (scene == 5) { // scene 5 - dino comes into view
                 noStroke();
                 // wall
                 background("#36453e");
                 barrier2();
                 // trex
                 movingdino1(); // dino
                 fill(0);
                 rect(1200, 550, 100, 100); // sign stand
                 nightsign(1250, 500); // sign
             }

             if (scene == 6) { // scene 6 - dino roars
                 background("#0F1412");
                 barrier2();
                 imageMode(CENTER);
                 image(closeupdino2, x_, y_); // dino's position varies; he is shaking
                 x_ = x_ + random(-10, 10); // shaking movement of dino
                 fill(0);
                 rect(1200, 550, 100, 100); // sign stand
                 nightsign(1250, 500); // sign
             }

             if (scene == 7) { // scene 7 - calm again
                 background("#000000");
                 barrier2();
                 movingdino2(); // dino
                 fill(0);
                 rect(1200, 550, 100, 100); // sign stand
                 nightsign(1250, 500); // sign
             }

             // if (scene > 7) scene = 1; // scene only runs once to prevent repetition/confusion


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

 function nightsign(posX, posY) { // scenes 1 - 3
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

 function scene1day() {
     noStroke();
     // sky
     //background("#ade8f4");
     skygradient(color1, color2);
     // grass
     fill("#38b000");
     rectMode(CENTER);
     rect(625, 600, 1400, 100);
     // building
     imageMode(CENTER); // all images in sketch use center points
     image(daymuseum, 650, 280, 1000, 750);
     daysign(1250, 500); // sign
 }

 function skygradient(color1, color2) {
 	// inspired by p5js reference: https://p5js.org/examples/color-linear-gradient.html
     noFill();
     for (var y = 0; y < 600; y++) { // start at the top of sktech, ends at the bottom. add color
         var inter = map(y, 0, height, 0, 1);
         var blend = lerpColor(color1, color2, inter); // blends colors together
         stroke(blend);
         line(0, y, width, y);
     }
 }

 function scene1night() {
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

 function movingdino1() {
     posX = posX + speedX; // position x's speed
     posY = posY + speedY; // position y's speed
     imageMode(CENTER);
     image(closeupdino, posX, posY); // location depends on x,y speed

     if (posX < 600) { // once dino reaches the center = stops.
         speedX = 0;
         speedY = 0;
     }
 }

 function evilmist() {
     for (let i = 0; i < mist.length; i++) {
         mist[i].display();
         mist[i].update();

         if (mist[i].radius > 100) {
             mist.splice(i, 1);
         }
     }

     let locX = 580;
     let locY = 900;
     let rad1 = random(5, 15);
     let p = new Particle(locX, locY, rad1);
     mist.push(p);
 }

 function movingdino2() {
     posX = posX + speedX;
     posY = posY + speedY;
     imageMode(CENTER);
     image(closeupdino, posX, posY);

     if (posX < 600) { // goes back down again / calms down
         speedX = 10; // speed is the same as original except positive
         speedY = 10;
     }
 }

 function useFlashlight() {
     fill(12, 12, 23, 150); // dark navy/black lighting to represent night
     rectMode(CENTER);
     rect(650, 300, 1300, 600);
     noStroke();
     flashlight = image(light, mouseX, mouseY);
 }

 function barrier1() { // for loop for repetive images
     for (let x = 150; x < 1100; x += 110) { // x starts @ 150, stops at 1100. Adds 110
         for (let y = 550; y < height; y += 110) { // y starts @ 550, stops at height. Adds 110
             //rectMode(CENTER);
             //rect(x, y, 150, 150); // tested it out with rects first 
             imageMode(CENTER);
             image(daybarrier, x, y); // day image
         }
     }
 }

 function barrier2() { // same thing as barrier1, just the night ver.
     for (let x = 150; x < 1100; x += 110) {
         for (let y = 550; y < height; y += 110) {
             //rectMode(CENTER);
             //rect(x, y, 150, 150);
             imageMode(CENTER);
             image(nightbarrier, x, y); // night image
         }
     }
 }

 function sceneManagement() {
     // inspired by in class code: timeControl_example_LadyK

     currtime = millis(); // checking the time
     if ((currtime - prevtime > interval / 2) && (scene == 1)) { // short interval - divided by 2. 1.5 sec.
         prevtime = currtime; // update previous time with what was stored in current time
         scene++; // proceed to next scene
         tick1.play(); // sound effect
     } else if ((currtime - prevtime > (interval / 2)) && (scene == 2)) { // short interval - divided by 2. 1.5 sec.
         prevtime = currtime; // update previous time with what was stored in current time
         tick2.play(); // sound effect
         scene++; // proceed to next scene
     } else if ((currtime - prevtime > (interval / 2)) && (scene == 3)) { // short interval - divided by 2. 1.5 sec.
         prevtime = currtime; // update previous time with what was stored in current time
         tick3.play(); // sound effect
         scene++; // proceed to next scene
     } else if ((currtime - prevtime > (interval)) && (scene == 4)) { // normal interval
         prevtime = currtime; // update previous time with what was stored in current time
         scene++; // proceed to next scene
         surprise.play(); // suspenseful sound effect
     } else if ((currtime - prevtime > (interval / 3)) && (scene == 5)) { // short interval - divided by 3. 1 sec.
         prevtime = currtime; // update previous time with what was stored in current time
         scene++; // proceed to next scene
         dinosound.play(); // dino roar!
     } else if ((currtime - prevtime > (interval)) && (scene == 6)) { // normal interval
         prevtime = currtime; // update previous time with what was stored in current time
         scene++; // proceed to next scene
     } else if ((currtime - prevtime > (interval / 2)) && (scene == 7)) { // short interval - divided by 2. 1.5 sec.
         prevtime = currtime; // update previous time with what was stored in current time
         scene++; // proceed to next scene
     }
 }

 function mousePressed() { // controls the setting switch
     if (mouseX > 1220 && mouseX < 1280 && mouseY > 370 && mouseY < 430) { // only if you click the button
         setting = setting + 1;
         if (setting > 4) {
             setting = 1;
         }
     }
 }

 function keyPressed() {
     if (day) { // boolean expression - controls day & night switch
         day = false;
     } else {
         day = true;
     }

     if (setting == 1 && day == true) { // setting 1 day time
         nightsound.stop();
     } else if (setting == 1 && day == false) { // setting 1 night time
         nightsound.play();
         nightsound.loop();
     }

     if (setting == 2 && day == true) { // setting 2 day time
         nightsound.stop(); // no night sounds from setting 1
         screamsound.stop();
         clocksound.stop();
     } else if (setting == 2 && day == false) { // setting 2 night time
         nightsound.stop();
         screamsound.play(); // scream
         screamsound.loop();
         clocksound.play(); // clock
         clocksound.loop();
     }

     if (setting == 3 && day == true) { // setting 3 day time
         screamsound.stop(); // no sound from setting 2
         clocksound.stop(); // no sound from setting 2
         romanspeech.stop();
         casketsound.stop();
         mummysound.stop();
     } else if (setting == 3 && day == false) { // setting 3 night time
         screamsound.stop(); // no sound from setting 2
         clocksound.stop(); // no sound from setting 2
         romanspeech.setVolume(0.5);
         romanspeech.play();
         casketsound.play();
         mummysound.play();
         mummysound.loop();
     }

     if (setting == 4) {
         romanspeech.stop();
         casketsound.stop();
         mummysound.stop();
     }

 }