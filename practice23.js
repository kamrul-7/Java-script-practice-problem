/**একটা ফাংশন লি খবা যে টাকে তুমি ক োন সংখ্যাকে ইনপুট হি সে বে দি লে সে সে ই সংখ্যার
square করে সে ই square কে রি টার্ন করবে ।
অর্থাৎ তুমি ইনপুট হি সে বে 5 দি লে সে টাতে স্কয়ারে হি সে বে 25 আউটপুট হি সে বে পাবে । */

function squre(number1) {
    var result = number1 * number1;
    return result;
}
let value1 = 5;
let issqure = squre(value1);
console.log(issqure);

/*Another way using math.pow()*/

function squre(value) {
    console.log(value);
}
let number = Math.pow(5, 2);
squre(number);

