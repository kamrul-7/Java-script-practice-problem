//-----------Array================

var fruits = ['Apple', 'Banana', 'Orange'];
console.log(fruits);
//=============array length================

console.log(fruits.length);
//=================Find the index of ‘Banana’==========

console.log(fruits.indexOf('Banana'));
//================replace ‘Banana’ with ‘Mango================

fruits[1] = 'Mango';
//==============Remove ‘Orange’ ===============

fruits.pop('Orange');
console.log(fruits);
//============add ‘Watermelon’===============

fruits.push('Watermalon');
console.log(fruits);
