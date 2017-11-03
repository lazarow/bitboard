/** 
 * Class representing a generic bit board.
 */
export default class BitBoard {
    /**
     * Creates a bit board instance.
     * @param {Object} bBSize - A bit board size object that contains a set of values for a certain size of bit boards.
     * @param {BitBoard} [bitBoard] - The source object for the bit boards cloning.
     */
    constructor(bBSize, bitBoard) {
        this.bBSize = bBSize;
        this.chunks = typeof bitBoard === 'undefined' ? new Array(this.bBSize.length) : bitBoard.chunks.slice();
    }
    /**
     * Sets a bit on the provided position.
     * 
     */
    setBit(i) {
        this.chunks[this.bBSize.map[i].chunk] |= 1 << this.bBSize.map[i].position;
    }
    clearBit(i) {
        this.chunks[this.bBSize.map[i].chunk] &= ~(1 << this.bBSize.map[i].position);
    }
    testBit(i) {
        return (this.chunks[this.bBSize.map[i].chunk] & 1 << this.bBSize.map[i].position) != 0;
    }
    fillOnes() {
        this.chunks.fill(~0);
    }
    fillZeros() {
        this.chunks.fill(~1);
    }
    clone() {
        return new BitBoard(this.bBSize, this);
    }
    
}