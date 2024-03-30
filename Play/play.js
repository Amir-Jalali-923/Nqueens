
var n;
var board;
var defaultColors = ["#FBFADA", "#558062"];
function setUp()
{
    n = prompt("choose the board size(4-16)");
    n = Number(n);
    n = n > 16 ? 16:n;
    n = n < 4 ? 4:n;

    board = new Array(n);
    for (let i = 0; i < n; i++) {
        board[i] = new Array(n).fill(0);
    }
    
    console.log(board);

    let cordY = document.getElementById("cordY");
    let cordX = document.getElementById("cordX");
    let boardID = document.getElementById("board");
    let state = ["odd", "even"];

    for(let i = 0; i < n; i++)
    {
        for(let  j = 0; j < n; j++)
        {
            boardID.innerHTML += `<span id="${i}-${j}" class="${state[(i + j) % 2]}" onclick="placeQueen(${i},${j})" style="font-size:${120/n}px;"></span>`;
        }
        cordY.innerHTML += `<span id="y${i}" class="cordYElement" style="height:${500 / n}px;">${(String.fromCharCode(96 + n - i))}</span`;
        cordX.innerHTML += `<span id="x${i}" class="cordXElement" style="width:${500 / n}px;">${i + 1}</span>`;
    }

    boardID.style =`grid-template-columns: repeat(${n}, 1fr);grid-template-rows: repeat(${n}, 1fr);`;
}

function placeQueen(i, j)
{
    if(board[i][j] > 1)
    {
        board[i][j] = 0;
    }
    else
    {
        if(countQueens() < n)
            board[i][j] = 2;
        else
            window.alert(`you can not place more than ${n} queens.`);
    }
    updateBoard();
    drawBoard();
}

function drawBoard()
{
    for(let i = 0; i < n; i++)
    {
        for(let j = 0; j < n; j++)
        {
            let cord = document.getElementById(`${i}-${j}`);
            if(board[i][j] > 1)
            {
                cord.innerHTML = `<img src="../Queen.png">`;
            }
            
            else if(board[i][j] == 1)
            {
                cord.textContent = "⚫";
            }
            
            else if(board[i][j] == 0)
            {
                cord.innerHTML = "";
            }

            if(board[i][j] == 3)
            {
                cord.style.backgroundColor = "#FF0000";
            }
            else
            {
                cord.style.backgroundColor = defaultColors[(i + j) % 2];
            }   
        }
    }
}

function updateBoard()
{
    // Unmarks the threatend squares
    for(let i = 0; i < n; i++)
    {
        for(let j = 0; j < n; j++)
        {
            if(board[i][j] == 1)
            {
                board[i][j] = 0;
            }
            if(board[i][j] == 3)
            {
                board[i][j] = 2;
            }
        }
    }

    // Remarks the threatend squares
    for(let i = 0; i < n; i++)
    {
        for(let j = 0; j < n; j++)
        {
            if(board[i][j] > 1)
            {
                markThreat(i, j);
            }
        }
    }
    
}

function markThreat(row, col) 
{
    // Checks the vertical threats
    for (let i = 0; i < n; i++) 
    {
        if (i != row) 
        {
            if(board[i][col] > 1)
            {
                board[i][col] = 3;
                board[row][col] = 3;
            }
            else
            {
                board[i][col] = 1;
            }
        }
    }

    // Checks the horizontal threats
    for(let i = 0; i < n; i++)
    {
        if(i != col)
        {
            if(board[row][i] > 1)
            {
                board[row][i] = 3;
                board[row][col] = 3;
            }
            else
            {
                board[row][i] = 1;
            }
        }
    }

    // Checks the diagonal threats
    let sum = row + col;
    let diff = row - col;

    for (let i = 0; i < n; i++) 
    {
        if (i != row) 
        {
            for (let j = 0; j < n; j++) 
            {
                if (j != col && (i + j == sum || i - j == diff)) 
                {
                    if(board[i][j] > 1)
                    {
                        board[i][j] = 3;
                        board[row][col] = 3;
                    }
                    else
                    {
                        board[i][j] = 1;
                    }
                }
            }
        }
    }
}

function countQueens(){
    let queens = 0;
    for(let i = 0; i < n; i++)
    {
        for(let j = 0; j < n; j++)
        {
            if(board[i][j] > 1)
            {
                queens++
            }
        }
    }
    return queens;
}

setUp();