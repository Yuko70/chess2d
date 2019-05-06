import Figure from './figure';

export default class Board {
  constructor() {
    this.arr = [
      [new Figure('v', 1), new Figure('k', 1), new Figure('s', 1), new Figure('Q', 1), new Figure('K', 1), new Figure('s', 1), new Figure('k', 1), new Figure('v', 1)],
      [new Figure('p', 1), new Figure('p', 1), new Figure('p', 1), new Figure('p', 1), new Figure('p', 1), new Figure('p', 1), new Figure('p', 1), new Figure('p', 1)],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, new Figure('p', 1), null, null, null, null, null, null],
      [new Figure('p', 0), null, null, null, null, null, null, null],
      [new Figure('p', 0), new Figure('p', 0), new Figure('p', 0), new Figure('p', 0), new Figure('p', 0), new Figure('p', 0), new Figure('p', 0), new Figure('p', 0)],
      [new Figure('v', 0), new Figure('k', 0), new Figure('s', 0), new Figure('Q', 0), new Figure('K', 0), new Figure('s', 0), new Figure('k', 0), new Figure('v', 0)]
    ];
  }
}