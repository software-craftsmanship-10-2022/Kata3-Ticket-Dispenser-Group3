import TurnTicket from "./turn-ticket";

describe("given a TurnTicket", () => {
  it("getTicketNumber number should return a number", () => {
    const turnTicket = new TurnTicket(0);
    expect(turnTicket.getTicketNumber()).toEqual(expect.any(Number));
  });
  it("getTicketNumber should return the same number that initializes the ticket", () => {
    const turnTicket = new TurnTicket(3);
    expect(turnTicket.getTicketNumber()).toBe(3);
  });
  it("a ticket's number should return the same number every time getTicketNumber is called ", () => {
    const turnTicket = new TurnTicket(2);
    expect(turnTicket.getTicketNumber()).toBe(2);
    expect(turnTicket.getTicketNumber()).toBe(2);
  });
});
