import Figure from './figure';

export default class Board {
  constructor() {
    // this.arr = [
    //   [new Figure('v', 1), new Figure('k', 1), new Figure('s', 1), new Figure('Q', 1), new Figure('K', 1), new Figure('s', 1), new Figure('k', 1), new Figure('v', 1)],
    //   [new Figure('p', 1), new Figure('p', 1), new Figure('p', 1), new Figure('p', 1), new Figure('p', 1), new Figure('p', 1), new Figure('p', 1), new Figure('p', 1)],
    //   [null, null, null, null, null, null, null, null],
    //   [null, null, null, null, null, null, null, null],
    //   [null, new Figure('p', 1), null, null, null, null, null, null],
    //   [new Figure('p', 0), null, null, null, null, null, null, null],
    //   [new Figure('p', 0), new Figure('p', 0), new Figure('p', 0), new Figure('p', 0), new Figure('p', 0), new Figure('p', 0), new Figure('p', 0), new Figure('p', 0)],
    //   [new Figure('v', 0), new Figure('k', 0), new Figure('s', 0), new Figure('Q', 0), new Figure('K', 0), new Figure('s', 0), new Figure('k', 0), new Figure('v', 0)]
    // ];

    // this.arr = [
    //   [new Figure('v', 1), new Figure('k', 1), new Figure('s', 1), new Figure('Q', 1), new Figure('K', 1), new Figure('s', 1), new Figure('k', 1), new Figure('v', 1)],
    //   [new Figure('p', 1), new Figure('p', 1), new Figure('p', 1), new Figure('p', 1), new Figure('p', 1), new Figure('p', 1), new Figure('p', 1), new Figure('p', 1)],
    //   [null, null, new Figure('p', 0), null, null, null, null, null],
    //   [null, null, null, null, null, null, null, null],
    //   [null, new Figure('p', 1), null, null, null, null, null, null],
    //   [new Figure('p', 0), null, null, new Figure('p', 1), null, new Figure('p', 1), null, null],
    //   [new Figure('p', 0), new Figure('p', 0), new Figure('p', 0), new Figure('p', 0), new Figure('p', 0), new Figure('p', 0), new Figure('p', 0), new Figure('p', 0)],
    //   [new Figure('v', 0), new Figure('k', 0), new Figure('s', 0), new Figure('Q', 0), new Figure('K', 0), new Figure('s', 0), new Figure('k', 0), new Figure('v', 0)]
    // ];

    // // test pesiaci
    //  this.arr = [
    //   [new Figure('p', 0), new Figure('k', 1), new Figure('s', 1), new Figure('Q', 1), new Figure('K', 1), new Figure('s', 1), new Figure('k', 1), new Figure('v', 1)],
    //   [new Figure('p', 1), new Figure('p', 1), new Figure('p', 1), new Figure('p', 1), new Figure('p', 1), new Figure('p', 1), new Figure('p', 1), new Figure('p', 1)],
    //   [new Figure('p', 1), null, new Figure('p', 0), null, null, null, null, new Figure('p', 1)],
    //   [null, new Figure('p', 0), null, null, null, null, new Figure('p', 0), null],
    //   [null, new Figure('p', 1), null, null, null, null, new Figure('p', 1), null],
    //   [new Figure('p', 0), null, null, new Figure('p', 1), null, new Figure('p', 1), null, new Figure('p', 0)],
    //   [new Figure('p', 0), new Figure('p', 0), new Figure('p', 0), new Figure('p', 0), new Figure('p', 0), new Figure('p', 0), new Figure('p', 0), new Figure('p', 0)],
    //   [new Figure('p', 1), new Figure('k', 0), new Figure('s', 0), new Figure('Q', 0), new Figure('K', 0), new Figure('s', 0), new Figure('k', 0), new Figure('v', 0)]
    // ];

//test veze
    // this.arr = [
    //   [new Figure('v', 1), new Figure('k', 1), new Figure('s', 1), new Figure('Q', 1), new Figure('K', 1), new Figure('s', 1), new Figure('k', 1), new Figure('v', 1)],
    //   [null, new Figure('p', 1), new Figure('p', 1), new Figure('p', 1), new Figure('p', 1), new Figure('p', 1), new Figure('p', 1), null],
    //   [null, null, null, null, null, null, null, null],
    //   [null, null, new Figure('v', 1), null, null, null, null, new Figure('v', 0)],
    //   [null, null, null, null, null, new Figure('v', 0), null, null],
    //   [null, null, null, null, null, null, null, null],
    //   [null, new Figure('p', 0), new Figure('p', 0), new Figure('p', 0), new Figure('p', 0), new Figure('p', 0), new Figure('p', 0), null],
    //   [new Figure('v', 0), new Figure('k', 0), new Figure('s', 0), new Figure('Q', 0), new Figure('K', 0), new Figure('s', 0), new Figure('k', 0), new Figure('v', 0)]
    // ];

  //test kone
    // this.arr = [
    //   [new Figure('v', 1), new Figure('k', 1), new Figure('s', 1), new Figure('Q', 1), new Figure('K', 1), new Figure('s', 1), new Figure('k', 1), new Figure('v', 1)],
    //   [new Figure('p', 1), new Figure('p', 1), new Figure('p', 1), new Figure('p', 1), new Figure('p', 1), new Figure('p', 1), new Figure('p', 1), new Figure('p', 1)],
    //   [null, null, null, null, null, null, null, null],
    //   [null, null, new Figure('k', 0), null, null, new Figure('k', 1), null, null],
    //   [null, null, new Figure('k', 1), null, null,  new Figure('k', 0), null, null],
    //   [null, new Figure('p', 1), null, new Figure('p', 1), null, null, null, null],
    //   [new Figure('p', 0), new Figure('p', 0), new Figure('p', 0), new Figure('p', 0), new Figure('p', 0), new Figure('p', 0), new Figure('p', 0), new Figure('p', 0)],
    //   [new Figure('v', 0), new Figure('k', 0), new Figure('s', 0), new Figure('Q', 0), new Figure('K', 0), new Figure('s', 0), new Figure('k', 0), new Figure('v', 0)]
    // ];
    
    
    // //test strelci
    // this.arr = [
    //   [new Figure('v', 1), new Figure('k', 1), new Figure('s', 1), new Figure('Q', 1), new Figure('K', 1), new Figure('s', 1), new Figure('k', 1), new Figure('v', 1)],
    //   [new Figure('p', 1), new Figure('p', 1), new Figure('p', 1), new Figure('p', 1), new Figure('p', 1), new Figure('p', 1), new Figure('p', 1), new Figure('p', 1)],
    //   [null, null, null, null, null, null, null, null],
    //   [null, null, null, null, null, null, null, null],
    //   [null, null, new Figure('s', 1), new Figure('s', 1), new Figure('s', 1), null, null, null],
    //   [null, null, null, null, null, null, null, null],
    //   [new Figure('p', 0), new Figure('p', 0), new Figure('p', 0), new Figure('p', 0), new Figure('p', 0), new Figure('p', 0), new Figure('p', 0), new Figure('p', 0)],
    //   [new Figure('v', 0), new Figure('k', 0), new Figure('s', 0), new Figure('Q', 0), new Figure('K', 0), new Figure('s', 0), new Figure('k', 0), new Figure('v', 0)]
    // ];


    //test kralovna a kral
    this.arr = [
      [new Figure('v', 1), new Figure('k', 1), new Figure('s', 1), new Figure('Q', 1), new Figure('K', 1), new Figure('s', 1), new Figure('k', 1), new Figure('v', 1)],
      [new Figure('p', 1), new Figure('p', 1), new Figure('p', 1), new Figure('p', 1), new Figure('p', 1), new Figure('p', 1), new Figure('p', 1), new Figure('p', 1)],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, new Figure('Q', 1), null, null, null, new Figure('K', 1), null],
      [null, null, null, null, null, null, null, null],
      [new Figure('p', 0), new Figure('p', 0), new Figure('p', 0), new Figure('p', 0), new Figure('p', 0), new Figure('p', 0), new Figure('p', 0), new Figure('p', 0)],
      [new Figure('v', 0), new Figure('k', 0), new Figure('s', 0), new Figure('Q', 0), new Figure('K', 0), new Figure('s', 0), new Figure('k', 0), new Figure('v', 0)]
    ];








  }
}