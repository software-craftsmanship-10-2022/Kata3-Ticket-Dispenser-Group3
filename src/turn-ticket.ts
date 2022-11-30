export class Ticket {
  ticketNumber: number;
  constructor(number: number) {
    this.ticketNumber = number;
  }
  public getTicketNumber() {
    return this.ticketNumber;
  }
}

export default class TurnTicket extends Ticket {
  constructor(number: number) {
    super(number);
  }
}
