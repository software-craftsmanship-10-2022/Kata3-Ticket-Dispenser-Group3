import { Sequence } from "./turn-number-sequence";
import { Ticket } from "./turn-ticket";

export default class Dispenser {
  private sequence: Sequence;
  private ticket: typeof Ticket;

  constructor(sequence: Sequence, ticket: typeof Ticket) {
    this.sequence = sequence;
    this.ticket = ticket;
  }

  public getTurnTicket() {
    const newTurnNumber = this.sequence.getNextNumber();
    const newTurnTicket = new this.ticket(newTurnNumber);

    return newTurnTicket;
  }
}
