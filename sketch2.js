var canvasWidth = screen.width;
var canvasHeight = screen.height;

var miniCanvasSize = 100;
var padding = 10;

var maxLines = 10;

var allData = [];

function generateArt(xOffset, yOffset) {
  var numberOfLines = Math.floor(Math.random() * maxLines) + 1;
  var desireToCloseShape = 0;
  if (numberOfLines >= 3) {
    desireToCloseShape = Math.floor(Math.random() * 2);
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
  createCanvas(canvasWidth, canvasHeight);
  //   noLoop();
  strokeWeight(1);

  var x = 0;
  var y = 0;

  for (var xPos = 0; xPos < canvasWidth / (miniCanvasSize + padding); xPos++) {
    for (
      var yPos = 0;
      yPos < canvasHeight / (miniCanvasSize + padding);
      yPos++
    ) {
      var startX = xPos * (miniCanvasSize + padding);
      var startY = yPos * (miniCanvasSize + padding);
      generateArt(startX, startY);
    }
  }
}

function drawMiniCanvas(points) {
  //draw lines!
  if (points[iterationRound + 1]) {
    line(
      points[iterationRound].x,
      points[iterationRound].y,
      lerp(points[iterationRound].x, points[iterationRound + 1].x, step),
      lerp(points[iterationRound].y, points[iterationRound + 1].y, step)
    );

    //does weird curve thing!
    // noFill();
    // curve(
    //   randomX1,
    //   randomY1,
    //   points[iterationRound].x,
    //   points[iterationRound].y,
    //   lerp(points[iterationRound].x, points[iterationRound + 1].x, step),
    //   lerp(points[iterationRound].y, points[iterationRound + 1].y, step),
    //   randomX2,
    //   randomY2
    // );
  }
}

var step = 0;
var iterationRound = 0;

//only used for curves
var randomX1 = 0;
var randomX2 = 0;
var randomY1 = 0;
var randomY2 = 0;

function draw() {
  for (var i = 0; i < allData.length; i++) {
    drawMiniCanvas(allData[i]);
  }

  if (step < 1) {
    step += 0.02;
  } else if (iterationRound < maxLines) {
    step = 0;
    iterationRound++;

    //only used for curves
    // randomX1 = Math.floor(Math.random() * canvasWidth);
    // randomY1 = Math.floor(Math.random() * canvasHeight);
    // randomX2 = Math.floor(Math.random() * canvasWidth);
    // randomY2 = Math.floor(Math.random() * canvasHeight);
  }
}
