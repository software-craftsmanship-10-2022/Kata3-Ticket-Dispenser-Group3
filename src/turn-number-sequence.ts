export interface Sequence {
  getNextNumber(): number;
}

class TurnNumberSequence implements Sequence {
  private turnNumber: number;

  constructor() {
    this.turnNumber = 0;
  }

  public getNextNumber() {
    return this.turnNumber++;
  }
}

const sequence = new TurnNumberSequence();

export default sequence;
