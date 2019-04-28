import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import Hello from './Hello';
import './style.css';

import Figure from './figure.js';

//commit 1:06

class Chess {
  constructor() {
    this.play = 1;
    this.move = 0;
    this.playercolor = 0; //1 = black, 0 = white  //let gamercolor = 'w'; //w or b

    this.imageAdress = 'https://raw.githubusercontent.com/yuko70/chess2d/master/img/';
    this.cWidth = 480;
    this.cHeight = 480;

    this.fieldW = 60;
    this.fieldH = 60;
    this.spriteWH = 130;

    this.gamearea = [];
    
    this.configures();
    this.figarr = {};

    this.boardarea = [
      [1, 0, 1, 0, 1, 0, 1, 0],
      [0, 1, 0, 1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 0, 1, 0],
      [0, 1, 0, 1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 0, 1, 0],
      [0, 1, 0, 1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 0, 1, 0],
      [0, 1, 0, 1, 0, 1, 0, 1],
    ];
    // console.log('CONFIGURES');
  }

  configures() {
    console.log('CONFIGURES');
    this.figarr = {bp: [0, 0], bk: [130, 0], bb: [260, 0], br: [390, 0], bq: [520, 0], bki: [650, 0],
                  wp: [0, 130], wk: [130, 130], wb: [260, 130], wr: [390, 130], wq: [520, 130], wki: [650, 130]};
    

    for (let key in this.figarr) {  
      
      let color = '';
      if (key.substring(0, 1) == 'b') {
        color = 'black';
      }
      else {
        color = 'white';
      }
      let spx = this.figarr[key][0];
      let spy = this.figarr[key][1];

      let type = ''; 
      if (key.substring(1, 3) == 'p') {
        type = 'pawn';
        let j = 0;
        if (color == 'black') {
          j = 1;
          for (let i = 0; i < 8; i++) {
            this.gamearea.push(new Figure(color, i, j, type, this.figarr[key][0], this.figarr[key][1], this.spriteWH, this.fieldW, this.fieldH));
          }
        }
        else {
          j = 6
          for (let i = 0; i < 8; i++) {
            this.gamearea.push(new Figure(color, i, j, type, this.figarr[key][0], this.figarr[key][1], this.spriteWH, this.fieldW, this.fieldH));
          }
        }
      }
      else if (key.substring(1, 3) == 'k') {
        type = 'knight';
        if (color == 'black') {
          this.gamearea.push(new Figure(color, 1, 0, type, this.figarr[key][0], this.figarr[key][1], this.spriteWH, this.fieldW, this.fieldH));
          this.gamearea.push(new Figure(color, 6, 0, type, this.figarr[key][0], this.figarr[key][1], this.spriteWH, this.fieldW, this.fieldH));
        }
        else {
          this.gamearea.push(new Figure(color, 1, 7, type, this.figarr[key][0], this.figarr[key][1], this.spriteWH, this.fieldW, this.fieldH));
          this.gamearea.push(new Figure(color, 6, 7, type, this.figarr[key][0], this.figarr[key][1], this.spriteWH, this.fieldW, this.fieldH));
        }
      }
      else if (key.substring(1, 3) == 'b') {
        type = 'bishop';
        if (color == 'black') {
          this.gamearea.push(new Figure(color, 2, 0, type, this.figarr[key][0], this.figarr[key][1], this.spriteWH, this.fieldW, this.fieldH));
          this.gamearea.push(new Figure(color, 5, 0, type, this.figarr[key][0], this.figarr[key][1], this.spriteWH, this.fieldW, this.fieldH));
        }
        else {
          this.gamearea.push(new Figure(color, 2, 7, type, this.figarr[key][0], this.figarr[key][1], this.spriteWH, this.fieldW, this.fieldH));
          this.gamearea.push(new Figure(color, 5, 7, type, this.figarr[key][0], this.figarr[key][1], this.spriteWH, this.fieldW, this.fieldH));
        }
      }
      else if (key.substring(1, 3) == 'r') {
        type = 'rook';
        if (color == 'black') {
          this.gamearea.push(new Figure(color, 0, 0, type, this.figarr[key][0], this.figarr[key][1], this.spriteWH, this.fieldW, this.fieldH));
          this.gamearea.push(new Figure(color, 7, 0, type, this.figarr[key][0], this.figarr[key][1], this.spriteWH, this.fieldW, this.fieldH));
        }
        else {
          this.gamearea.push(new Figure(color, 0, 7, type, this.figarr[key][0], this.figarr[key][1], this.spriteWH, this.fieldW, this.fieldH));
          this.gamearea.push(new Figure(color, 7, 7, type, this.figarr[key][0], this.figarr[key][1], this.spriteWH, this.fieldW, this.fieldH));
        }
      }
      else if (key.substring(1, 3) == 'q') {
        type = 'queen';
        if (color == 'black') {
          this.gamearea.push(new Figure(color, 3, 0, type, this.figarr[key][0], this.figarr[key][1], this.spriteWH, this.fieldW, this.fieldH));
        }
        else {
          this.gamearea.push(new Figure(color, 3, 7, type, this.figarr[key][0], this.figarr[key][1], this.spriteWH, this.fieldW, this.fieldH));
        }
      }
      else if (key.substring(1, 3) == 'ki') {
        type = 'king';
        if (color == 'black') {
          this.gamearea.push(new Figure(color, 4, 0, type, this.figarr[key][0], this.figarr[key][1], this.spriteWH, this.fieldW, this.fieldH));
        }
        else {
          this.gamearea.push(new Figure(color, 4, 7, type, this.figarr[key][0], this.figarr[key][1], this.spriteWH, this.fieldW, this.fieldH));
        }
      }

    }

  }
}


