export type SequenceType = {
  getNextNumber(): number;
};

export class TurnNumberSequence implements SequenceType {
  private turnNumber: number;
  constructor() {
    this.turnNumber = 0;
  }
  public getNextNumber() {
    return this.turnNumber++;
  }
}
