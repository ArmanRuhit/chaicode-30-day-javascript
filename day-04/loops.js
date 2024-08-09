// Task 1: Write a program to print numbers from 1 to 10 using a for loop
console.log("Task 1");
for(let i = 1; i <= 10; i++){
    console.log(i);
}

// Task 2: Write a program to print the multiplication tablel of 5 using a for loop
console.log("Task 2");
for(let i = 1; i <= 10; i++){
    console.log(i+" * "+5+" = "+i*5);
}

// Task 3: Write a program to calculate the of numbers from 1 to 10 using a while loop
console.log("Task 3");
let sum = 0;
let i_3 = 1;
while(i_3 <= 10){
    sum += i_3;
    i_3++;
}
console.log("sum"+ sum);

// Task 4: Write a program to print numbers from 10 to 1 using a while loop
console.log("Task 4: Reverse print")
let i_4 = 10;
while(i_4 >= 0){
    console.log(i_4);
    i_4--;
}

// Task 5: Write a program to print numbers from 1 to 5 using do ... while loop
console.log("Task 5: do while example");
let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 5);

// Task 6: Write a program to calculate the factorial of number using do ... while loop

console.log("Task 6: Factorial")
let factorial = 1;
let i_6 = 10;
while(i_6 >= 1){
    factorial *= i_6;
    i_6--;
}
console.log(factorial)

// Task 7: Write a program to print pattern using a nested for loop
console.log("Task 7: pattern")
for(let i = 1; i <= 5; i++){
    for(let j = 1; j <= i; j++){
        process.stdout.write("* ");
    }
    console.log();
}