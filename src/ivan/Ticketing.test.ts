import Ticketing from "./Ticketing"
import TurnNumberBasedSequence from "./Sequence/TurnNumberBasedSequence";

describe('Given a Ticketing system', () => {
    const sequence = new TurnNumberBasedSequence()
    const firstTicketingSystem = new Ticketing(sequence)
    const secondTicketingSystem = new Ticketing(sequence)
    const thirdTicketingSystem = new Ticketing(sequence)

    beforeEach(() => {
        firstTicketingSystem.clear()
        secondTicketingSystem.clear()  
        thirdTicketingSystem.clear()
    })

    it('should give number 1 as the first turn', () => {
        // ASSING
        const expectedTurn = 1

        // ARRANGE
        const turn = firstTicketingSystem.getTurn()

        // ASSERT
        expect(turn).toBe(expectedTurn)
    })

    it('should increase by 1 when asking for a new turn', () => {
        // ASSING
        const expectedTurn = 2

        // ARRANGE
        const turn = firstTicketingSystem.getNextTurn()

        // ASSERT
        expect(turn).toBe(expectedTurn)
    })

    it('should give 2 consecutive numbers to two different customers', () => {
        // ASSIGN
        const firstCustomerExpectedTurn = 2
        const secondCustomerExpectedTurn = 3

        // ARRANGE
        const firstCustomerTurn = firstTicketingSystem.getNextTurn()
        const secondCustomerTurn = firstTicketingSystem.getNextTurn()

        // ASSERT
        expect(firstCustomerTurn).toBe(firstCustomerExpectedTurn)
        expect(secondCustomerTurn).toBe(secondCustomerExpectedTurn)
    })

    it('should give consective numbers on different ticketing systems with the same sequence', () => {
        // ASSING
        const oneTicketingExpectedTurn = 2
        const secondTicketingExpectedTurn = 3
        const thirdTicketingExpectedTurn = 4

        // ARRANGE
        const oneTicketingTurn = firstTicketingSystem.getNextTurn()
        const secondTicketingTurn = secondTicketingSystem.getNextTurn()
        const thirdTicketingTurn = thirdTicketingSystem.getNextTurn()

        // ASSERT
        expect(oneTicketingTurn).toBe(oneTicketingExpectedTurn)
        expect(secondTicketingTurn).toBe(secondTicketingExpectedTurn)
        expect(thirdTicketingTurn).toBe(thirdTicketingExpectedTurn)
    })

    it('should reset the sequence when clearing it', () => {
        // ASSIGN
        const beforeClearingExpectedTurn = 4
        const afterClearingExpectedTurn = 1

        // ARRANGE
        firstTicketingSystem.getNextTurn()
        firstTicketingSystem.getNextTurn()
        firstTicketingSystem.getNextTurn()
        const beforeClearingTurn = firstTicketingSystem.getTurn()

        firstTicketingSystem.clear()
        const afterClearingTurn = firstTicketingSystem.getTurn()

        // ASSERT
        expect(beforeClearingTurn).toBe(beforeClearingExpectedTurn)
        expect(afterClearingTurn).toBe(afterClearingExpectedTurn)
    })
})