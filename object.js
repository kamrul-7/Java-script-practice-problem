var student = {
    name: 'kamrul',
    id: 159,
    subject: "cse",
    department: "computer Science and Engineering",
}
console.log(student);

//change proparty value in 3 way
var myId = 'id';
student[myId] = 333;
console.log(student);

student['id'] = 777;
console.log(student);

student.subject = "Bangla";
console.log(student);

//শুধু অব্জেক্ট এর প্রাপার্টি এবং ভ্যালু এরে আকারে দেখতে চাইলে ঃ

var student = {
    name: 'aman',
    id: 159,
    subject: "cse",
    department: "EEE",
}
for (i = 0; i < student.length; i++) {
    var propertyName = student[i];
    var propertyValue = student[propertyName];
    console.log(propertyName, propertyValue);
}

////শুধু অব্জেক্ট এর প্রাপার্টি এবং ভ্যালু এরে আকারে দেখতে চাইলে 

var properties = Object.keys(student);
var propertValue = Object.values(student);


console.log(properties);
console.log(propertValue);
console.log(student);

//আরো সহজে করা যায়, এখানে keys ব্যবহার না করলেই হয়ঃ 

//এটাকে শর্ট হ্যান্ড বলে।

var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyborad: 5,
    mouse: 1,
    pen: 25,
    shoe: 5,
    bottle: 3
}


///for loop

for (var ok in shoppingCart) {
    const value = shoppingCart[ok];
    console.log(ok, value);

}