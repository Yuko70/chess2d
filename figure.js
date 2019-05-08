
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
      if (this.color === 0) {
        // WHITE
        // possible move
        if (y > 0 ) {
          if ( arr[y-1][x] === null ) { // pohyb vpred
            this.opt.push({x:x, y:y-1});
            if ( y === 6 && arr[y-2][x] === null ) this.opt.push({x:x, y:y-2});
          }
        }

        // possible attack
        if (x > 0 && y > 0 ) {
          if (arr[y-1][x-1] !== null && arr[y-1][x-1].color !== arr[y][x].color) {    // && arr[y-1][x-1].type !== 'K' // pozor na utok na krala zafarbit ano, utok -> sach
            this.att.push({x:x-1, y:y-1});
          }
        }
        if (x < 7 && y > 0 ) {
          if (arr[y-1][x+1] !== null && arr[y-1][x+1].color !== arr[y][x].color) { 
            this.att.push({x:x+1, y:y-1});
          }
        }
      } 
      else {
        // BLACK
        // possible move
        if (y < 7) {
          if ( arr[y+1][x] === null ) { // pohyb vpred
            this.opt.push({x:x, y:y+1});
            if ( y === 1 && arr[y+2][x] === null ) this.opt.push({x:x, y:y+2});
          }
        }

        // possible attack
        if (x > 0 && y < 7 ) {
          if (arr[y+1][x-1] !== null && arr[y+1][x-1].color !== arr[y][x].color) {    // && arr[y-1][x-1].type !== 'K' // pozor na utok na krala zafarbit ano, utok -> sach
            this.att.push({x:x-1, y:y+1});
          }
        }
        if (x < 7 && y < 7 ) {
          if (arr[y+1][x+1] !== null && arr[y+1][x+1].color !== arr[y][x].color) { 
            this.att.push({x:x+1, y:y+1});
          }
        }
      }
    //END PESIAK
    }

    if ( this.type === 'v' ) {
      //console.log(x, y);
      console.log(this.opt);
      console.log(this.att);
      console.log('color', this.color);
      console.log(arr[x][y])

      if (this.color === 0) { 
        for (let sxl = x-1; sxl > -1; sxl--) {
          if (sxl !== x) {
            if (arr[y][sxl] === null) {
              console.log('sxl', sxl);
              this.opt.push({x:sxl, y:y});
            }
            else {
              if (arr[y][sxl].color !== arr[y][x].color) {
                this.att.push({x:sxl, y:y});
              }
              break;
            }
          }
        }
        for (let sxr = x+1; sxr < 8; sxr++) {
          if (sxr !== x) {
            if (arr[y][sxr] === null) {
              console.log('sxr', sxr);
              this.opt.push({x:sxr, y:y});
            }
            else {
              if (arr[y][sxr].color !== arr[y][x].color) {
                this.att.push({x:sxr, y:y});
              }
              break;
            }
          }
        }
        for (let syu = y-1; syu > -1; syu--) {
          if (syu !== y) {
            if (arr[syu][x] === null) {
              console.log('syu', syu);
              this.opt.push({x:x, y:syu});
            }
            else {
              if (arr[syu][x].color !== arr[y][x].color) {
                this.att.push({x:x, y:syu});
              }
              break;
            }
          }
        }
      }
      else {

      }

      
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