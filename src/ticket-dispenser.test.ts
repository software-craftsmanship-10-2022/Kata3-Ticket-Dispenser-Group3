import Dispenser from "./ticket-dispenser";

const TurnNumberSequence = require("./turn-number-sequence");
jest.mock("./turn-number-sequence");
const TicketDispenser = require("./ticket-dispenser");
jest.mock("./ticket-dispenser");

describe("given a TicketDispenser", () => {
  beforeEach(() => {
    (TurnNumberSequence as jest.Mock).mockClear();
    (TicketDispenser as jest.Mock).mockClear();
  });

  test("should be able to dispense a turn ticket", () => {
    const dispenser = new Dispenser(TurnNumberSequence, TicketDispenser);
    const ticket = dispenser.getTurnTicket();
    expect(ticket.getTicketNumber()).toBe(0);
  });
  test("when called in sequence turn number should increase", () => {
    const dispenser = new Dispenser(TurnNumberSequence, TicketDispenser);
    const ticket1 = dispenser.getTurnTicket();
    expect(ticket1.getTicketNumber()).toBe(0);
    const ticket2 = dispenser.getTurnTicket();
    expect(ticket2.getTicketNumber()).toBe(1);
  });
  test("two separate dispensers shoud return consecutive numbers", () => {
    const dispenser1 = new Dispenser(TurnNumberSequence, TicketDispenser);
    const dispenser2 = new Dispenser(TurnNumberSequence, TicketDispenser);
    const ticket1 = dispenser1.getTurnTicket();
    const ticket2 = dispenser2.getTurnTicket();
    expect(ticket1.getTicketNumber()).toBe(0);
    expect(ticket2.getTicketNumber()).toBe(1);
  });
});
