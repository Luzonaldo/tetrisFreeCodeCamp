document.addEventListener("DOMContentLoaded", () => {
    const grid = document.querySelector(".grid");
    let squares = Array.from(document.querySelectorAll(".grid div"));
    const ScoreDisplay = document.querySelector("#score");
    const StartBtn = document.querySelector("#start-button");
    const width = 10; // comprimento do grid altura = 20

    // tetrominoes

    const lTetromino = [
        [1, width+1, width*2+1, 2],
        [width,width+1, width+2, width*2+2],
        [1, width+1, width*2+1, width*2],
        [width, width*2, width*2+1, width*2+2]
    ]; // 1 array com 4 arrays indicando as rotações do tetrominoe L

    const zTetromino = [
        [width+1,width+2, width*2, width*2+1],
        [0, width, width+1, width*2+1],
        [width+1,width+2, width*2, width*2+1],
        [0, width, width+1, width*2+1]
    ]

    const tTetromino = [
        [1, width, width+1, width+2],
        [1, width, width+1, width*2+1],
        [width, width+1, width+2, width*2+1],
        [1, width+1, width+2, width*2+1]
    ]

    const oTetromino = [
        [0, 1, width, width+1],
        [0, 1, width, width+1],
        [0, 1, width, width+1],
        [0, 1, width, width+1]
    ]
    
    const iTetromino = [
        [width, width+1, width+2, width+3],
        [1, width+1, width*2+1, width*3+1],
        [width, width+1, width+2, width+3],
        [1, width+1, width*2+1, width*3+1]
    ]
    
    const theTetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino];

    let curretPosition = 4;
    let current = theTetrominoes[0][0];

    console.log(theTetrominoes[0][0])





})