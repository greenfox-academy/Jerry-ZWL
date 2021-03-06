'use strict';

var a = 3;
// make it bigger by 10
a = 11;
console.log(a);

var b = 100;
// make it smaller by 7
b = 6;
console.log(b);

var c = 44;
// double c's value
c = c.toFixed(2);
console.log(c);

var d = 125;
// divide d's value by 5
d /= 5;
console.log(d);

var e = 8;
// what's the cube of e's value?
e = Math.pow(8, 3);
console.log(e);

var f1 = 123;
var f2 = 345;
// tell if f1 is bigger than f2 (as a boolean)
console.log("f1 > f2:  ", f1 > f2);

var g1 = 350;
var g2 = 200;
// tell if the double of g2 is bigger than g1 (as a boolean)
console.log('Double(g2) > g1: ', g2.toFixed(2) > g1);

var h = 1357988018575474;
// tell if h has 11 as a divisor (as a boolean)
console.log('h has 11 as a divisor: ', !Boolean(h % 11));

var i1 = 10;
var i2 = 3;
// tell if i1 is higher than i2 squared and smaller than i2 cubed (as a boolean)
console.log("i2^2 < i1 < i2^3: ", i1 > i2 * i2 && i1 < Math.pow(i2, 3));
var j = 1521;
// tell if j is dividable by 3 or 5 (as a boolean)
console.log("j is dividable by 3 or 5: ", !Boolean(j % 3) || !Boolean(j % 5));

var k = 'Apple';
// fill the k variable with its content 4 times
k = k.repeat(4);
console.log(k);