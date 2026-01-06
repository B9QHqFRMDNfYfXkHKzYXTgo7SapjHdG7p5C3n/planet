let planetImg;
let angle = 0;
let stars = [];

// Math for 3-hour rotation at 60fps
const rotationSpeed = (Math.PI * 2) / (3 * 60 * 60 * 60); 

function preload() {
  // This must match your filename exactly!
  planetImg = loadImage('planet.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  
  // Create stars for the background environment 🌌
  for (let i = 0; i < 400; i++) {
    stars.push({
      x: random(-2000, 2000),
      y: random(-2000, 2000),
      z: random(-2000, -500),
      size: random(1, 3)
    });
  }
}

function draw() {
  background(5, 5, 15); 

  // Draw the starfield environment
  noStroke();
  fill(255);
  for (let s of stars) {
    push();
    translate(s.x, s.y, s.z);
    circle(0, 0, s.size);
    pop();
  }

  // Cinematic Lighting 💡
  ambientLight(50);
  pointLight(200, 150, 255, -500, -500, 500);

  // Planet Rotation and Texture 🪐
  push();
  rotateY(angle); 
  texture(planetImg);
  sphere(200, 64, 64);
  pop();

  angle += rotationSpeed;
}