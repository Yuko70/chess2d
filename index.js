import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import Hello from './Hello';
import './style.css';

import Figure from './figure.js';

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
      // var value = figarr[key];
      // console.log(key, value);
      
      
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

      // console.log('substring', key.substring(1, 3) == 'ki', key.substring(1, 3))

      // console.log('string', col);
      // console.log('spx', spx, 'spy', spy);

      //constructor( col, posx, posy, t, spx, spy, spwh, fw, fh)

      // if (type == 'pawn') {
        
        
      // }
      
      // console.log(this.gamearea)

      // this.figures.push({
      //   key: key,
      //   value: new Figure(color, )
      // });
    }

  }
}

// let f = new Figure('black', 0, 0, 'pawn', 0, 0, 130, 60, 60);
// console.log(f)

let chess = new Chess();
// console.log(ch.spriteWH);

console.log(chess.gamearea);
// console.log(chess.figarr);




// let imageAdress = 'https://raw.githubusercontent.com/yuko70/chess2d/master/img/';
// let cWidth = 480;
// let cHeight = 480;

// let fieldW = 60;
// let fieldH = 60;
// let spriteWH = 130;

// let g = Game;

// let gamercolor = 'b'; //w or b

// let figarr = {bp: [0, 0], bk: [130, 0], bb: [260, 0], br: [390, 0], bq: [520, 0], bki: [650, 0],
//              wp: [0, 130], wk: [130, 130], wb: [260, 130], wr: [390, 130], wq: [520, 130], wki: [650, 130]};

// let gamearr = [
//   ['br', 'bk', 'bb', 'bq', 'bki', 'bb', 'bk', 'br'],
//   ['bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp'],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   ['wp', 'wp', 'wp', 'wp', 'wp', 'wp', 'wp', 'wp'],
//   ['wr', 'wk', 'wb', 'wq', 'wki', 'wb', 'wk', 'wr'],
// ];

// let boardarr = [
//   [1, 0, 1, 0, 1, 0, 1, 0],
//   [0, 1, 0, 1, 0, 1, 0, 1],
//   [1, 0, 1, 0, 1, 0, 1, 0],
//   [0, 1, 0, 1, 0, 1, 0, 1],
//   [1, 0, 1, 0, 1, 0, 1, 0],
//   [0, 1, 0, 1, 0, 1, 0, 1],
//   [1, 0, 1, 0, 1, 0, 1, 0],
//   [0, 1, 0, 1, 0, 1, 0, 1],
// ];



// First I load the Image
//let sprite = new Image();
//sprite.src = 'https://raw.githubusercontent.com/yuko70/chess2d/master/img/chessfig.png';
// Define sprite size
//spriteSize = 16;
// Draw on map, tileIndex is the number i store in the map array
//ctx.drawImage(sprite, 0, tileIndex * spriteWH, spriteWH, spriteWH, tileX, tileY, spriteWH, spriteWH);
// And the map looks like this but bigger
//var map = Array([0,0,0,1,1],[1,1,0,1,0]);


