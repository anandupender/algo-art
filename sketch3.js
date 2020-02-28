var canvasWidth = screen.width;
var canvasHeight = screen.height;

var miniCanvasSize = 60;
var padding = 15;

var maxLines = 6;

var allData = [];

function generateArt(xOffset, yOffset) {
  var numberOfLines = Math.floor(Math.random() * maxLines) + 1;
  var desireToCloseShape = 0;
  if (numberOfLines >= 3) {
    // desireToCloseShape = Math.floor(Math.random() * 2);
    desireToCloseShape = 1;
  }

  var tempPointsCollection = [];
  for (var numLines = 0; numLines < numberOfLines + 1; numLines++) {
    var randomX = 0;
    var randomY = 0;
    if (desireToCloseShape && numLines == numberOfLines) {
      //make last one the first one if desireToClose
      randomX = tempPointsCollection[0].x;
      randomY = tempPointsCollection[0].y;
    } else {
      randomX = Math.floor(Math.random() * miniCanvasSize + 1) + xOffset;
      randomY = Math.floor(Math.random() * miniCanvasSize + 1) + yOffset;
    }
    tempPointsCollection.push({ x: randomX, y: randomY });
  }
  allData.push(tempPointsCollection);
}

function setup() {
  frameRate(60);
  createCanvas(canvasWidth, canvasHeight);
  //   noLoop();
  strokeWeight(2);

  var x = 0;
  var y = 0;

  for (var yPos = 0; yPos < canvasHeight / (miniCanvasSize + padding); yPos++) {
    for (
      var xPos = 0;
      xPos < canvasWidth / (miniCanvasSize + padding);
      xPos++
    ) {
      var startX = xPos * (miniCanvasSize + padding);
      var startY = yPos * (miniCanvasSize + padding);
      generateArt(startX, startY);
    }
  }
}

function drawMiniCanvas(points) {
  line(
    points[iterationRound].x,
    points[iterationRound].y,
    lerp(points[iterationRound].x, points[iterationRound + 1].x, step),
    lerp(points[iterationRound].y, points[iterationRound + 1].y, step)
  );
}

var step = 0;
let stepSpeed = 0.5;
var iterationRound = 0;
var newRandom = 0.1;

var miniCanvasCounter = 0;

function draw() {
  drawMiniCanvas(allData[miniCanvasCounter]);

  if (step < 1) {
    // step += stepSpeed;
    if (step % 0.1 == 0) {
      newRandom = Math.random() * 0.1 + 0.01;
    }
    step += newRandom;
  } else {
    if (iterationRound + 2 < allData[miniCanvasCounter].length) {
      iterationRound++;
      step = 0;
    } else {
      //move onto next canvas
      // drawCircle();
      drawMiniCanvas(allData[miniCanvasCounter]);

      iterationRound = 0;
      miniCanvasCounter++;
      step = 0;
    }
  }
}
