import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';



let imageAdress = 'https://raw.githubusercontent.com/yuko70/chess2d/master/img/';
let cWidth = 480;
let cHeight = 480;

let fieldW = 60;
let fieldH = 60;
let spriteWH = 130;

let g = Game;

let figarr = {bp: [0,0], bk: [130, 0], bb: [260, 0], br: [390, 0], bq: [520, 0], bki: [650, 0],
              wp: [0,130], wk: [130, 130], wb: [260, 130], wr: [390, 130], wq: [520, 130], wki: [650, 130]};

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
    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext("2d")
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(0,0,480,480);
    //ctx.fillStyle = "blue";

    console.log(figarr['bk'][0]);
    console.log(gamearr[0][0]=='br');


    for (let i = 0; i < 8; i++){
      for (let j = 0; j < 8; j++){
          let x = 60*j;
          let y = 60*i;

          if (i % 2 == 0 & j % 2 == 0) {
            drawImage(ctx,x,y,'whiteg.png');
          }
          else if (i % 2 == 1 & j % 2 == 1) {
            drawImage(ctx,x,y,'whiteg.png');
          }
          else {
            drawImage(ctx,x,y,'greyg.png');
          }

          if (gamearr[i][j] != 0) {
            drawImageFig(ctx,x,y,gamearr[i][j]);
            //console.log(gamearr[1][0]);
          }

        }
        //ctx.strokeText(Maze[i].charAt(j), x+16, y+16);
    }
    canvas.onclick = function(){doSth()};
    
  }
  render() {
    return(
      <div>
        <canvas id="canvas" width={cWidth} height={cHeight} />
      </div>
    )
  }
}

function doSth(){
  this.g.preLoad();
  console.log("sss");
}

static function drawImage(ctx,x,y,src){
  let img = new Image();
  img.src = imageAdress+src;
  ctx.drawImage(img,x,y);
}

static function drawImageFig(ctx,dx,dy,figure){
  let img = new Image();
  img.src = imageAdress+'chessfig.png';
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


class Game{
  constructor(){
     let state = {
      lives : 3,
      pac : Pacman(),
      ghost : Ghost(),
      map : Maze,
      pacTiles : [
        
      ],
    };
  }
  preLoad(){
    let canvas = document.getElementById('canvas')
    let ctx = canvas.getContext('2d');
    ctx.fillStyle = "green";
    ctx.fillText(100,100,"sdawdawdawdawdawdawdawdawdadawda");
    ctx.stroke()
  }
}


render(<Canvas />, document.getElementById('root'));
