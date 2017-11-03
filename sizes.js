export function completeBitBoardSize(bBSize) {
    const IntegerSIZE = 32;
    bBSize.length = Math.ceil(bBSize.numberOfBits / IntegerSIZE);
    bBSize.map = new Array(bBSize.numberOfBits);
    for (let i = 0; i < bBSize.numberOfBits; ++i) {
        let chunk = Math.floor(i / IntegerSIZE);
        bBSize.map[i] = {
            chunk: chunk,
            position: i - chunk * IntegerSIZE
        };
    }
}

const BitBoard64Bits = {
    numberOfBits: 64
};

const BitBoard96Bits = {
    numberOfBits: 96
};

const BitBoard128Bits = {
    numberOfBits: 128
};

completeBitBoardSize(BitBoard64Bits);
completeBitBoardSize(BitBoard96Bits);
completeBitBoardSize(BitBoard128Bits);

export BitBoard64Bits;
export BitBoard96Bits;
export BitBoard128Bits;