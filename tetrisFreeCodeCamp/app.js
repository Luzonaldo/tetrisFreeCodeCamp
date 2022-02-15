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
    let currentRotation = 0;

    // randomly select  a tetromino and its first rotation
    let random = Math.floor(Math.random()*theTetrominoes.length)

    let current = theTetrominoes[random][0];

// draw the first rotation in the firs tetromino

function draw () {
current.forEach(index => {
    squares[curretPosition + index].classList.add("tetromino");
    console.log(index);

})

}

draw();




})