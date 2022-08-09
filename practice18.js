/*ত োমার যত বই আছে সে গুলার দাম নি য়ে একটা array লি খে ফে ল ো। যে বই গুল োর দাম ২০০
টাকার উপরে সে গুলাকে স্কি প করবে । অর্থাৎ সে গুলাকে আউটপুট হি সে বে দে খাবে না। বাকি দে র কে
আউটপুট হি সে বে দে খাবে । দে খ ো করতে পার ো কি না।*/

var books = [100, 200, 159, 700, 400];
for (i = 0; i < books.length; i++) {
    var book = books[i];
    if (book > 200) {
        continue;
    }
    console.log(book)
}


/*Write a function called foo() which prints “foo” and a function called bar()
which prints “bar”. Call function bar() in the foo() function after printing. What
will be the output? Now call the foo() to see the output.*/

function foo() {
    console.log('foo');
    bar();
}
function bar() {
    console.log('bar');
}
foo();
