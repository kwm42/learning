function Dot(x, y, radius, radians, color){
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.radians = radians;
  this.color = color;

  this.draw = function(ctx){
    console.log(ctx)
    // ctx.beginPath();
    // ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    // ctx.fillStyle = this.color;
    // ctx.fill();
    // ctx.closePath();
  }
}

let canvas = document.getElementById('canvas');
console.log(canvas);