var INITIAL_X = 200;
var INITIAL_Y = 400;


// Enemies our player must avoid
var Enemy = function (x, y, speed = 1) {
    this.x = x;
    this.y = y;
    this.speed = speed;

    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
    // You should multiply any movement by the dt parameter
// this.x += this.speed * dt;

    // if (this.x > 505) {
    //     this.x = 0;
    // }
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

// player
var Player = function (x, y) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-cat-girl.png';
};

var playerX
var playerY
// Update the player's position, required method for game
// Parameter: dt, a time delta between ticks
Player.prototype.update = function (dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    playerX = this.x;
    playerY = this.y;
};

// Draw the player on the screen, required method for game
Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function (pressedKeys) {
    // if // code for pressed keys up

    //  else if // code for pressed keys down

    // else if // code for pressed keys left

    // else if // code for pressed keys right
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
let allEnemies = [
    new Enemy(0, 65),
    new Enemy(0, 145),
    new Enemy(0, 225)
];
// Place the player object in a variable called player
var player = new Player (INITIAL_X, INITIAL_Y);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});