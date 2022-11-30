export default interface Dispenser {
    getTurn(): number
    getNextTurn(): number
    clear(): void
}