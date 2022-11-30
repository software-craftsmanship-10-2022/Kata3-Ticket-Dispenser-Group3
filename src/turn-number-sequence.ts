export class Sequence {
  private turnNumber: number;
  constructor() {
    this.turnNumber = 0;
  }
  public getNextNumber() {
    return this.turnNumber++;
  }
}

export class TurnNumberSequence extends Sequence {
  constructor() {
    super();
  }
}

const sequence = new TurnNumberSequence();

export default sequence;
