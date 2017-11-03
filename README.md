# BitBoard

> The library for creating games bit boards.

## API Reference


### ../bitboard.js


#### new BitBoard() 

Class representing a generic bit board.






##### Returns


- `Void`



#### BitBoard.constructor(bBSize[, bitBoard]) 

Creates a bit board instance.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| bBSize | `Object`  | A bit board size object that contains a set of values for a certain size of bit boards. | &nbsp; |
| bitBoard | `BitBoard`  | The source object for the bit boards cloning. | *Optional* |




##### Returns


- `Void`



#### BitBoard.or(bitBoard) 

The union operation (or).




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| bitBoard | `BitBoard`  | A bit board to union with. | &nbsp; |




##### Returns


- `Void`



#### BitBoard.and(bitBoard) 

The intersection operation (and).




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| bitBoard | `BitBoard`  | A bit board to intersect with. | &nbsp; |




##### Returns


- `Void`



#### BitBoard.xor(bitBoard) 

The exclusive or operation.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| bitBoard | `BitBoard`  | A bit board to operate with. | &nbsp; |




##### Returns


- `Void`



#### BitBoard.neg() 

The complement operation.






##### Returns


- `Void`



#### BitBoard.shift() 

The shift operation.






##### Returns


- `Void`



#### BitBoard.dilation() 

The dilatation algorithm.






##### Returns


- `Void`



#### BitBoard.erosion() 

The erosion algorithm.






##### Returns


- `Void`



#### BitBoard.equals() 

Compares bit boards.






##### Returns


- `boolean`  



#### BitBoard.getChunk() 

Returns a chunk by using the provided index.






##### Returns


- `number`  



#### BitBoard.toString() 

Returns chunks as a single string.






##### Returns


- `String`  



#### BitBoard.Or(a, b) 

The static union operation (or).




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| a | `BitBoard`  | The first bit board. | &nbsp; |
| b | `BitBoard`  | The second bit board. | &nbsp; |




##### Returns


- `BitBoard`  



#### BitBoard.And(a, b) 

The static intersection operation (and).




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| a | `BitBoard`  | The first bit board. | &nbsp; |
| b | `BitBoard`  | The second bit board. | &nbsp; |




##### Returns


- `BitBoard`  



#### BitBoard.And(a, b) 

The static exclusive or operation (xor).




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| a | `BitBoard`  | The first bit board. | &nbsp; |
| b | `BitBoard`  | The second bit board. | &nbsp; |




##### Returns


- `BitBoard`  



#### BitBoard.Neg(a, b) 

The static complement operation (xor).




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| a | `BitBoard`  | The first bit board. | &nbsp; |
| b | `BitBoard`  | The second bit board. | &nbsp; |




##### Returns


- `BitBoard`  



#### BitBoard.Shift(a) 

The static shift operation.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| a | `BitBoard`  | The bit board. | &nbsp; |




##### Returns


- `BitBoard`  



#### BitBoard.Dilation(a) 

The static dilation algorithm.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| a | `BitBoard`  | The bit board. | &nbsp; |




##### Returns


- `BitBoard`  



#### BitBoard.Erosion(a) 

The static erosion algorithm.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| a | `BitBoard`  | The bit board. | &nbsp; |




##### Returns


- `BitBoard`  




## Licensing

MIT