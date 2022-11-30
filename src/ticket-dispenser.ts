import { SequenceType } from "./turn-number-sequence";
import { TicketType, TurnTicket } from "./turn-ticket";

export type Dispenser = {
  getTurnTicket(): TicketType;
};
export class TicketDispenser implements Dispenser {
  private sequence: SequenceType;

  constructor(sequence: SequenceType) {
    this.sequence = sequence;
  }

  public getTurnTicket() {
    const newTurnNumber = this.sequence.getNextNumber();
    const newTurnTicket = new TurnTicket(newTurnNumber);

    return newTurnTicket;
  }
}
