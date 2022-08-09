/*You and your friends Tom, Jane, Peter and John got their final exam
results. Your total score is 85, Tom’s total score is 66, Jane’s total score is
95, Peter’s total score is 56 and John’s total score is 40. The grading
chart is

80 or above A grade
60 or above B grade
50 or above C grade
40 or above D grade
39 or less => F grade

Write a program to find your and your friends’ grades using
if-else.*/

var Score = 78;
if (Score >= 80) {
    console.log("My grade is : A")
    if (Score >= 80) {
        console.log("Jane's grade is : A")
    }
}
else if (Score >= 60) {
    console.log("Tom's grade is : B")
}
else if (Score >= 50) {
    console.log("Peter's grade is : C")
}
else if (Score >= 40) {
    console.log("John's grade is : D")
}
else {
    console.log("Grade is : F")
}