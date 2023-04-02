"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
var a = Number((0, readline_sync_1.question)('Nhap a: '));
var b = Number((0, readline_sync_1.question)('Nhap b: '));
var c = Number((0, readline_sync_1.question)('Nhap c: '));
var result = (Math.pow(a, 2) * Math.pow(b, 2)) / c;
console.log(result);
