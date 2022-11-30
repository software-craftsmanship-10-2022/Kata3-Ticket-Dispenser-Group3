import Ticket from "./Ticket"
import Dispenser from "./Dispenser"
import Sequence from "./Sequence/Sequence"

export default class Ticketing implements Dispenser {
    private ticket: Ticket

    constructor(private sequence: Sequence) {
        this.ticket = new Ticket(this.sequence.clear())
    }

    getTurn(): Ticket {
        return this.ticket
    }

    getNextTurn(): Ticket {
        this.ticket = new Ticket(this.sequence.ask())
        return this.ticket
    } 

    clear(): void {
        this.ticket = new Ticket(this.sequence.clear())
    }
}