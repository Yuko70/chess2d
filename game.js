

// let x = document.getElementById("root");

function potvrdTah() {
  console.log('tah potvrdeny');

  let canvas = document.getElementById("canvas");
  let context = canvas.getContext('2d');
  console.log('canvas',canvas.player);
  console.log('context',context);
  // console.log('canvas.player',canvas.test());
  // console.log('context.player',context.test());
  console.log(Canvas);
}

function odznacTah() {
  console.log('tah odznaceny');
}






// document.addEventListener('DOMContentLoaded', function () {
let btn1 = document.getElementById('potvrdTah');
btn1.addEventListener('click', potvrdTah);

let btn2 = document.getElementById('odznacTah');
btn2.addEventListener('click', odznacTah);