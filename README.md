# John Conway's Game of Life

Deployed App: https://game-of-life-39.vercel.app/

## About

This project is an implementation of the classic Game of Life, a cellular automaton devised by John Conway in 1970. The game is based on an initial configuration of cells, which then determines the state of each following generation based on several simple rules. The rules are as follows:

1. Any live cell with two or three live neighbours survives
2. Any dead cell with three live neighbours becomes a live cell
3. All other live cells die in the next generation. Similarly, all other dead cells stay dead

My implementation uses a 2D array to store the data for each cell.

## Usage

Users can set up the starting configuaration of the grid by clicking on cells to make them "alive". Users can also click and drag the mouse in order to modify many cells.

### Button functions
- the reset button is used to reset the grid to a blank grid, with every cell being "dead"
- the step forward and step backward buttons are used to increment or decrement the grid by one generation
- the play button is used to start the simulation. The grid will automatically step forward to the next generations
- the stop button is used to stop the simulation, allowing the user to interact with the grid and/or the other buttons
- the save button is for saving a custom preset. It will take the current state of the grid and save it to local storage so that custom presets are persisted throughout sessions.
- the three bottom buttons are for controlling the speed of the simulation (1x = 500ms, 2x = 250ms, 5x = 100ms)

## Tech Used

- React
- SASS

## Local installation

1. Clone this repo to your local machine
2. ```cd``` into the folder where this project is cloned
3. Run ```npm install``` to install project dependencies
4. Run ```npm start``` to spin up a local instance of the app
