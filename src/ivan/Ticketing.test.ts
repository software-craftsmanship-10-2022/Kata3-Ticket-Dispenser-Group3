import Ticket from "./Ticket";
import Ticketing from "./Ticketing"
import TurnNumberBasedSequence from "./Sequence/TurnNumberBasedSequence";

describe('Given a Ticketing system', () => {
    let sequence: TurnNumberBasedSequence
    let firstTicketingSystem: Ticketing
    let secondTicketingSystem: Ticketing
    let thirdTicketingSystem: Ticketing

    beforeEach(() => {
      sequence = new TurnNumberBasedSequence()
      firstTicketingSystem = new Ticketing(sequence)
      secondTicketingSystem = new Ticketing(sequence)
      thirdTicketingSystem = new Ticketing(sequence)
    })
    it('should give number 1 as the first turn', () => {
        // ARRANGE
        const expectedTurn = 1

        // ACT
        const turn: Ticket = firstTicketingSystem.getTurn()

        // ASSERT
        expect(turn.value()).toBe(expectedTurn)
    })

    it('should increase by 1 when asking for a new turn', () => {
        // ARRANGE
        const expectedTurn = 2

        // ACT
        const turn = firstTicketingSystem.getNextTurn()

        // ASSERT
        expect(turn.value()).toBe(expectedTurn)
    })

    it('should give 2 consecutive numbers to two different customers', () => {
        // ARRANGE
        const firstCustomerExpectedTurn = 2
        const secondCustomerExpectedTurn = 3

        // ACT
        const firstCustomerTurn = firstTicketingSystem.getNextTurn()
        const secondCustomerTurn = firstTicketingSystem.getNextTurn()

        // ASSERT
        expect(firstCustomerTurn.value()).toBe(firstCustomerExpectedTurn)
        expect(secondCustomerTurn.value()).toBe(secondCustomerExpectedTurn)
    })

    it('should give consective numbers on different ticketing systems with the same sequence', () => {
        // ARRANGE
        const oneTicketingExpectedTurn = 2
        const secondTicketingExpectedTurn = 3
        const thirdTicketingExpectedTurn = 4

        // ACT
        const oneTicketingTurn = firstTicketingSystem.getNextTurn()
        const secondTicketingTurn = secondTicketingSystem.getNextTurn()
        const thirdTicketingTurn = thirdTicketingSystem.getNextTurn()

        // ASSERT
        expect(oneTicketingTurn.value()).toBe(oneTicketingExpectedTurn)
        expect(secondTicketingTurn.value()).toBe(secondTicketingExpectedTurn)
        expect(thirdTicketingTurn.value()).toBe(thirdTicketingExpectedTurn)
    })

    it('should reset the sequence when clearing it', () => {
        // ARRANGE
        const beforeClearingExpectedTurn = 4
        const afterClearingExpectedTurn = 1

        // ACT
        firstTicketingSystem.getNextTurn()
        firstTicketingSystem.getNextTurn()
        firstTicketingSystem.getNextTurn()
        const beforeClearingTurn = firstTicketingSystem.getTurn()

        firstTicketingSystem.clear()
        const afterClearingTurn = firstTicketingSystem.getTurn()

        // ASSERT
        expect(beforeClearingTurn.value()).toBe(beforeClearingExpectedTurn)
        expect(afterClearingTurn.value()).toBe(afterClearingExpectedTurn)
    })
})