class Canvas extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.myCanvas = React.createRef();
  // }

  componentDidMount() {
    // requestAnimationFrame(() => {this.updateCanvas()}); //-uncomment for startAnimation
    this.updateCanvas();
  }

  test() {
    console.log('CANVAS');
  }

  updateCanvas() {
    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext("2d")
    ctx.fillStyle = "#FFF000";
    ctx.fillRect(0, 0, 480, 480);

    //ctx.fillStyle = "blue";
    //console.log(figarr['bk'][0]);
    //console.log(gamearr[0][0]=='br');

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

        //console.log(ii,jj);

        // if (i % 2 == 0 & j % 2 == 0) {
        //   drawImage(ctx,x,y,'whiteg.png');
        // }
        // else if (i % 2 == 1 & j % 2 == 1) {
        //   drawImage(ctx,x,y,'whiteg.png');
        // }
        // else {
        //   drawImage(ctx,x,y,'greyg.png');
        // }

        if (chess.boardarea[i][j] == 0) {
          drawImage(ctx, x, y, 'greyg.png');
        }
        else if (chess.boardarea[i][j] == 1) {
          drawImage(ctx, x, y, 'whiteg.png');
        }
        else if (chess.boardarea[i][j] == 2) {
          drawImage(ctx, x, y, 'blueg.png');
        }
        else if (chess.boardarea[i][j] == 3) {
          drawImage(ctx, x, y, 'lightblueg.png');
        }
        else if (chess.boardarea[i][j] == 4) {
          drawImage(ctx, x, y, 'redg.png');
        }
        // console.log('kresliiiiiiiiiiii');

        // if (gamearr[i][j] != 0) {
        //   // if (gamercolor == 'b') {
        //   //   //drawImageFig(ctx,x,y,gamearr[i][j]);
        //   //   drawImageFig(ctx, x, y, gamearr[i][j]);
        //   //   //console.log(gamearr[j][j]);
        //   // }
        //   // else {
        //     drawImageFig(ctx, x, y, gamearr[i][j]);
        //   // }
        //   //drawImageFig(ctx,x,y,gamearr[i][j]);
        //   //console.log(gamearr[1][0]);
        // }

        
      }
      //ctx.strokeText(Maze[i].charAt(j), x+16, y+16);
    }
    
    drawImageFig(ctx, 60, 60);

    canvas.onclick = function () { click(event) };
    // requestAnimationFrame(() => {this.updateCanvas()}); //-uncomment for startAnimation
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
  //this.g.preLoad();
  //console.log("sss");
  let x = event.offsetX;
  let y = event.offsetY;
  // guessX = x;
  // guessY = y;
  //console.log("x coords: " + x + ", y coords: " + y);

  //console.log("x coords: " + Math.floor(x / chess.cWidth * 8) + ", y coords: " + Math.floor(y / cHeight * 8));

  if (chess.playercolor == 0) {
    // let lx = Math.floor(x / chess.cWidth * 8);
    // let ly = Math.floor(y / chess.cHeight * 8);
    let lx = Math.floor(x / chess.cWidth * 8);
    let ly = Math.floor(y / chess.cHeight * 8);
  }
  else {
    let lx = Math.floor( (chess.cWidth - x) / chess.cWidth * 8 );
    let ly = Math.floor( (chess.cHeight - y) / chess.cHeight * 8 );
  }

  //let lx = Math.floor(x / chess.cWidth * 8);
  //let ly = Math.floor(y / chess.cWidth * 8);


  console.log("x coords: " + lx + ", y coords: " + ly);

  chess.boardarea[lx][ly] = 2;


  //console.log(gamearr[lx][ly]);
  /gamearr[lx][ly] = 'bp';
  //console.log(gamearr[lx][ly]);

  //ReactDOM.render(<Canvas/>, document.getElementById('canvas')); //-> this


  //render(<Canvas/>, document.getElementById('canvas'));
  
  console.log(document.getElementById('canvas'));


  // let ch = new Chess();
  // console.log(ch.spriteWH);


  //document.getElementById('canvas').updateCanvas();
  // let canvas = document.getElementById('canvas');
  // let ctx = canvas.getContext('2d');
  // ctx.render;
  //Canvas.test();
  //updateCanvas();
  //console.log(boardarr)
 }

static function drawImage(ctx, x, y, src) {
  let img = new Image();
  img.src = chess.imageAdress + src;
  ctx.drawImage(img, x, y);
}

// static function drawImageFig(ctx, dx, dy, figure) {
//   let img = new Image();
//   img.src = chess.imageAdress + 'chessfig.png';
//   console.log(figure);
//   ctx.drawImage(img, chess.figarr[figure][0], chess.figarr[figure][1], chess.spriteWH, chess.spriteWH, dx, dy, chess.fieldW, chess.fieldH);
// }

static function drawImageFig(ctx, sizex, sizey) {
  // console.log(chess.gamearea)
  let img = new Image();
  img.src = chess.imageAdress + 'chessfig.png';

  for (let f in chess.gamearea) {
    //console.log('figure', chess.gamearea[f]);
    let figure = chess.gamearea[f];
    ctx.drawImage(img, figure.spritex, figure.spritey, chess.spriteWH, chess.spriteWH, figure.x*sizex, figure.y*sizey, chess.fieldW, chess.fieldH);
  }
}



/*class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }
  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
        </p>
      </div>
    );
  }
}*/

//render(<App />, document.getElementById('root'));


// class Game {
//   constructor() {
//     let state = {
//       lives: 3,
//       pac: Pacman(),
//       ghost: Ghost(),
//       map: Maze,
//       pacTiles: [

//       ],
//     };
//   }
//   preLoad() {
//     let canvas = document.getElementById('canvas')
//     let ctx = canvas.getContext('2d');
//     ctx.fillStyle = "green";
//     ctx.fillText(100, 100, "sdawdawdawdawdawdawdawdawdadawda");
//     ctx.stroke()
//   }
// }


render(<Canvas />, document.getElementById('root'));
