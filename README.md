# N-Queens Website
#### Video Demo:  <https://youtu.be/Rzx8tqa3_T0>
#### Description:

Welcome to the N-Queens Website README! Here, you'll find comprehensive documentation for the N-Queens Solver and N-Queens game, two JavaScript-based applications designed to tackle the classic N-Queens problem. Read on to explore their features, functionalities, and how to interact with them.

## script.js:
### Introduction:
The 8-Queens Solver is a JavaScript-based application that provides a solution for the classic 8-Queens problem. This problem involves placing 8 queens on an 8×8 chessboard such that no two queens threaten each other. This application allows users to visualize the placement of queens on the board and provides functionality to explore different solutions.

### Features:
Interactive Chessboard: Users can see the placement of queens on the 8×8 chessboard.
Solution Navigation: Users can navigate through different solutions using the "Next" and "Previous" buttons.
Visual Feedback: Queens are represented by images on the chessboard, providing a clear visualization of the solutions.
Solution Count: The application displays the total number of solutions found out of the possible 92 solutions.

### Usage:
Setting Up: Upon loading the application, the initial solution is displayed on the chessboard.
Navigation: Users can click the "Next" button to view the next solution or the "Previous" button to view the previous solution.
Visualization: Queens are visually represented by images on the chessboard.
Solution Count: The application displays the current solution index out of the total possible solutions (92).
Board Representation
Format: The chessboard is represented as an 8x8 grid of HTML <span> elements.
Visualization: Queens are represented by images of crowns on the squares where they are placed.

### Code Structure:
Initialization: The setUp() function initializes the chessboard grid and solution counter.
Queen Placement: The placeQueen() function recursively finds valid queen placements for each column.
Navigation Functions: The next() and previous() functions allow users to navigate through different solutions.
Queen Placement Check: The checkQueen() function checks if placing a queen at a specific position is valid.
Drawing the Board: The drawBoard() function updates the visual representation of the board with queen placements.
Solution Count Update: The updateSolutionCount() function updates the displayed solution count.


## play.js:
Introduction:
The N-Queens game is a JavaScript-based application that provides an interactive solution for the N-Queens problem. This problem involves placing N queens on an N×N chessboard such that no two queens threaten each other. This application allows users to visualize the placement of queens on the board and provides visual feedback on threatened squares.

### Features:
Interactive Chessboard: Users can click on individual squares of the chessboard to place or remove queens.
Customizable Board Size: Users can choose the size of the chessboard within the range of 4 to 16.
Visual Feedback: Threatened squares are highlighted to provide feedback on the validity of queen placements.
Responsive Design: The interface adapts dynamically based on the chosen board size, ensuring a consistent user experience across devices.

### Usage:
Setting Up: Upon loading the application, users are prompted to choose the size of the chessboard.
Placing Queens: Clicking on any square of the chessboard will either place a queen if the square is empty or remove a queen if already placed.
Visual Feedback: Threatened squares are highlighted in red, indicating conflicts with existing queen placements.
Exploration: Users can experiment with different queen placements to find valid solutions or explore the constraints of the N-Queens problem.

### Board Representation:
Format: The chessboard is represented as a 2D array (board) in JavaScript.
Values:
0: Empty square
1: Threatened square
2: Queen
3: Threatened queen

### Code Structure:
Initialization: The setUp() function initializes the chessboard and sets up the user interface.
Queen Placement: The placeQueen() function manages the placement and removal of queens on the board.
Visual Representation: The drawBoard() function updates the visual representation of the board based on queen placements.
Threat Detection: The updateBoard() function identifies threatened squares and updates the board accordingly.
Threat Marking: The markThreat() function marks squares threatened by a queen's placement, considering vertical, horizontal, and diagonal threats.

We hope this README provides you with a clear understanding of the N-Queens Solver and N-Queens game. If you have any questions, feedback, or encounter any issues, please don't hesitate to reach out. Thank you for exploring our N-Queens Website!

## Contact:
Amir.jalali.50500@gmail.com