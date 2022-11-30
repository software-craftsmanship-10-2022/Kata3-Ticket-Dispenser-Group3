import { TicketDispenser } from "./ticket-dispenser";
import { TurnNumberSequence } from "./turn-number-sequence";
import { TurnTicket } from "./turn-ticket";

describe("given a TicketDispenser", () => {
  let sequence = new TurnNumberSequence();
  beforeEach(() => {
    sequence = new TurnNumberSequence();
  });

  it("should be able to dispense a turn ticket", () => {
    const dispenser = new TicketDispenser(sequence);
    const ticket = dispenser.getTurnTicket();

    expect(ticket).toBeInstanceOf(TurnTicket);
  });
  it("when called in sequence the ticket's turn number should increase", () => {
    const dispenser = new TicketDispenser(sequence);
    const ticket1 = dispenser.getTurnTicket();
    expect(ticket1.getTicketNumber()).toBe(0);
    const ticket2 = dispenser.getTurnTicket();
    expect(ticket2.getTicketNumber()).toBe(1);
  });
  it("two separate dispensers with the same sequence shoud return turn tickets with consecutive numbers", () => {
    const dispenser1 = new TicketDispenser(sequence);
    const dispenser2 = new TicketDispenser(sequence);
    const ticket1 = dispenser1.getTurnTicket();
    const ticket2 = dispenser2.getTurnTicket();
    expect(ticket1.getTicketNumber()).toBe(0);
    expect(ticket2.getTicketNumber()).toBe(1);
  });
});
