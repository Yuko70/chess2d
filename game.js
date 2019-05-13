// import Canvas from './index.js'
// import React, { Component } from 'react';
import React, { Component } from 'react';
import { render } from 'react-dom';
// let x = document.getElementById("root");

// let canvaso = new Canvas();

// class Game extends canvasRef {
//   constructor(props) {
//     super(props);
//     this.state = {
//       counter: 0
//     }
//   }

export default class Game extends React.Component  {
  constructor(  ) { //player
    super();
    this.playerG = null;
    // this.playerG = player;
    // this.onToggleLoop = this.onToggleLoop.bind(this);
  //   this.btn1 = document.getElementById('potvrdTah');
  //   btn1.addEventListener('click', potvrdTah);

  //   this.btn2 = document.getElementById('odznacTah');
  //   btn2.addEventListener('click', odznacTah);
  }

  // potvrdTah() {
  //   console.log('tah potvrdeny');
  //   console.log('this.playerG', this.playerG);

  //   // let canvas = document.getElementById("canvas");
  //   // let context = canvas.getContext('2d');
  //   // console.log('canvas',canvas);
  //   // console.log('context',context);
  //   // console.log('canvas.player',canvas.test());
  //   // console.log('context.player',context.test());
   
  // }


  // odznacTah() {
  //   console.log('tah odznaceny');
  // }


  render() {
    return (
      <div>
      // <input id="potvrdTah" type='button' value="Potvrď ŤAH" onClick={this.potvrdTah.bind(this)} />
      // <input id="odznacTah" type='button' value="Odznač ŤAH" onClick={this.odznacTah.bind(this)} />
      </div>
    );
  }
}

render(<Game />, document.getElementById('control'));

// function potvrdTah() {
//   console.log('tah potvrdeny');

//   let canvas = document.getElementById("canvas");
//   let context = canvas.getContext('2d');
//   console.log('canvas',canvas);
//   console.log('context',context);
//   // console.log('canvas.player',canvas.test());
//   // console.log('context.player',context.test());
//   console.log(canvasRef);
// }

// function odznacTah() {
//   console.log('tah odznaceny');
// }






// document.addEventListener('DOMContentLoaded', function () {
// let btn1 = document.getElementById('potvrdTah');
// btn1.addEventListener('click', potvrdTah);

// let btn2 = document.getElementById('odznacTah');
// btn2.addEventListener('click', odznacTah);