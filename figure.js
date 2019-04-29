
let imageF = new Image();
imageF.src = 'https://raw.githubusercontent.com/yuko70/chess2d/master/img/chessfig.png';

export default class Figure {
  constructor( t , col ) {
    this.color = col;
    this.type = t;
    this.imgX = { 'p':0, 'v':390, 'k':130, 's':260, 'Q':520, 'K':650 };
    this.opt = [];
  }

  draw( ctx, x, y ){
    ctx.drawImage(imageF, this.imgX[this.type], 130 - this.color*130, 130, 130, 60 * x, 60 * y, 60, 60);
  }

  options( arr, x, y ) {
    this.opt = [];
    if ( this.type === 'p' ) {
      if ( arr[y-1][x] === null ) this.opt.push({x:x, y:y-1});
      if ( arr[y-2][x] === null ) this.opt.push({x:x, y:y-2});
    }
    if ( this.type === 'v' ) {
      
    }
    if ( this.type === 'k' ) {
      
    }
    if ( this.type === 's' ) {
      
    }
    if ( this.type === 'Q' ) {
      
    }
    if ( this.type === 'K' ) {
      
    }
  }

}