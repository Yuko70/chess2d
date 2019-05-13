import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

import Board from './board.js';

// import Game from './game.js';


// import './game.js';


let mouse = null;
// let canvasRef = null;


class Canvas extends React.Component {

  constructor() {
    this.play = 1;
    this.move = 0;
    this.player = 0; // 0 white
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

    // this.game = null;//
    // this.game = new Game();
    // this.game.playerG = this.player;

    // this.canvasRef = React.createRef();
  }

  click(e){
    console.log(e);
  }

  test(){
    console.log('test');
  }

  componentDidMount() {
    this.ctx = document.getElementById('canvas').getContext("2d");
    this.ctx.fillStyle = "#FFF000";

    document.getElementById('canvas').onclick = function() { mouse = event; }

    this.fieldW.src = this.imageAdress + 'whitegb.png';
    this.fieldG.src = this.imageAdress + 'greygb.png';
    this.fieldB.src = this.imageAdress + 'bluegb.png';
    this.fieldLB.src = this.imageAdress + 'lightbluegb.png';
    this.fieldR.src = this.imageAdress + 'redgb.png';

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
        console.log('mouse', 'sX:', X, 'rY:', Y); //move
        console.log('this.player', this.player);
        console.log('playerG', this.game.playerG);
        if ( this.click === null && this.board.arr[Y][X] !== null && this.board.arr[Y][X].color === this.player  ){
          this.click = {x: X, y: Y};
          this.selected = this.board.arr[Y][X];
          this.selected.options( this.board.arr, X, Y );
          // console.log('this.click', this.click);
          // console.log('this.selected', this.selected);
          // console.log('this.selected.opt', this.selected.opt);
        }
        else if ( this.click !== null && X === this.click.x && Y === this.click.y ) {
          this.click = null;
          this.selected = null;
        }
        else if (this.click !== null) {
           if ( (this.selected.opt.some(item => item.x === X) && this.selected.opt.some(item => item.y === Y)) || 
                (this.selected.att.some(item => item.x === X) && this.selected.att.some(item => item.y === Y)) ) {
            //  console.log('move to', 'sX:', X, 'rY:', Y); //move
            //  console.log('you cxan move here');
            //  console.log('position of selected', this.click);
            //  console.log('gamearr', this.board.arr[this.click.y][this.click.x]);
            // //  this.board.arr[X][Y] = this.board.arr[this.click.x][this.click.y];
            // console.log(this.board.arr[Y][X] );

            this.board.arr[Y][X] = this.board.arr[this.click.y][this.click.x];
            this.board.arr[this.click.y][this.click.x] = null;
            this.click = null;
            this.selected = null;
           }
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


  potvrdTah() {
    console.log('tah potvrdeny');
    console.log('this.playerG', this.player);

    // let canvas = document.getElementById("canvas");
    // let context = canvas.getContext('2d');
    // console.log('canvas',canvas);
    // console.log('context',context);
    // console.log('canvas.player',canvas.test());
    // console.log('context.player',context.test());
   
  }


  odznacTah() {
    console.log('tah odznaceny');
  }



  render() {
    return (
      <div>
        <canvas id="canvas" width={this.cWidth} height={this.cHeight} />
      </div>,
      <div>
        <input id="potvrdTah" type='button' value="Potvrď ŤAH" onClick={this.potvrdTah} />
        <input id="odznacTah" type='button' value="Odznač ŤAH" onClick={this.odznacTah} />
      </div>
    )
  }
  
}


render(<Canvas />, document.getElementById('root'));
