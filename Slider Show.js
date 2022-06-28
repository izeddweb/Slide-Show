const myImg = document.querySelector("img");
const myDiv = document.querySelector(".container");
const myImages = ["img/1.jpg","img/2.jpg","img/3.jpg"]
let i = 0
const func = function myTimeout() {
  myImg.setAttribute('src', myImages[i]);
  i++
  if( i === myImages.length){
    i = 0
  }
}

myTimeout = setInterval (func, 2000);


















