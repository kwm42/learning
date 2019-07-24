"use strict";

var canvas = document.getElementsByTagName("canvas")[0];
var ctx = canvas.getContext("2d");
ctx.rect(10, 10, 100, 100);
ctx.fill();
console.log(ctx.getImageData(50, 50, 100, 100)); // ImageData { width: 100, height: 100, data: Uint8ClampedArray[40000] }