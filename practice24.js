/**Write a function that will take hour as the input parameter and will convert it
into minutes and will return the result in minutes. */

function houreTominute(hour) {
    let result = hour * 60;
    return result;

}
let hour = 4;
const minute = houreTominute(hour);
console.log("After convert hours to Minute is:", minute);

/**Write a function findLeapYear() that will take the array [2023, 2024, 2025,
2028, 2030] as the input parameter and will check if each year is a leap year. If
a year is a leap year insert that year in a new array, return the new array and
print the result. */
function findLeapYear(year) {
    for (let i = 0; i < year.length; i++) {
        if (year[i] % 4 == 0) {
            var leapYear = year[i];
            console.log("These years are leap year: ", leapYear);
        }
        else {
            leapYear = year[i];
            console.log("These years are not leap year:", leapYear);
        }
    }
}
let yearList = [2023, 2024, 2025, 2028, 2030];
findLeapYear(yearList);


/**37) Write a function findOddSum() that will take the array [ 5, 7, 8, 10, 45, 30 ]
as the input parameter and will return the sum of the odd numbers. */

function findddSum(number) {
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        if (number[i] % 2 != 0) {
            let res = number[i];
            sum += res;
        }
    }
    return sum;
}
let array = [5, 7, 8, 10, 45, 30];
let myresult = findddSum(array);
console.log(myresult);

/**leapYear() নামে ফাংশন লি খ ো এবং নে ক্সট ইয়ার অর্থাৎ ২০২৩ কি leap year নাকি সে টা
চে ক কর ো। Leap year হলে ফাংশন true রি টার্ন করবে আর leap year না হলে false রি টার্ন */
function leapYear(year) {
    if (year % 2 == 0) {
        return true;
    }
    return false;
}
let isyear = 2024;
const result = leapYear(isyear);
console.log(result);