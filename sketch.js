var canvasSize = screen.width;

var miniCanvasSize = 30;
var padding = 15;

function setup() {
  createCanvas(canvasSize, canvasSize);
  noLoop();
}

//draw single random line in each square
function lineArt1(xPos, yPos) {
  var startingXPos = Math.floor(Math.random() * miniCanvasSize + 1) + xPos;
  var startingYPos = Math.floor(Math.random() * miniCanvasSize + 1) + yPos;

  var endingXPos = Math.floor(Math.random() * miniCanvasSize + 1) + xPos;
  var endingYPos = Math.floor(Math.random() * miniCanvasSize + 1) + yPos;

  strokeWeight(3);
  line(startingXPos, startingYPos, endingXPos, endingYPos);
}

//helper
function recursiveDraw(
  initX,
  initY,
  startingXPos,
  startingYPos,
  numberOfLines,
  xOffset,
  yOffset,
  desireToCloseShape
) {
  var endingXPos = Math.floor(Math.random() * miniCanvasSize + 1) + xOffset;
  var endingYPos = Math.floor(Math.random() * miniCanvasSize + 1) + yOffset;

  strokeWeight(3);
  line(startingXPos, startingYPos, endingXPos, endingYPos);

  numberOfLines--;
  if (desireToCloseShape && numberOfLines == 1) {
    //final line
    line(endingXPos, endingYPos, initX, initY);
  } else if (numberOfLines > 0) {
    recursiveDraw(
      initX,
      initY,
      endingXPos,
      endingYPos,
      numberOfLines,
      xOffset,
      yOffset,
      desireToCloseShape
    );
  }
}

//random ability to continue the segment in a new direction
function lineArt2(xOffset, yOffset) {
  var numberOfLines = Math.floor(Math.random() * 3) + 1;
  var startingXPos = Math.floor(Math.random() * miniCanvasSize + 1) + xOffset;
  var startingYPos = Math.floor(Math.random() * miniCanvasSize + 1) + yOffset;

  recursiveDraw(
    startingXPos,
    startingYPos,
    startingXPos,
    startingYPos,
    numberOfLines,
    xOffset,
    yOffset,
    0
  );
}

var maxLines = 4;
var maxLinesToggle = true;

//add desire to close the lines and create a full shape
function lineArt3(xOffset, yOffset) {
  var numberOfLines = Math.floor(Math.random() * maxLines) + 1;
  var desireToCloseShape = 0;
  if (numberOfLines >= 3) {
    desireToCloseShape = Math.floor(Math.random() * 2);
  }
  var startingXPos = Math.floor(Math.random() * miniCanvasSize + 1) + xOffset;
  var startingYPos = Math.floor(Math.random() * miniCanvasSize + 1) + yOffset;

  recursiveDraw(
    startingXPos,
    startingYPos,
    startingXPos,
    startingYPos,
    numberOfLines,
    xOffset,
    yOffset,
    desireToCloseShape
  );
}

function draw() {
  var x = 0;
  var y = 0;

  clear();

  for (var xPos = 0; xPos < canvasSize / (miniCanvasSize + padding); xPos++) {
    for (var yPos = 0; yPos < canvasSize / (miniCanvasSize + padding); yPos++) {
      var xToSend = xPos * (miniCanvasSize + padding);
      var yToSend = yPos * (miniCanvasSize + padding);
      lineArt3(xToSend, yToSend);
    }
  }

  //   setTimeout(() => {
  //     draw();
  //     maxLines++;
  //   }, Math.random() * 750);
}
