import Dispenser from "./Dispenser"
import Sequence from "./Sequence/Sequence"

export default class Ticketing implements Dispenser {
    private turn

    constructor(private sequence: Sequence) {
        this.turn = this.sequence.clear()
    }

    getTurn(): number {
        return this.turn
    }

    getNextTurn(): number {
        this.turn = this.sequence.ask()
        return this.turn
    } 

    clear() {
        this.turn = this.sequence.clear()
    }
}