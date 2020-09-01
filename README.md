[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# xO ticTacToe Ox: A Description
This Application allows a user to play a game of tic tac toe against themself.  It tracks
the number of games you play, who wins those games, and allows you to have your own
secure account.  It communicates with an API which keeps a record of all games that you have played.
You can recall those games at any time.

## Planning Story
In order to meet the requirements of the tic tac toe project, one had to take a strategic approach to  each challenge along the way.
The first area that I wanted to tackle was the registration end of functionality.  Here, I started with running the curl scripts of all API calls.  Following their success, I began putting together the necessary components for user functionality.  Starting with the HTML boiler plate, and the necessary divs, forms, and input items I started to lay out the page and an identification system for future collaboration with javascript (JS) and CSS. This was done through the use of classes.
The next step was to create click events that tied to the classes of the forms, for communication to occur with JS.  I created an app.js file, events file, api file, and ui file to handle all of the operations of JS for the authorization and registration events that a user would like to perform.  Using jQuery, I tied the HTML with the app.js file, which was the principle communication between the a users
action and the start of JS functionality.
After successful completion of the registration process, I started to work under the hood of the game.  I created a game.js file to serve as the main file to handle all operations required for the game to run locally.
This is where I started to draw out pseudocode for the game.  I created a checklist off of the requirements to manage my daily agenda. I set up my curl scripts for game functionality to test the API.  Once completed succesfully, I started to put the game code into action. I set up event handlers in my app.js file and then in the events.js for my new game and cell click. In my HTML I created a new game input button and started putting together a tic tac toe board.  I did this using bootstrap functionality and CSS to create the appropriate borders for the game board.  For each cell, I attached a data element so that they can be identified and used by JS for responsiveness and for input into the game.
Working on the getting the right letters into the game was a task that worked pretty seemlessly with the data structures.  Where I found difficulty at first was making it so that the cells would only be able to be clicked once.  I started with the .one jQuery function, which served as an issue later on in my game.  When starting a new game, it would not allow you to click the cells again.  This was later fixed with the use of the on function, but tying it to the algorithm of the game.
When looking under the hood of the game, I started off by figuring out what I needed to determine how the game was to be won locally.  I realized that I needed to send out a cell index (which was captured with the dataCellIndex value from the clicked HTML cell), the player (who needed to start off as X), and whether the game was over or not.  I defined a gameOn variable (which determined whether the game was actively playable or not), an over variable (to determine if the game had ended), a player variable (to identify to current player value to be put into the cell/function), and an array of arrays named checkBoard of winning scenarios.  I figured this out on paper, by writing out potential winning scenarios and their corresponding cells.  Once I have these, I would have scenarios to compare the game board to each input of those particular cells.  I initially started off with a gameboard defined in the app, but decided to change that to use the response from the API (which was stored in the store file) later on to clean it up and to have consistency.
For the cellClick function in game, this took gameEvents.player, dataCellIndexInt, store.gameBoard, gameEvents.gameOn, event.target and sent it through the function to process the click.  It first checked to make sure whether or not the player had an assignment.  If they did not, it assigned them as 'X' to start the game.  I used a lot of console logs throughout the process to double check the player variable throughout, along with responses from the API, and various other variables.  It then checked whether the cell was open and if the game was active.  If it passed this conditional, it took the cell and added the players current value on the HTML, confirmed the move with the client, and then changed the player based on the current value of player.  It then took the board and gameStatus value into the didSomeoneWin function to determine a winner or if there was a tie on the current move.  This defined a local variable of playerWon as false to set a baseline that the function will use later in a conditional.  It then iterated through the checkBoard of winning possibilities.  It went through each scenario and assigned a variable to each index written in checkBoard and used that for the index of the gameBoard.  If the three variable assigned by the checkBoard were equal on the gameBoard, that would declare a winner.  If it passed through this without a winner, it would continue on to the next move.  If it was the last move, it would move on to the tie check which was triggered by another conditional if the gameBoard had no more blank spaces on the board ('').  In both the playerWon condition or the tie condition, over was set to true, status to false and gameOn to false.  The user was then told via HTML the result of the game.  When it is sent back to the cellClick function, a data structure was created to be sent to the api.updateGame function to update the API and gameBoard.  This was then sent to the ui file to a function onUpdateGameSuccess, which took the response an updated the gameBoard in the stored object in store.js.
The store file was used throughout the functionality of the game.  This was used to hold the user object after sign in which was important for the token to use in all API functionality.  The store was also used to keep track of the game board, the game ID, and the amount of games played, which used length of the array of games.  Once again, console logs were used throughout this process to ensure accuracy of decisions.


### User Stories
1. As a user, I want to be able to create an account so that I can play the game as me.
2. As a user, I want to know what the outcome of the game is so that I know who wins.
3. As a user, I want to have my own account that noone else has access to.
4. As a user, I want a way to change my password so that I can keep my account safe.
5. As a user, I want an easy way to start a new game so that when the game is finished I can continue to play.
6. As a user, I want to know how many games I have played.
7. As a user, I want to be able to sign out of my account.

### Technologies used
1. html
2. JavaScript
3. CSS/sass
4. jquery
5. Bootstrap
6. json

### Unsolved Problems
- Display number of wins for each player
- Add styling
- Compete against another player/computer

## Images
[My project's wireframe](https://imgur.com/a/T6SuXJe)
/wireframe.jpeg
