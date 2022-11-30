import Ticketing from "./Ticketing"
import TurnNumberBasedSequence from "./Sequence/TurnNumberBasedSequence";

describe('Given a Ticketing system', () => {
    beforeEach(() => {
    });


    it('should give number 1 as the first turn', () => {
        // ASSING
        const sequence = new TurnNumberBasedSequence()
        const ticketing = new Ticketing(sequence)
        const expectedTurn = 1

        // ARRANGE
        const turn = ticketing.getTurn()

        // ASSERT
        expect(turn).toBe(expectedTurn)
    })

    it('should increase by 1 when asking for a new turn', () => {
        // ASSING
        const sequence = new TurnNumberBasedSequence()
        const ticketing = new Ticketing(sequence)
        const expectedTurn = 2

        // ARRANGE
        const turn = ticketing.getNextTurn()

        // ASSERT
        expect(turn).toBe(expectedTurn)
    })

    it('should give 2 consecutive numbers to two different customers', () => {
        // ASSIGN
        const sequence = new TurnNumberBasedSequence()
        const ticketing = new Ticketing(sequence)
        const firstCustomerExpectedTurn = 2
        const secondCustomerExpectedTurn = 3

        // ARRANGE
        const firstCustomerTurn = ticketing.getNextTurn()
        const secondCustomerTurn = ticketing.getNextTurn()

        // ASSERT
        expect(firstCustomerTurn).toBe(firstCustomerExpectedTurn)
        expect(secondCustomerTurn).toBe(secondCustomerExpectedTurn)
    })

    it('should give consective numbers on different ticketing systems with the same sequence', () => {
        // ASSING
        const sequence = new TurnNumberBasedSequence()
        const oneTicketing = new Ticketing(sequence)
        const secondTicketing = new Ticketing(sequence)
        const thirdTicketing = new Ticketing(sequence)

        const oneTicketingExpectedTurn = 2
        const secondTicketingExpectedTurn = 3
        const thirdTicketingExpectedTurn = 4

        // ARRANGE
        const oneTicketingTurn = oneTicketing.getNextTurn()
        const secondTicketingTurn = secondTicketing.getNextTurn()
        const thirdTicketingTurn = thirdTicketing.getNextTurn()

        // ASSERT
        expect(oneTicketingTurn).toBe(oneTicketingExpectedTurn)
        expect(secondTicketingTurn).toBe(secondTicketingExpectedTurn)
        expect(thirdTicketingTurn).toBe(thirdTicketingExpectedTurn)
    })

    it('should reset the sequence when clearing it', () => {
        // ASSIGN
        const sequence = new TurnNumberBasedSequence()
        const ticketing = new Ticketing(sequence)
        const beforeClearingExpectedTurn = 4
        const afterClearingExpectedTurn = 1

        // ARRANGE
        ticketing.getNextTurn()
        ticketing.getNextTurn()
        ticketing.getNextTurn()
        const beforeClearingTurn = ticketing.getTurn()

        ticketing.clear()
        const afterClearingTurn = ticketing.getTurn()

        // ASSERT
        expect(beforeClearingTurn).toBe(beforeClearingExpectedTurn)
        expect(afterClearingTurn).toBe(afterClearingExpectedTurn)
    })
})