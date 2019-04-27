import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import Hello from './Hello';
import './style.css';



let imageAdress = 'https://raw.githubusercontent.com/yuko70/chess2d/master/img/';
let cWidth = 480;
let cHeight = 480;

let fieldW = 60;
let fieldH = 60;
let spriteWH = 130;

let g = Game;

let gamercolor = 'w'; //w or b


let figarr = {
  bp: [0, 0], bk: [130, 0], bb: [260, 0], br: [390, 0], bq: [520, 0], bki: [650, 0],
  wp: [0, 130], wk: [130, 130], wb: [260, 130], wr: [390, 130], wq: [520, 130], wki: [650, 130]
};

let gamearr = [
  ['br', 'bk', 'bb', 'bq', 'bki', 'bb', 'bk', 'br'],
  ['bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp'],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  ['wp', 'wp', 'wp', 'wp', 'wp', 'wp', 'wp', 'wp'],
  ['wr', 'wk', 'wb', 'wq', 'wki', 'wb', 'wk', 'wr'],
];

let boardarr = [
  [1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 2, 1, 0, 1, 0, 1],
  [1, 0, 3, 0, 1, 0, 1, 0],
  [0, 1, 3, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1],
];



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

  componentDidMount() {
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
       
        if (gamercolor == 'w') {
          let x = 60 * j;
          let y = 60 * i;
        }
        else {
          let x = 60 * jj;
          let y = 60 * ii;
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

        if (boardarr[i][j] == 0) {
          drawImage(ctx, x, y, 'greyg.png');
        }
        else if (boardarr[i][j] == 1) {
          drawImage(ctx, x, y, 'whiteg.png');
        }
        else if (boardarr[i][j] == 2) {
          drawImage(ctx, x, y, 'blueg.png');
        }
        else if (boardarr[i][j] == 3) {
          drawImage(ctx, x, y, 'lightblueg.png');
        }
        else if (boardarr[i][j] == 4) {
          drawImage(ctx, x, y, 'redg.png');
        }
        console.log('kresliiiiiiiiiiii');

        if (gamearr[i][j] != 0) {
          // if (gamercolor == 'b') {
          //   //drawImageFig(ctx,x,y,gamearr[i][j]);
          //   drawImageFig(ctx, x, y, gamearr[i][j]);
          //   //console.log(gamearr[j][j]);
          // }
          // else {
            drawImageFig(ctx, x, y, gamearr[i][j]);
          // }
          //drawImageFig(ctx,x,y,gamearr[i][j]);
          //console.log(gamearr[1][0]);
        }
      }
      //ctx.strokeText(Maze[i].charAt(j), x+16, y+16);
    }
    canvas.onclick = function () { click(event) };
  }

  render() {
    return (
      <div>
        <canvas id="canvas" width={cWidth} height={cHeight} />
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

  //console.log("x coords: " + Math.floor(x / cWidth * 8) + ", y coords: " + Math.floor(y / cHeight * 8));

  if (gamercolor == 'w') {
    let lx = Math.floor(x / cWidth * 8);
    let ly = Math.floor(y / cHeight * 8);
  }
  else {
    let lx = Math.floor( (cWidth - x) / cWidth * 8 );
    let ly = Math.floor( (cHeight - y) / cHeight * 8 );
  }

  //let lx = Math.floor(x / cWidth * 8);
  //let ly = Math.floor(y / cWidth * 8);


  console.log("x coords: " + lx + ", y coords: " + ly);

  boardarr[lx][ly] = 2;


  //console.log(gamearr[lx][ly]);
  gamearr[lx][ly] = 'bp';
  //console.log(gamearr[lx][ly]);

  //ReactDOM.render(<Canvas/>, document.getElementById('canvas')); //-> this


  //render(<Canvas/>, document.getElementById('canvas'));
  
  console.log(document.getElementById('canvas'));




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
  img.src = imageAdress + src;
  ctx.drawImage(img, x, y);
}

static function drawImageFig(ctx, dx, dy, figure) {
  let img = new Image();
  img.src = imageAdress + 'chessfig.png';
  ctx.drawImage(img, figarr[figure][0], figarr[figure][1], spriteWH, spriteWH, dx, dy, fieldW, fieldH);
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


class Game {
  constructor() {
    let state = {
      lives: 3,
      pac: Pacman(),
      ghost: Ghost(),
      map: Maze,
      pacTiles: [

      ],
    };
  }
  preLoad() {
    let canvas = document.getElementById('canvas')
    let ctx = canvas.getContext('2d');
    ctx.fillStyle = "green";
    ctx.fillText(100, 100, "sdawdawdawdawdawdawdawdawdadawda");
    ctx.stroke()
  }
}


render(<Canvas />, document.getElementById('root'));
