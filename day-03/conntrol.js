// Task 1: Write a program to check if a number is positive, negative, or zero and log the result to the console

console.log("Task 1");
let number_task_1 = 10;
console.log(number_task_1 < 0 ? "negative" : number_task_1 == 0 ? "zero" : "positive");

// Task 2: Write a program to check if a person is eligible to vote(age >= 18) and log the result to the console

console.log("Task 2");
let age_task_2 = 17;
console.log(age_task_2 >= 18 ? "Eligible to vote" : "Not eligible to vote");

// Task 3: Write a program to find the largest of the three numbers, using nested if-else statements

console.log("Task 3")
let num1_task_3 = 1;
let num2_task_3 = 2;
let num3_task_3 = 3;
console.log("Largest number");
if(num1_task_3 > num2_task_3){
    if(num1_task_3 > num3_task_3){
        console.log(num1_task_3);
    } else{
        console.log(num3_task_3);
    }
} else {
    if(num2_task_3 > num3_task_3){
        console.log(num2_task_3);
    } else{
        console.log(num3_task_3);
    } 
}

// Task 4: Write a program that uses a switch case to determine the day of the week based on number (1-7) and log the day name to the console

console.log("Task 4");
let number_of_the_day = 3;

console.log("Today is:");
switch(number_of_the_day){
    case 1:
        console.log("Saturday");
        break;
    case 2:
        console.log("Sunday");
        break;

    case 3:
        console.log("Monday");
        break;
    case 4:
        console.log("Tuesday");
        break;
    case 5:
        console.log("Wednesday");
        break;
    case 6:
        console.log("Thursday");
        break;
    case 7:
        console.log("Friday");
        break;
}

// Task 5: Write a program hat uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on score and log the grade to the console

console.log('Task 5');

let score = 78;

console.log("Grade:")

switch (score/10) {
    case 10:
    case 9:
    case 8:
        console.log('A')
        break;
    case 7:
        console.log('B')
        break;
    case 6:
        console.log('C')
        break;
    case 5:
        console.log('D')
        break;
    case 4:
        console.log('E')
        break;
    default:
        console.log('F')
        break;
}

