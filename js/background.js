const images = ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg", "7.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.querySelector("#profile img");

bgImage.src = `img/${chosenImage}`;

var colors = ['rgb(255, 237, 255)', 'rgb(237, 237, 255)', 'rgb(255, 255, 237)', 'rgb(237, 237, 246)', 'rgb(237, 246, 255)', 'rgb(237, 255, 255)', 'rgb(246, 237, 246)', 'rgb(255, 237, 237)', 'rgb(246, 237, 237)', 'rgb(255, 246, 237)', 'rgb(255, 237, 246)', 'rgb(246, 237, 237)', 'rgb(237, 255, 246)', 'rgb(246, 237, 255)', 'rgb(237, 255, 237)', 'rgb(237, 246, 237)', 'rgb(237, 246, 246)', 'rgb(246, 246, 237)'];

function setCardColor() {
  var boxes = document.querySelectorAll(".todo-card");
  for (i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  }
}



setCardColor();