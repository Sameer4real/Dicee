function getRandomInt() {
  return Math.floor(Math.random() * (6 - 1 + 1)) + 1;
}

// --Getting the elements--
var img1 = document.querySelector(".img1");
var img2 = document.querySelector(".img2");
var mainHeader = document.querySelector("h1");

// --Assign a random image to each one
var randomNumber1 = getRandomInt();
var randomNumber2 = getRandomInt();
var randomImage = "/images/dice" + randomNumber1 + ".png";
var randomImage2 = "/images/dice" + randomNumber2 + ".png";
img1.setAttribute("src", randomImage);
img2.setAttribute("src", randomImage2);

// Changing the mainHeader content

if (randomImage === randomImage2) {
  mainHeader.innerText = "Draw!";
} else if (randomNumber1 > randomNumber2) {
  mainHeader.innerText = "🎉 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  mainHeader.innerText = "Player 2 Wins! 🎉";
} else {
  mainHeader.innerText = "Refresh Me!";
}
