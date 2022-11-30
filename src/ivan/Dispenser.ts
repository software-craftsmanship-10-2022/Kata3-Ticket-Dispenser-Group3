import Ticket from "./Ticket"

export default interface Dispenser {
    getTurn(): Ticket
    getNextTurn(): Ticket
    clear(): void
}