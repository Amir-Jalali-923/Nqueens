function setUp()
{
    let cordY = document.getElementById("cordY");
    let cordX = document.getElementById("cordX");
    let boardID = document.getElementById("board");
    let state = ["odd", "even"];
    for(let i = 0; i < 8; i++)
    {
        for(let  j = 0; j < 8; j++)
        {
            boardID.innerHTML += `<span id="${i}-${j}" class="${state[(i + j) % 2]}"></span>`;
        }
        cordY.innerHTML += `<span id="${(String.fromCharCode(104 - i))}" class="cordYElement">${(String.fromCharCode(104 - i))}</span`;
        cordX.innerHTML += `<span id="${i + 1}" class="cordXElement">${i + 1}</span>`;
    }
}

function clean() 
{
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            let spanID = document.getElementById(`${i}-${j}`);
            spanID.innerHTML = "";
        }
    }
}


var board = new Array(8);
let stopExecution = false;
let solutionIndex = 0;
let currentSolution = 0;

function placeQueen(column) {
    if (column == 8) {
        if(currentSolution < solutionIndex)
        {
            currentSolution++;
            return;
        }
        clean();
        drawBoard();
        stopExecution = true; // Stop execution when a solution is found
    }

    for (let row = 0; row < 8; row++) {
        if (stopExecution) return; // Stop execution if flag is set

        if (checkQueen(column, row)) {
            board[column] = row;
            placeQueen(column + 1);
        }
    }
}

function next() 
{
    stopExecution = false;
    currentSolution = 0;
    if(solutionIndex < 91)
        solutionIndex++;
    placeQueen(0);
    updateSolutionCount();
}

function previous()
{
    if(solutionIndex > 0)
        solutionIndex --;
    currentSolution = 0;
    stopExecution = false;
    placeQueen(0)
    updateSolutionCount();
}

function checkQueen(col, row)
{
    let sum = col + row;
    let diff = col - row;

    for(let i = 0; i < col; i++)
    {
        if(board[i] == row || i + board[i] == sum || i - board[i] == diff)
            return false;
    }
    return true;

}
function drawBoard()
{
    for(let i = 0; i < 8; i++)
    {
        let square = document.getElementById(`${i}-${board[i]}`);
        square.innerHTML = `<img src="Queen.png">`;
    }
}

function updateSolutionCount()
{
    let count = document.getElementById("solutionCounter");
    count.innerText = `${solutionIndex + 1}/92`;
}
setUp();
placeQueen(0);