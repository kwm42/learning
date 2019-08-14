const canvas = document.querySelector('#canvas'),
      ctx = canvas.getContext('2d'),
      dotArray = [];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function ColorDot(x, y, radius, angle, color) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.angle = angle;
  this.color = color;
  this.step = 3;

  this.draw = function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }

  this.update = function() {
    this.x += Math.sin(this.angle) * this.step;
    this.y += Math.cos(this.angle) * this.step;
    this.draw();
    this.radius -= 0.5;
    if(this.radius <= 0) {
      dotArray.splice(dotArray.indexOf(this), 1);
    }
  }
}

canvas.addEventListener('mousemove', function(e) {
  let color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
  let d = new ColorDot(e.x, e.y, 16, Math.random() * Math.PI * 2, color);
  dotArray.push(d);
});

function animate() {
  ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
  dotArray.forEach(d => {
    d.update();
  })
  requestAnimationFrame(animate);
}

animate();