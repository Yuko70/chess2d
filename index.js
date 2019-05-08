import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

import Board from './board.js';


let mouse = null;

class Canvas extends React.Component {

  constructor() {
    this.play = 1;
    this.move = 0;
    this.player = 1; // 0 white
    this.selected = null;

    this.click = null;

    this.cWidth = 480;
    this.cHeight = 480;

    this.imageAdress = 'https://raw.githubusercontent.com/yuko70/chess2d/master/img/';
    this.fieldW = new Image();
    this.fieldG = new Image();
    this.fieldB = new Image();
    this.fieldLB = new Image();
    this.fieldR = new Image();

    this.board = new Board();
  }

  click(e){
    console.log(e);
  }

  componentDidMount() {
    this.ctx = document.getElementById('canvas').getContext("2d");
    this.ctx.fillStyle = "#FFF000";

    document.getElementById('canvas').onclick = function() { mouse = event; }

    this.fieldW.src = this.imageAdress + 'whiteg.png';
    this.fieldG.src = this.imageAdress + 'greyg.png';
    this.fieldB.src = this.imageAdress + 'blueg.png';
    this.fieldLB.src = this.imageAdress + 'lightblueg.png';
    this.fieldR.src = this.imageAdress + 'redg.png';

    requestAnimationFrame(() => {this.updateCanvas()});
  }

  updateCanvas() {
    // Herna plochagp
    this.ctx.fillRect(0, 0, 480, 480);
    for ( let i = 0 ; i < 64 ; i+=1 ) {
      if ( (i+parseInt(i/8))%2 === 0 ) this.ctx.drawImage(this.fieldW, 60*(i%8), 60*parseInt(i/8));
      else this.ctx.drawImage(this.fieldG, 60*(i%8), 60*parseInt(i/8));
    }
    
    // MOUSE
    if (mouse !== null) {
      let mx = Math.floor(mouse.x / 60);
      let my = Math.floor(mouse.y / 60);
      

      if ( mx >= 0 && mx <= 7 && my >= 0 && my <= 7 ) {
        let X = mx;
        let Y = my;
        if ( this.player ) { X = 7-X; Y = 7-Y; }
        console.log('mouse', 'sX:', X, 'rY:', Y);
        if ( this.click === null && this.board.arr[Y][X] !== null && this.board.arr[Y][X].color === this.player  ){
          this.click = {x: X, y: Y};
          this.selected = this.board.arr[Y][X];
          this.selected.options( this.board.arr, X, Y );
        }
        else if ( this.click !== null && X === this.click.x && Y === this.click.y ) {
          this.click = null;
          this.selected = null;
        }
      }
      
      mouse = null; 
    }

    if ( this.click !== null ) {
      let X = this.click.x;
      let Y = this.click.y;
      if ( this.player) { X = 7-X; Y = 7-Y; }

      this.ctx.drawImage(this.fieldB, 60*X, 60*Y);
    }

    if (this.player === 0) {
      if ( this.selected !== null ) {
        for ( let item in this.selected.opt ){
          this.ctx.drawImage(this.fieldLB, 60 * this.selected.opt[item].x, 60 * this.selected.opt[item].y);
        }
        for ( let item in this.selected.att ){
          this.ctx.drawImage(this.fieldR, 60 * this.selected.att[item].x, 60 * this.selected.att[item].y);
        }
      }
    }
    else {
      if ( this.selected !== null ) {
        for ( let item in this.selected.opt ){
          this.ctx.drawImage(this.fieldLB, 60 * (7 - this.selected.opt[item].x), 60 * (7 - this.selected.opt[item].y));
        }
        for ( let item in this.selected.att ){
          this.ctx.drawImage(this.fieldR, 60 * (7 - this.selected.att[item].x), 60 * (7 - this.selected.att[item].y));
        }
      }
    }

    // if ( this.selected !== null ) {
    //   for ( let item in this.selected.opt ){
    //     this.ctx.drawImage(this.fieldLB, 60 * this.selected.opt[item].x, 60 * this.selected.opt[item].y);
    //   }
    //   for ( let item in this.selected.att ){
    //     this.ctx.drawImage(this.fieldR, 60 * this.selected.att[item].x, 60 * this.selected.att[item].y);
    //   }
    // }

    // figurky
    for ( let y = 0; y < 8; y++ ) {
      for ( let x = 0; x < 8; x++ ) {
        let item = this.board.arr[y][x];
        let X = x;
        let Y = y;
        if ( this.player ) { X = 7-X; Y = 7-Y; }
        if ( item !== null ) { item.draw(this.ctx, X, Y); }
      }
    }


    requestAnimationFrame(() => {this.updateCanvas()});
  }

  render() {
    return (
      <div>
        <canvas id="canvas" width={this.cWidth} height={this.cHeight} />
      </div>
    )
  }
  
}
/*
function click(event) {

  let x = event.offsetX;
  let y = event.offsetY;

  if (chess.playercolor == 0) {
    let lx = Math.floor(x / chess.cWidth * 8);
    let ly = Math.floor(y / chess.cHeight * 8);
  }
  else {
    let lx = Math.floor( (chess.cWidth - x) / chess.cWidth * 8 );
    let ly = Math.floor( (chess.cHeight - y) / chess.cHeight * 8 );
  }

  console.log("x coords: " + lx + ", y coords: " + ly);

  for (let f in chess.gamearea) {
    let figure = chess.gamearea[f];
    if (figure.x == lx & figure.y == ly) {
      figure.clicked = !figure.clicked;
    }

  }

  // otacanie hernej plochy   
  /*if (chess.playercolor == 0) {
    chess.playercolor = 1;
  }
  else {
    chess.playercolor = 0
  }
  
  console.log(document.getElementById('canvas'));

 }
*/

render(<Canvas />, document.getElementById('root'));
