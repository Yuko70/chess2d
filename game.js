// import Canvas from './index.js'
// import React, { Component } from 'react';
// let x = document.getElementById("root");

// let canvaso = new Canvas();

// class Game extends canvasRef {
//   constructor(props) {
//     super(props);
//     this.state = {
//       counter: 0
//     }
//   }

export default class Game {
  constructor( player ) {
    this.playerG = player;

    let btn1 = document.getElementById('potvrdTah');
btn1.addEventListener('click', potvrdTah);

let btn2 = document.getElementById('odznacTah');
btn2.addEventListener('click', odznacTah);
  }

  potvrdTah() {
  console.log('tah potvrdeny');

  let canvas = document.getElementById("canvas");
  let context = canvas.getContext('2d');
  console.log('canvas',canvas);
  console.log('context',context);
  // console.log('canvas.player',canvas.test());
  // console.log('context.player',context.test());
  console.log(canvasRef);
}


odznacTah() {
  console.log('tah odznaceny');
}

}

function potvrdTah() {
  console.log('tah potvrdeny');

  let canvas = document.getElementById("canvas");
  let context = canvas.getContext('2d');
  console.log('canvas',canvas);
  console.log('context',context);
  // console.log('canvas.player',canvas.test());
  // console.log('context.player',context.test());
  console.log(canvasRef);
}

function odznacTah() {
  console.log('tah odznaceny');
}






// document.addEventListener('DOMContentLoaded', function () {
let btn1 = document.getElementById('potvrdTah');
btn1.addEventListener('click', potvrdTah);

let btn2 = document.getElementById('odznacTah');
btn2.addEventListener('click', odznacTah);