"use strict;"

/* Classes */
const Game = require('./game.js');
const Player = require('./player.js');
const Enemy = require('./enemy.js');

/* Global variables */
var canvas = document.getElementById('screen');
var game = new Game(canvas, update, render);
var player = new Player({x: 382, y: 440});

var enemies = [];
enemies.push(new Enemy({x: 50, y: 50}, 'assets/hoodfang/hoodfang down.png'));
enemies.push(new Enemy({x: 100, y: 50}, 'assets/hoodfang/hoodfang side.png'));
enemies.push(new Enemy({x: 150, y: 50}, 'assets/hoodfang/hoodfang up.png'));
enemies.push(new Enemy({x: 200, y: 50}, 'assets/armor lancer/armor lancer down.png'));
enemies.push(new Enemy({x: 200, y: 50}, 'assets/armor lancer/armor lancer side.png'));
enemies.push(new Enemy({x: 200, y: 50}, 'assets/armor lancer/armor lancer up.png'));
enemies.push(new Enemy({x: 250, y: 50}, 'assets/armor lancer/armor lancer side.png'));
enemies.push(new Enemy({x: 300, y: 50}, 'assets/armor lancer/armor lancer down.png'));
enemies.push(new Enemy({x: 350, y: 50}, 'assets/bat/bat.png'));
enemies.push(new Enemy({x: 400, y: 50}, 'assets/beasts/axe beast/axe beast down.png'));
enemies.push(new Enemy({x: 450, y: 50}, 'assets/beasts/axe beast/axe beast up.png'));
enemies.push(new Enemy({x: 500, y: 50}, 'assets/beasts/axe beast/axe beast side.png'));
enemies.push(new Enemy({x: 550, y: 50}, 'assets/beasts/beast down.png'));
enemies.push(new Enemy({x: 600, y: 50}, 'assets/beasts/beast side.png'));
enemies.push(new Enemy({x: 650, y: 50}, 'assets/beasts/beast up.png'));
enemies.push(new Enemy({x: 50, y: 100}, 'assets/beasts/mace beast/mace beast down.png'));
enemies.push(new Enemy({x: 100, y: 100}, 'assets/beasts/mace beast/mace beast side.png'));
enemies.push(new Enemy({x: 150, y: 100}, 'assets/beasts/mace beast/mace beast up.png'));

/**
 * @function masterLoop
 * Advances the game in sync with the refresh rate of the screen
 * @param {DOMHighResTimeStamp} timestamp the current time
 */
var masterLoop = function(timestamp) {
  game.loop(timestamp);
  window.requestAnimationFrame(masterLoop);
}
masterLoop(performance.now());


/**
 * @function update
 * Updates the game state, moving
 * game objects and handling interactions
 * between them.
 * @param {DOMHighResTimeStamp} elapsedTime indicates
 * the number of milliseconds passed since the last frame.
 */
function update(elapsedTime) {
  player.update(elapsedTime);
  enemies.forEach(function(item, idx){
    item.update(elapsedTime);
  });
  // TODO: Update the game objects
}

/**
  * @function render
  * Renders the current game state into a back buffer.
  * @param {DOMHighResTimeStamp} elapsedTime indicates
  * the number of milliseconds passed since the last frame.
  * @param {CanvasRenderingContext2D} ctx the context to render to
  */
function render(elapsedTime, ctx) {
  ctx.fillStyle = "lightblue";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  player.render(elapsedTime, ctx);
  enemies.forEach(function(item, idx){
    item.render(elapsedTime, ctx);
  });
}
