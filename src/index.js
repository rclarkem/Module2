import Paddle from '/src/paddle';
import Ball from '/src/ball';

let canvas = document.querySelector("#gameScreen");
let ctx = canvas.getContext("2d");
let gameWidth = 800;
let gameHeight = 600;

ctx.clearRect(0, 0, 800, 600);

let paddle = new Paddle(gameWidth, gameHeight);

paddle.draw(ctx)

// Circle
let circle = new Ball(400, 200)
let circle2 = new Ball(300, 300)
circle.draw(ctx)
circle2.draw(ctx)