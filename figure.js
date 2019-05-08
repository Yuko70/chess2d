
let imageF = new Image();
imageF.src = 'https://raw.githubusercontent.com/yuko70/chess2d/master/img/chessfig.png';

export default class Figure {
  constructor( t , col ) {
    this.color = col;
    this.type = t;
    this.imgX = { 'p':0, 'v':390, 'k':130, 's':260, 'Q':520, 'K':650 };
    this.opt = [];
    this.att = [];
  }

  draw( ctx, x, y ){
    ctx.drawImage(imageF, this.imgX[this.type], 130 - this.color*130, 130, 130, 60 * x, 60 * y, 60, 60);
  }

  options( arr, x, y ) {
    this.opt = [];
    this.att = [];

    if ( this.type === 'p' ) {
      console.log(x, y);
      console.log(this.opt);
      console.log(this.att);

      // // WHITE
      // // possible move
      // if (y > 1 ) {
      //   if ( arr[y-1][x] === null ) { // pohyb vpred
      //     this.opt.push({x:x, y:y-1});
      //     if ( y === 6 && arr[y-2][x] === null ) this.opt.push({x:x, y:y-2});
      //   }
      // }

      // // possible attack
      // if (x > 1 && y > 1 ) {
      //   if (arr[y-1][x-1] !== null) {    // && arr[y-1][x-1].type !== 'K' // pozor na utok na krala zafarbit ano, utok -> sach
      //     this.att.push({x:x-1, y:y-1});
      //   }
      // }
      // if (x < 7 && y < 7 ) {
      //   if (arr[y-1][x+1] !== null) { 
      //     this.att.push({x:x+1, y:y-1});
      //   }
      // }

      // BLACK
      // if (y === 1) {
      //   if ( arr[7-y-1][x] === null ) this.opt.push({x:7-x, y:7-y-1});
      //   if ( arr[7-y-2][x] === null ) this.opt.push({x:7-x, y:7-y-2});
      // }
      // else {
      //   if ( arr[7-y-1][x] === null ) this.opt.push({x:7-x, y:7-y-1});
      // }

      // possible move
      if (y < 7) {
        if ( arr[y+1][x] === null ) { // pohyb vpred
          this.opt.push({x:x, y:y+1});
          if ( y === 1 && arr[y+2][x] === null ) this.opt.push({x:x, y:y+2});
        }
      }








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