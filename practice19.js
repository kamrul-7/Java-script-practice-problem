//Write a function called make_avg() which will take an three integers and
// return the average of those values.

function makes_avg(num1, num2, num3) {
    var sum = num1 + num2 + num3;
    var average = sum / 3;
    return average;

}
var avg = makes_avg(20, 30, 40);
console.log(avg);

/* Challenging: Write a function called make_avg() which will take an array of
integers and the size of that array and return the average of those values. */

function make_avg(array, size) {
    let sum = 0;
    for (i = 0; i < size; i++) {
        sum += array[i];
    }
    return sum / size;

}
var digit = [45, 5, 67, 47, 34, 76, 97, 99]
var sizes = digit.length;
var average = make_avg(digit, sizes);
console.log(average);