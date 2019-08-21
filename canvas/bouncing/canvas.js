const canvas = document.querySelector('#canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

const mouse = {
  x: 0,
  y: 0
}

function Ball(x, y, r, color) {
  this.x = x;
  this.y = y;
  this.r = r;
  this.color = 'white';
  this.friction = 0.8;
  this.base = 0.1;
  this.vx = 0;
  this.vy = 0;

  this.draw = function (ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}

var ball1 = new Ball(0, 0, 10),
    ball2 = new Ball(0, 0, 10),
    ball3 = new Ball(0, 0, 10);

function bouncing(source, target) {
  if (!target.x || !target.y) return;
  let dx = target.x - source.x, dy = target.y - source.y;
  dx *= source.base;
  dy *= source.base;
  source.vx += dx;
  source.vy += dy;
  source.vx *= source.friction;
  source.vy *= source.friction;
  source.x += source.vx;
  source.y += source.vy;
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  bouncing(ball1, mouse);
  bouncing(ball2, {x: ball1.x, y: ball1.y + 50});
  bouncing(ball3, {x: ball2.x, y: ball2.y + 50});
  ball1.draw(ctx);
  ball2.draw(ctx);
  ball3.draw(ctx);
}

window.addEventListener('mousemove', function (e) {
  mouse.x = e.x;
  mouse.y = e.y;
})

animate();