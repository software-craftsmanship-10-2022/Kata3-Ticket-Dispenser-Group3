import Sequence from "./Sequence";

export default class TurnNumberBasedSequence implements Sequence {
    private turn: number;

    constructor() {
        this.turn = this.clear()
    }

    get(): number {
        return this.turn
    }
    
    ask(): number {
        this.turn++
        return this.turn
    }

    clear(): number {
        this.turn = 1
        return this.turn
    }
}