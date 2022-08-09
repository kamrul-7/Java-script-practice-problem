/* একটা ফাংশন লি খবা যে টা ১৩ এর নামতা (multiplication table) আউটপুট হি সে বে
দে খাবে । */
function multiplication(number) {

    for (let i = 1; i <= 10; i++) {
        var result = i * number;
        console.log(result);
    }

}
let number = 13;
var finalresult = multiplication(number);

/*একটা ফাংশন লি খবা যে টা যে ক োন নামকে uppercase বা রে গুলার কে ইস হি সে বে নি বে আর
আউটপুট হি সে বে সে ই নাম lowercase করে রি টার্ন করবে । */
function lowerCase(string) {
    console.log(string.toLowerCase());

}
let input = "I WANT TO BE A PROGRAMMER AND LEARN MANY THINGS"
const result = lowerCase(input);


/**fullName নামে একটা ফাংশন তৈ রী কর যে টা ত োমার নামে র প্রথম অংশ এবং ত োমার
নামে র শে ষে র অংশ প্যারামি টার হি সে বে নি বে । আর ত োমার নামে র দইু অংশ জ োড়া দি য়ে আউটপুট
হি সে বে ত োমার পূর্ন নাম রি টার্ন করে দি বে । যে মন ধর ো, hablu এবং kanto ইনপুট প্যারামি টার
হি সে বে দি লে আউটপুট হি সে বে hablu kanto রি টার্ন করবে । */

function fullName(name1, name2) {
    var myName = name1 + " " + name2;
    console.log(myName);
}
let fname = "kamrul";
let lname = "Islam";
fullName(fname, lname);