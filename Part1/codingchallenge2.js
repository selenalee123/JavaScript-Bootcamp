// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement 😉




const markmass = 78;
const markheight = 1.69;
const johnmass = 95;
const johnheight = 1.88;

const markBMI = markmass / markheight ** 2;
const johnBMI = johnmass / johnheight ** 2;

console.log(markBMI, johnBMI);
console.log("Hello");

if (markBMI > johnBMI ) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`)
}else{
    console.log(`Mark's BMI (${markBMI}) is lower than John's (${johnBMI})!`)
}