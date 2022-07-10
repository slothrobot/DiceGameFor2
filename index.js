
var rn1 = Math.random();
var randomNumber1 = Math.floor(rn1 * 6) + 1;
var p1 = "images/dice" + randomNumber1 + ".png";

var rn2 = Math.random();
var randomNumber2 = Math.floor(rn2 * 6) + 1;
var p2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src", p1);
document.querySelector(".img2").setAttribute("src", p2);

if(p1 >= p2){
  if(p1 > p2){
  document.querySelector("h1").innerHTML = "&#128681 Plaer 1 Wins!";
}else{
  document.querySelector("h1").innerHTML = "Draw!";
}}
else{
  document.querySelector("h1").innerHTML = "Player 2 Wins! &#128681";
}
