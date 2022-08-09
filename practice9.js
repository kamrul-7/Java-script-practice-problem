/* You are given a triangle with the sides 9, 8, 9. Write a program to check
whether a triangle is Isosceles or not using if-else.
Isosceles => two sides are equal*/

var side1 = 9;
var side2 = 8;
var side3 = 9;
if (side1 == side2 && side1 != side3) {
    console.log("Triangle is Isosceles")
}
else if (side1 == side3 && side1 != side2) {
    console.log("Triangle is Isosceles")
}
else if (side2 == side3 && side1 != side2) {
    console.log("Triangle is Isosceles")
}
else {
    console.log("Triangle is not Isosceles")
}