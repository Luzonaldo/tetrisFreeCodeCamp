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
    ];

    const tTetromino = [
        [1, width, width+1, width+2],
        [1, width, width+1, width*2+1],
        [width, width+1, width+2, width*2+1],
        [1, width+1, width+2, width*2+1]
    ];

    const oTetromino = [
        [0, 1, width, width+1],
        [0, 1, width, width+1],
        [0, 1, width, width+1],
        [0, 1, width, width+1]
    ];
    
    const iTetromino = [
        [width, width+1, width+2, width+3],
        [1, width+1, width*2+1, width*3+1],
        [width, width+1, width+2, width+3],
        [1, width+1, width*2+1, width*3+1]
    ];
    
    const theTetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino];

    let currentPosition = 4;
    let currentRotation = 0;

    // randomly select  a tetromino and its first rotation
    let random = Math.floor(Math.random()*theTetrominoes.length)

    let current = theTetrominoes[random][currentRotation]; //[tetromino's shape] [array with the current rotation of the tetromino]

// draw the Tetromino

function draw () {
current.forEach(index => {
    squares[currentPosition + index].classList.add("tetromino");
    console.log(theTetrominoes[random][currentRotation]);
    console.log(squares[currentPosition + index]);

})

}

function undraw() {
    current.forEach (index => {
        squares[currentPosition + index].classList.remove('tetromino');
    })
}

// make tetromino move down every second -  setInterval function

timerId = setInterval(moveRight, 1000);


//event.keyCode is deprecated / use event.which instead.
//assign functions to keyCodes
function control(e) {
    switch (e.key) {
        //case "ArrowUp":
        //rotate();
        //break;
        case "ArrowLeft":
        moveLeft();
        break;
        case "ArrowRight":
        moveRight();
        break;
        case "ArrowDown":
        moveDown();
        break;
    } 
}



document.addEventListener('keydown', control);



//moveDown function
function moveDown() {
    undraw();
    currentPosition += width;
    draw();
    freeze();
    //draw();
}

//freeze function 
function freeze() {
    if(current.some(index => squares[currentPosition + index + width].classList.contains('taken'))) {
        current.forEach (index => squares[currentPosition + index].classList.add('taken'));
        //start a new tetromino falling
        random = Math.floor(Math.random() * theTetrominoes.length);
        current = theTetrominoes[random][currentRotation];
        currentPosition = 4;
        draw();
    }
}

//moveLeft function

function moveLeft () {
    undraw();
    const isAtLeftEdge = current.some( index => (currentPosition + index) % width === 0)

    if (!isAtLeftEdge) currentPosition -= 1;

    if (current.some (index => squares[currentPosition + index].classList.contains('taken')))
        currentPosition += 1;

    draw();

    }

    function moveRight() {
        undraw();
        const isAtRightEdge = current.some(index => (currentPosition + index) % width === width - 1)

        if(!isAtRightEdge) currentPosition += 1;

        if(current.some(index => squares[currentPosition + index].classList.contains('taken'))) {
            currentPosition -=1;
        }
        draw();
    }













})