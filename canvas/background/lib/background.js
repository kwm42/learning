"use strict";

var _html2canvas = _interopRequireDefault(require("html2canvas"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function background(element) {
  var canvas = document.createElement('canvas');
  setCanvas(canvas, element);
  element.appendChild(canvas);
  let ctx = canvas.getContext('2d');
  var config = {
    starAmount: 100,
    sizeRange: [2, 4],
    aliveTimeRange: [3000, 5000],
    bubbleEffect: true
  };
  let starArray = initializeStarArray(canvas.width, canvas.height, config, ctx);
  setInterval(() => {
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    starArray.forEach(star => {
      star.update();

      if (star.aliveTime <= 0) {
        starArray.splice(starArray.indexOf(star), 1);
      }
    });

    if (starArray.length < config.starAmount) {
      var x, y, size, aliveTime;
      x = randomRange(0, canvas.width);
      y = randomRange(0, canvas.height);
      size = randomRange(config.sizeRange[0], config.sizeRange[1]);
      aliveTime = randomRange(config.aliveTimeRange[0], config.aliveTimeRange[1]);
      starArray.push(new Star(x, y, size, aliveTime, ctx));
    }
  }, 16);

  if (config.bubbleEffect) {
    canvas.onclick = function () {
      colorfulBubble();
    };
  }
}

function randomRange(start, end) {
  return Math.random() * (end - start) + start;
}
/**
 * initialize star array according to config, all stars are in area(width, height)
 * @param {number} width 
 * @param {number} height 
 * @param {object} config 
 */


function initializeStarArray(width, height, config, ctx) {
  let starArray = [];
  var x, y, size, aliveTime;

  for (var i = 0; i < config.starAmount; ++i) {
    x = randomRange(0, width);
    y = randomRange(0, height);
    size = randomRange(config.sizeRange[0], config.sizeRange[1]);
    aliveTime = randomRange(config.aliveTimeRange[0], config.aliveTimeRange[1]);
    starArray.push(new Star(x, y, size, aliveTime, ctx));
  }

  return starArray;
}
/**
 * set canvas style 
 * @param {canvas} canvas 
 * @param {HTMLElement} parent 
 */


function setCanvas(canvas, parent) {
  canvas.setAttribute('style', "\n        position: absolute;\n        top: 0;\n        left:0;\n        z-index: -999;\n    ");
  var ctx = canvas.getContext('2d');
  canvas.width = parent.clientWidth;
  canvas.height = parent.clientHeight;
  ctx.fillStyle = '#cbd';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}
/**
 * 
 * @param {position x} x 
 * @param {position y} y 
 * @param {star size} size 
 * @param {star blink time} aliveTime 
 * @param {canvas context} ctx 
 */


function Star(x, y, size, aliveTime, ctx) {
  this.x = x;
  this.y = y;
  this.size = size;
  this.aliveTime = aliveTime;
  this.opacity = 0;
  this.draw = drawStar;

  this.update = function () {
    this.opacity = (aliveTime / 2 - Math.abs(this.aliveTime - aliveTime / 2)) / (aliveTime / 2);
    let style = "rgba(255, 255, 155, ".concat(this.opacity, ")");
    this.draw(this.size, this.size / 2, this.x, this.y, ctx, style);
    this.aliveTime -= 16;
  };
}

function drawStar(R, r, x, y, ctx, fillStyle) {
  ctx.beginPath();

  for (var i = 0; i < 5; i++) {
    var x1 = Math.cos((18 + 72 * i) / 180 * Math.PI) * R,
        y1 = Math.sin((18 + 72 * i) / 180 * Math.PI) * R,
        x2 = Math.cos((54 + 72 * i) / 180 * Math.PI) * r,
        y2 = Math.sin((54 + 72 * i) / 180 * Math.PI) * r;
    ctx.lineTo(x1 + x, y1 + y);
    ctx.lineTo(x2 + x, y2 + y);
  }

  ctx.closePath();
  ctx.fillStyle = fillStyle;
  ctx.fill();
}
/**
 * when you click, appear colorful bubble effect
 */


function colorfulBubble() {
  console.log(1212);
}

background(document.querySelector('#bg'));