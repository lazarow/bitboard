import { IntegerSIZE } from 'sizes';

/** 
 * Class representing a generic bit board.
 */
export default class BitBoard {
    /**
     * Creates a bit board instance.
     * @param {Object} bBSize A bit board size object that contains a set of values for a certain size of bit boards.
     * @param {BitBoard} [bitBoard] The source object for the bit boards cloning.
     */
    constructor(bBSize, bitBoard) {
        this.bBSize = bBSize;
        this.chunks = typeof bitBoard === 'undefined' ? new Array(this.bBSize.length) : bitBoard.chunks.slice();
    }
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
    /**
     * The union operation (or).
     * @param {BitBoard} bitBoard A bit board to union with.
     */
    or(bitBoard) {
        for (let i = 0; i < this.bBSize.length; ++i) {
            this.chunks[i] |= bitBoard.chunks[i];
        }
    }
    /**
     * The intersection operation (and).
     * @param {BitBoard} bitBoard A bit board to intersect with.
     */
    and(bitBoard) {
        for (let i = 0; i < this.bBSize.length; ++i) {
            this.chunks[i] &= bitBoard.chunks[i];
        }
    }
    /**
     * The exclusive or operation.
     * @param {BitBoard} bitBoard A bit board to operate with.
     */
    xor(bitBoard) {
        for (let i = 0; i < this.bBSize.length; ++i) {
            this.chunks[i] ^= bitBoard.chunks[i];
        }
    }
    /**
     * The complement operation.
     */
    neg() {
        for (let i = 0; i < this.bBSize.length; ++i) {
            this.chunks[i] = ~this.chunks[i];
        }
    }
    /**
     * The shift operation.
     * @params {number} shift The number of bit positions by which the bit board is to be shifted.
     */
    shift(shift) {
        let copy, shifted = 0;
        if (shift > 0) {
            for (let i = this.bBSize.length - 1; i >= 0 ; --i) {
                copy = this.chunks[i];
                this.chunks[i] = (this.chunks[i] >>> shift) | shifted;
                shifted = copy << (IntegerSIZE - shift);
            }
        } else {
            shift = Math.abs(shift);
            for (let i = 0; i < this.bBSize.length ; ++i) {
                copy = this.chunks[i];
                this.chunks[i] = (this.chunks[i] << shift) | shifted;
                shifted = copy >>> (IntegerSIZE - shift);
            }
        }
    }
    /**
     * The dilatation algorithm.
     * @see https://eprints.qut.edu.au/85005/1/__staffhome.qut.edu.au_staffgroupm%24_meaton_Desktop_bits-7.pdf
     * @params {number} shift The number of bit positions by which the bit board is to be shifted (direction).
     */
    dilation(shift) {
        let bitBoard = this.clone();
        this.shift(shift);
        this.or(bitboard);
    }
    /**
     * The erosion algorithm.
     * @see https://eprints.qut.edu.au/85005/1/__staffhome.qut.edu.au_staffgroupm%24_meaton_Desktop_bits-7.pdf
     * @params {number} shift The number of bit positions by which the bit board is to be shifted (direction).
     */
    erosion(shift) {
        let bitBoard = this.clone();
        this.shift(shift);
        this.and(bitboard);
    }
    /**
     * Compares bit boards.
     * @returns {boolean}
     */
    equals(bitBoard) {
        return (this.chunks.length == bitBoard.chunks.length) && this.chunks.every(function(element, index) {
            return element === bitBoard.chunks[index]; 
        });
    }
    /**
     * Returns a chunk by using the provided index.
     * @returns {number}
     */
    getChunk(index) {
        return chunks[index];
    }
    /**
     * Returns chunks as a single string.
     * @returns {String}
     */
    toString() {
        let chunks = '';
        for (let i = 0; i < this.bBSize.length; ++i) {
            chunks += String('0'.repeat(IntegerSIZE) + this.chunks[i]).slice(-IntegerSIZE);
        }
        return chunks;
    }
    /**
     * The static union operation (or).
     * @param {BitBoard} a The first bit board.
     * @param {BitBoard} b The second bit board.
     * @returns {BitBoard}
     */
    static Or(a, b) {
        bitBoard = a.clone();
        bitBoard.or(b);
        return bitBoard;
    }
    /**
     * The static intersection operation (and).
     * @param {BitBoard} a The first bit board.
     * @param {BitBoard} b The second bit board.
     * @returns {BitBoard}
     */
    static And(a, b) {
        bitBoard = a.clone();
        bitBoard.and(b);
        return bitBoard;
    }
    /**
     * The static exclusive or operation (xor).
     * @param {BitBoard} a The first bit board.
     * @param {BitBoard} b The second bit board.
     * @returns {BitBoard}
     */
    static And(a, b) {
        bitBoard = a.clone();
        bitBoard.xor(b);
        return bitBoard;
    }
    /**
     * The static complement operation (xor).
     * @param {BitBoard} a The first bit board.
     * @param {BitBoard} b The second bit board.
     * @returns {BitBoard}
     */
    static Neg(a) {
        bitBoard = a.clone();
        bitBoard.neg();
        return bitBoard;
    }
    /**
     * The static shift operation.
     * @param {BitBoard} a The bit board.
     * @params {number} shift The number of bit positions by which the bit board is to be shifted.
     * @returns {BitBoard}
     */
    static Shift(a, shift) {
        bitBoard = a.clone();
        bitBoard.shift(shift);
        return bitBoard;
    }
    /**
     * The static dilation algorithm.
     * @param {BitBoard} a The bit board.
     * @params {number} shift The number of bit positions by which the bit board is to be shifted.
     * @returns {BitBoard}
     */
    static Dilation(a, shift) {
        bitBoard = a.clone();
        bitBoard.dilation(shift);
        return bitBoard;
    }
    /**
     * The static erosion algorithm.
     * @param {BitBoard} a The bit board.
     * @params {number} shift The number of bit positions by which the bit board is to be shifted.
     * @returns {BitBoard}
     */
    static Erosion(a, shift) {
        bitBoard = a.clone();
        bitBoard.erosion(shift);
        return bitBoard;
    }
}