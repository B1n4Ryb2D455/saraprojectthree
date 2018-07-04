var INITIAL_X = 200;
var INITIAL_Y = 400;

var Enemy = function (x, y, speed = 100) {
    this.x = x;
    this.y = y;
    this.speed = speed;

    this.sprite = 'images/enemy-bug.png';

};

Enemy.prototype.update = function (dt) {
    this.x += this.speed * dt;

    if (this.x > 505) {
        this.x = 0;
    }

};

Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var Player = function (x, y) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-cat-girl.png';
};

var playerX
var playerY

Player.prototype.update = function (dt) {

    playerX = this.x;
    playerY = this.y;
    bugOne = allEnemies[2];
    bugTwo = allEnemies[1];
    bugThree = allEnemies[0];

    if (this.y > 450) {
        this.y = 400;
    }
    if (this.x > 450) {
       this.x = 400;
    }
    if (this.x < 0) {
        this.x = 0;
    }

    if ((this.y == 220 && bugOne.y == 225) && (this.x < bugOne.x + 50 && this.x > bugOne.x - 10)) {
        this.y = 400;
        this.x = 200;
    }

    if ((this.y == 130 && bugTwo.y == 145) && (this.x < bugTwo.x + 50 && this.x > bugTwo.x - 10)) {
        this.y = 400;
        this.x = 200;
    }

    if ((this.y == 40 && bugThree.y == 65) && (this.x < bugThree.x + 50 && this.x > bugThree.x - 10)) {
        this.y = 400;
        this.x = 200;
    }

    if (player.y == - 50) {
        youWin();
    }
};

Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function (pressedKeys) {
    if (pressedKeys === 'left') {
        this.x -= 100;
    } else if (pressedKeys === 'right') {
        this.x += 100;
    } else if (pressedKeys === 'up') {
        this.y -= 90;
    } else if (pressedKeys === 'down') {
        this.y += 90;
    }
};

let allEnemies = [
    new Enemy(0, 65),
    new Enemy(200, 145),
    new Enemy(350, 225)
];

let player = new Player(INITIAL_X, INITIAL_Y);

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

var modal = document.getElementById('myModal');
// let player restart the game without winning
var replay = document.querySelector('.close');
replay.onclick = function () {
    // will fix moving forward as I now know this isn't how we should handle resetting the game
    window.location.reload();
}

// let the player restart from the modal
var btn = document.querySelector('#playAgain');
btn.onclick = function () {
    // will fix moving forward, as I now know this isn't how we should handle resetting the game
    window.location.reload();
}

function youWin() {
    console.log("You win!");
    modal.style.display = 'block';
}