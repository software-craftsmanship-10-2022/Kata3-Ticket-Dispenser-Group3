export type TicketType = {
  getTicketNumber(): number;
};

export class TurnTicket implements TicketType {
  private ticketNumber: number;
  constructor(number: number) {
    this.ticketNumber = number;
  }
  public getTicketNumber() {
    return this.ticketNumber;
  }
}
