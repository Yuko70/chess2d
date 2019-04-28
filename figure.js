
export default class Figure {
  constructor( col, posx, posy, t, spx, spy, spwh, fw, fh) {
    this.color = col;
    this.x = posx;
    this.y = posy;
    this.type = t;
    this.spritex = spx;
    this.spritey = spy;
    this.spritewh = spwh;
    this.fieldw = fw;
    this.fieldh = fh;
    this.clicked = false;

   this.moves = [];
   this.move();
  }

  move() {
    if (this.type == 'pawn') {
      this.moves.push([this.x+1, this.y]);
      this.moves.push([this.x+2, this.y]);
      //console.log([this.x+2, this.y]);
    }
    // console.log('moves', this.moves);
  }



}