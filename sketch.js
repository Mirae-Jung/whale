// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let ps;
let img;
let yoff = 0.0

// function preload() {
//   img = loadImage("data/dog.png");
// }

function setup() {
  createCanvas(640, 360);
  setFrameRate(60);
  ps = new ParticleSystem(createVector(width / 2, 50));
  // loadImage('data/dog.png', img => {
  //   image(img, 0, 0,100,100);
  //   });
  // image(img,mouseX,mouseY,10,10);
}

function draw() {
  background(204,255,255);
  fill(0,100,200);
  ellipse(mouseX,mouseY,60,35);
  triangle(mouseX+10,mouseY,mouseX+50,mouseY+20,mouseX+50,mouseY-20);

  // Apply gravity force to all Particles
  let gravity = createVector(0, 0.1);
  ps.applyForce(gravity);

  ps.addParticle();
  ps.run();

  fill(0,153,255,200);
  // 파형의 점들을 이용한 다각형 그리기
  beginShape();

  let xoff = 0; // 옵션 #1: 2D 노이즈
  // let xoff = yoff; // 옵션 #2: 1D 노이즈

  // 가로 픽셀들에 반복
  for (let x = 0; x <= width; x += 10) {
    // y값을 노이즈에 따라 계산, 다음에 매핑(map)하기

    // 옵션 #1: 2D 노이즈
    let y = map(noise(xoff, yoff), 0, 1, 200, 300);

    // 옵션 #2: 1D 노이즈
    // let y = map(noise(xoff), 0, 1, 200,300);

    // 버텍스 설정하기
    vertex(x, y);
    // 노이즈의 x차원 증가하기
    xoff += 0.05;
  }
  // 노이즈의 y차원 증가하기
  yoff += 0.01;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
}
