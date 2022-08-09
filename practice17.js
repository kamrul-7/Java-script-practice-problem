/*তুমি এতদি ন যা যা জি নি স শি খছ ো সে গুলার নাম দি য়ে একটা array বানাও। তারপর একটা
for লপু দি য়ে সে ই array এর সব উপাদান কে আউটপুট হি সে বে দে খাও।*/

let learn = ["variable", 'for', 'if-else', 'index', 'loop', 'while-loop'];
for (i = 0; i < learn.length; i++) {
    let learned = learn[i];
    console.log(learned);
}

/*তুমি এতদি ন পর্যন্ত যে যে মডে লে র ম োবাইল ফ োন ইউজ করে ছ ো সে গুলার নাম দি য়ে একটা
array বানাও। তারপর একটা while লপু দি য়ে সে ই array এর উপাদান গুলা একটা একটা করে
আউটপুট হি সে বে দে খাও*/
var phone = ["iphone", 'samsung', 'redmi', 'realme', 'oppo'];
var i = 0;
while (i < phone.length) {
    console.log(phone[i]);
    i++;
}

/*একটা ফর লপু চালাও। ৩০ থে কে ৮৬ পর্যন্ত। আর এই লপু ৪৪ এ গে লে ব্রে ক করবে । সে ই
জি নি স ক োড করে দে খাও */
for (var i = 30; i <= 86; i++) {
    if (i == 44) {
        break;
    }
    console.log(i);
}
