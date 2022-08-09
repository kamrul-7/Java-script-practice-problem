//No return + Has parameter

function odd_even(number) {
    if (number % 2 == 0) {
        console.log("Number is even");

    }
    else {
        console.log("number is odd");
    }

}
var value = 7;
odd_even(value);

//Has return + Has parameter

function odd_even(number) {
    if (number % 2 == 0) {
        return "even";

    }
    else {
        return "odd";
    }

}
var value = 8;
var result = odd_even(value);
console.log(result);