let chess = new Chess();

console.log(chess.gamearea);


class Canvas extends React.Component {

  componentDidMount() {
    requestAnimationFrame(() => {this.updateCanvas()}); //-uncomment for startAnimation
    // this.updateCanvas();
  }

  test() {
    console.log('CANVAS');
  }

  updateCanvas() {
    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext("2d")
    ctx.fillStyle = "#FFF000";
    ctx.fillRect(0, 0, 480, 480);

    let ii = 8;
    let jj = 8;

    for (let i = 0; i < 8; i++) {
      ii--;
      jj = 8;
      for (let j = 0; j < 8; j++) {
        jj--;
       
        if (chess.playercolor == 0) {
          let x = 60 * i;
          let y = 60 * j;
        }
        else {
          let x = 60 * ii;
          let y = 60 * jj;
        }

        if (chess.boardarea[i][j] == 0) {
          drawImage(ctx, x, y, 'greyg.png');
        }
        else if (chess.boardarea[i][j] == 1) {
          drawImage(ctx, x, y, 'whiteg.png');
        }
        // else if (chess.boardarea[i][j] == 2) {
        //   drawImage(ctx, x, y, 'blueg.png');
        // }
        // else if (chess.boardarea[i][j] == 3) {
        //   drawImage(ctx, x, y, 'lightblueg.png');
        // }
        // else if (chess.boardarea[i][j] == 4) {
        //   drawImage(ctx, x, y, 'redg.png');
        // }
        for (let f in chess.gamearea) {
          let figure = chess.gamearea[f];
          if (figure.clicked == true) {
            if (chess.playercolor == 0) {
              drawImage(ctx, figure.x*60, figure.y*60, 'blueg.png');
              console.log(figure.moves);
            }
            else {
              drawImage(ctx, (7-figure.x)*60, (7-figure.y)*60, 'blueg.png');
            }
            
          }
        }
      }
    
    }
    
    drawImageFig(ctx, 60, 60);

    canvas.onclick = function () { click(event) };
    requestAnimationFrame(() => {this.updateCanvas()}); //-uncomment for startAnimation
  }

  render() {
    return (
      <div>
        <canvas id="canvas" width={chess.cWidth} height={chess.cHeight} />
      </div>
    )
  }
  
}

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
  if (chess.playercolor == 0) {
    chess.playercolor = 1;
  }
  else {
    chess.playercolor = 0
  }

  // for (let f in chess.gamearea) {
  //   let figure = chess.gamearea[f];
  //   if (figure.x == 0 & figure.y == 1) {
  //     figure.y += 1;
  //   }
  // }
  
  console.log(document.getElementById('canvas'));

 }

static function drawImage(ctx, x, y, src) {
  let img = new Image();
  img.src = chess.imageAdress + src;
  ctx.drawImage(img, x, y);
}

static function drawImageFig(ctx, sizex, sizey) {
  // console.log(chess.gamearea)
  let img = new Image();
  img.src = chess.imageAdress + 'chessfig.png';
  
  
  for (let f in chess.gamearea) {
    let figure = chess.gamearea[f];
     if (chess.playercolor == 0) {
       ctx.drawImage(img, figure.spritex, figure.spritey, chess.spriteWH, chess.spriteWH, figure.x*sizex, figure.y*sizey, chess.fieldW, chess.fieldH);
     }
     else {
       ctx.drawImage(img, figure.spritex, figure.spritey, chess.spriteWH, chess.spriteWH, (7-figure.x)*sizex, (7-figure.y)*sizey, chess.fieldW, chess.fieldH);
     }
    //  if (figure.clicked == true) {
    //    chess.boardarea[figure.x][figure.y] = 2;
    //  }
    //  else {
       // zafarbenie policka spravne naspat
    //  }
  }
  
}

render(<Canvas />, document.getElementById('root'));
