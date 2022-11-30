import Dispenser from "./ticket-dispenser";
import { Sequence } from "./turn-number-sequence";
import TurnTicket, { Ticket } from "./turn-ticket";

class fakeSequence extends Sequence {
  resetSequence() {
    this.turnNumber = 0;
  }
}
describe("given a Dispenser", () => {
  let sequence = new fakeSequence();
  beforeEach(() => {
    sequence.resetSequence();
  });

  it("should be able to dispense a turn ticket", () => {
    const dispenser = new Dispenser(sequence, TurnTicket);
    const ticket = dispenser.getTurnTicket();

    expect(ticket).toBeInstanceOf(Ticket);
  });
  it("when called in sequence the ticket's turn number should increase", () => {
    const dispenser = new Dispenser(sequence, TurnTicket);
    const ticket1 = dispenser.getTurnTicket();
    expect(ticket1.getTicketNumber()).toBe(0);
    const ticket2 = dispenser.getTurnTicket();
    expect(ticket2.getTicketNumber()).toBe(1);
  });
  it("two separate dispensers shoud return turn tickets with consecutive numbers", () => {
    const dispenser1 = new Dispenser(sequence, TurnTicket);
    const dispenser2 = new Dispenser(sequence, TurnTicket);
    const ticket1 = dispenser1.getTurnTicket();
    const ticket2 = dispenser2.getTurnTicket();
    expect(ticket1.getTicketNumber()).toBe(0);
    expect(ticket2.getTicketNumber()).toBe(1);
  });
});
