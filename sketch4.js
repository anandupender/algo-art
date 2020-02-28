var canvasWidth = screen.width;
var canvasHeight = screen.height;

var miniCanvasSize = 50;
var padding = 40;

var emotions = [
  "confused?",
  "loving?",
  "happy?",
  "sad?",
  "surprised?",
  "mad?",
  "disgusted?",
  "curious?",
  "embarassed?"
];

function setup() {
  frameRate(60);
  noLoop();
  createCanvas(canvasWidth, canvasHeight);
}

function createEyebrow(x0, y0) {
  //left eyebrow
  var x1 = x0 + Math.floor((Math.random() * miniCanvasSize) / 4);
  var x2 =
    x0 + Math.floor((Math.random() * miniCanvasSize) / 4) + miniCanvasSize / 4;
  var y1 = y0 + Math.floor((Math.random() * miniCanvasSize) / 6);
  var y2 =
    y0 + Math.floor((Math.random() * miniCanvasSize) / 6 + miniCanvasSize / 6);

  //right eyebrow
  var x3 =
    x0 + Math.floor((Math.random() * miniCanvasSize) / 4) + miniCanvasSize / 2;
  var x4 =
    x0 +
    Math.floor((Math.random() * miniCanvasSize) / 4) +
    (3 * miniCanvasSize) / 4;
  var y3 = y0 + Math.floor((Math.random() * miniCanvasSize) / 6);
  var y4 =
    y0 + Math.floor((Math.random() * miniCanvasSize) / 6 + miniCanvasSize / 6);

  strokeWeight(Math.floor(miniCanvasSize / 15));

  //randomize up or down slope
  if (Math.random() > 0.5) {
    line(x1, y1, x2, y2);
  } else {
    line(x1, y2, x2, y1);
  }
  if (Math.random() > 0.5) {
    line(x3, y3, x4, y4);
  } else {
    line(x3, y4, x4, y3);
  }
}

function createEyes(x0, y0) {
  var y =
    y0 + Math.floor((Math.random() * miniCanvasSize) / 3) + miniCanvasSize / 3;
  //left eye
  var x1 =
    x0 + Math.floor((Math.random() * miniCanvasSize) / 4) + miniCanvasSize / 8;
  var r1 =
    Math.floor((Math.random() * miniCanvasSize) / 4) + miniCanvasSize / 8;
  //right eye
  var x2 =
    x0 +
    Math.floor((Math.random() * miniCanvasSize) / 4) +
    (5 * miniCanvasSize) / 8;
  var r2 =
    Math.floor((Math.random() * miniCanvasSize) / 4) + miniCanvasSize / 8;

  strokeWeight(Math.floor(miniCanvasSize / 15));
  circle(x1, y, r1);
  circle(x2, y, r2);
}

function createRoundMouth(x0, y0) {
  var x =
    x0 + Math.floor((Math.random() * miniCanvasSize) / 8) + miniCanvasSize / 4;
  var y =
    y0 +
    Math.floor((Math.random() * miniCanvasSize) / 3) +
    (5 * miniCanvasSize) / 6;
  var r =
    Math.floor((Math.random() * miniCanvasSize) / 6) + miniCanvasSize / 12;

  var p1 = Math.floor(Math.random() * Math.PI * 2);
  var p2 = Math.floor(Math.random() * Math.PI * (3 / 4));

  //randomize smile or frown mouths
  if (Math.random() > 0.5) {
    arc(x, y, r, r, p1, p2);
  } else {
    arc(x, y, r, r, p2, p1);
  }
}

function createLineMouth(x0, y0) {
  var x1 = x0 + Math.floor((Math.random() * miniCanvasSize) / 4);
  var x2 =
    x0 + Math.floor((Math.random() * miniCanvasSize) / 4) + miniCanvasSize / 4;
  var y1 =
    y0 +
    Math.floor((Math.random() * miniCanvasSize) / 3) +
    (2 * miniCanvasSize) / 3;
  var y2 =
    y0 +
    Math.floor((Math.random() * miniCanvasSize) / 3) +
    (2 * miniCanvasSize) / 3;

  strokeWeight(Math.floor(miniCanvasSize / 15));
  line(x1, y1, x2, y2);
}

function writeWord(x0, y0) {
  textSize(12);
  text(
    emotions[Math.floor(Math.random() * emotions.length)],
    x0,
    y0 + miniCanvasSize * (9 / 6)
  );
}

function draw() {
  for (var yPos = 0; yPos < canvasHeight / (miniCanvasSize + padding); yPos++) {
    for (
      var xPos = 0;
      xPos < canvasWidth / (miniCanvasSize + padding);
      xPos++
    ) {
      var startX = xPos * (miniCanvasSize + padding);
      var startY = yPos * (miniCanvasSize + padding);
      createEyebrow(startX, startY);
      createEyes(startX, startY);
      if (Math.random() > 0.2) {
        createRoundMouth(startX, startY);
      } else {
        createLineMouth(startX, startY);
      }
      //   writeWord(startX, startY);
    }
  }
}
