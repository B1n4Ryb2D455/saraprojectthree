# Classic Arcade Game Project

## Ways to Play or Develop:
1.  Fork the repository
2.  Clone the repository to your machine _you will need a code editor_
3.  Download the ZIP file and open the .html file from your file explorer in your favorite browser

## Description
A classic arcade game built as project number three for the Grow with Google Udacity Front End Web developer challenge

## Project Requirements
_The project challenge was to build a game that accomplishes the following:_

- A player can move on the board, but not off the board
- Enemies cross the screen, the player must avoid being hit by enemies
- If an enemy does collide into the player, the player is moved to their starting position
- when the player reaches the water, they win, and the enemies stop crossing the board
- A modal pops up when the player wins that asks if they wish to play again
- If the play again button is pushed, the enemies begin crossing the board again, and the player is set to the starting possition

_Additional functionality can and will be added at a later time as it was optional for this game_

## How I Built the Game:
- I built the game with JavaScript, CSS, and HTML

* Made the canvas (board) show up on the screen
* Made the enemy and player sprites show up on the board
* Added functionality to the player sprite to respond to the arrow keys so the player can be moved
* Set boundaries on the board so the player cannot leave the board
* Added functionality so the enemies would move across the board
* Set the parameters for collision detection, move the player to starting position if that happens
* Added a modal with a button that gives the option to play again
* Set the enemies to move faster if the game is played a second time
* Added a fun background and color scheme

## Instructions for Gameplay:
1.  Push the up, down, left, and right arrow keys to move the player
2.  Avoid getting hit by the enemies and make your way to the water
3.  Click "I want to play again" if you win for a more difficult game play the second time
