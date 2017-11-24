// not sure if the first ten natural numbers are 1-10 or 0-9. I used 1-10.
let sumSq = 0;
let sum = 0;
let diff = 0;

for (let i = 1; i <= 10; i++) {
    sum+=i; // add i to sum every loop
}
sum = sum*sum; //take sum of numbers and square it

for (let j = 1; j <= 10; j++) {
    let p = j*j;
    sumSq += p; // this squares the numbers and THEN sums them
}
diff = sumSq - sum; // finds the difference
console.log("sum ", sum);
console.log("sumSq ", sumSq); // these are for me to that it worked
console.log("diff ", diff);
// declare html builder
let print = "The difference between the sum of the square of the first ten natural numbers and the sum of the first ten natural numbers is " + diff + ".";
let divvy = document.getElementById("diff");
divvy.innerHTML = print;

