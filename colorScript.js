var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var response = document.getElementById("message");
var resetButton = document.getElementById("reset");
var heading = document.getElementById("welcome");
var scoreboard = document.getElementById("scoreboard");
var score = document.getElementById("score");
var points;
var firstTurn;

init();

function init() {
  points = 0;
  firstTurn = true;
  for (var i = 0; i < squares.length; ++i) {
    squares[i].addEventListener("click", function() {
      if (this.style.backgroundColor === pickedColor) {
        if (firstTurn) {
          points += 1;
          score.textContent = "Score: " + points;
          firstTurn = false;
        }
        response.textContent = "Correct!";
        changeColors(pickedColor);
        resetButton.textContent = "Play again"
      }
      else {
        response.textContent = "Try again";
        this.style.backgroundColor = "#2E231D";
        firstTurn = false;
        points = 0;
        score.textContent = "Score: " + points;
        firstTurn = false;
      }
    });
  }
  reset();
}

resetButton.addEventListener("click", function() {
  reset();
});

function reset() {
  colors = generateRandomColors(6);
  pickedColor = randomColor(colors);
  firstTurn = true;
  score.textContent = "Score: " + points;
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; ++i) {
    squares[i].style.backgroundColor = colors[i];
  }
  heading.style.background = "#00496A";
  scoreboard.style.background = "#00496A";
  response.textContent = "Choose";
  resetButton.textContent = "New Colors"
}

function changeColors(color) {
  for (var i = 0; i < squares.length; ++i) {
    squares[i].style.backgroundColor = color;
  }
  heading.style.background = color;
  scoreboard.style.background = color;
}

function randomColor(colors) {
  return colors[Math.floor(Math.random() * 6)];
}

function generateRandomColors(size) {
  var colors = [];
  for (var i = 0; i < size; ++i) {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var rgb = "rgb(" + red + ", " + green + ", " + blue + ")";
    colors.push(rgb);
  }
  return colors;
}
