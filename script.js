
// Functions

// 1. Write a js program to find cube of any number using function.

function findCube(number) {
    return Math.pow(number, 3);
}

console.log(findCube(2));  
// Output: 8


// 2. Write a js program to find diameter, circumference and area of circle using functions.

function diameter(radius) {
    return 2 * radius;
}

function circumference(radius) {
    return 2 * Math.PI * radius;
}

function area(radius) {
    return Math.PI * radius ** 2;
}

console.log(diameter(5));          // 10
console.log(circumference(5));     // 31.41592653589793
console.log(area(5));              // 78.53981633974483


// 3. Write a js program to find maximum and minimum between two numbers using functions.

function findMax(a, b) {
    return a > b ? a : b;
}

function findMin(a, b) {
    return a < b ? a : b;
}

console.log(findMax(3, 7));  // 7
console.log(findMin(3, 7));  // 3


// 4. Write a js program to check whether a number is even or odd using functions.

function isEven(number) {
    return number % 2 === 0;
}

console.log(isEven(4));  // true
console.log(isEven(5));  // false


// 5. Write a js program to check whether a number is prime, Armstrong or perfect number using functions.

function isPrime(number) {
    if (number <= 1) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }
    return true;
}

function isArmstrong(number) {
    let sum = 0;
    let temp = number;
    const digits = number.toString().length;
    while (temp > 0) {
        let digit = temp % 10;
        sum += digit ** digits;
        temp = Math.floor(temp / 10);
    }
    return sum === number;
}

function isPerfect(number) {
    let sum = 0;
    for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0) sum += i;
    }
    return sum === number;
}

console.log(isPrime(7));          // true
console.log(isArmstrong(153));    // true
console.log(isPerfect(28));       // true


// 6. Write a js program to find all prime numbers between given interval using functions.

function findPrimesInRange(start, end) {
    let primes = [];
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) primes.push(i);
    }
    return primes;
}

console.log(findPrimesInRange(10, 50));  // [11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]


// 7. Write a js program to print all strong numbers between given interval using functions.

function factorial(n) {
    return n === 0 ? 1 : n * factorial(n - 1);
}

function isStrongNumber(number) {
    let sum = 0;
    let temp = number;
    while (temp > 0) {
        let digit = temp % 10;
        sum += factorial(digit);
        temp = Math.floor(temp / 10);
    }
    return sum === number;
}

function findStrongNumbersInRange(start, end) {
    let strongNumbers = [];
    for (let i = start; i <= end; i++) {
        if (isStrongNumber(i)) strongNumbers.push(i);
    }
    return strongNumbers;
}

console.log(findStrongNumbersInRange(1, 500)); // [1, 2, 145]


// 8. Write a js program to print all Armstrong numbers between given interval using functions.

function findArmstrongNumbersInRange(start, end) {
    let armstrongNumbers = [];
    for (let i = start; i <= end; i++) {
        if (isArmstrong(i)) armstrongNumbers.push(i);
    }
    return armstrongNumbers;
}

console.log(findArmstrongNumbersInRange(100, 999));  // [153, 370, 371, 407]


// 9. Write a js program to print all perfect numbers between given interval using functions.

function findPerfectNumbersInRange(start, end) {
    let perfectNumbers = [];
    for (let i = start; i <= end; i++) {
        if (isPerfect(i)) perfectNumbers.push(i);
    }
    return perfectNumbers;
}

console.log(findPerfectNumbersInRange(1, 10000));  // [6, 28, 496, 8128]


// 10. Write a js program to find power of any number using function.

function power(base, exponent) {
    return base ** exponent;
}

console.log(power(2, 3));  // 8


// 11. Write a js program to print all natural numbers between 1 to n using function.

function printNaturalNumbers(n) {
    let numbers = [];
    for (let i = 1; i <= n; i++) {
        numbers.push(i);
    }
    return numbers;
}

console.log(printNaturalNumbers(10));   // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// 12. Write a js program to print all even or odd numbers in given range using function.

function printEvenNumbers(start, end) {
    let evenNumbers = [];
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) evenNumbers.push(i);
    }
    return evenNumbers;
}

function printOddNumbers(start, end) {
    let oddNumbers = [];
    for (let i = start; i <= end; i++) {
        if (i % 2 !== 0) oddNumbers.push(i);
    }
    return oddNumbers;
}

console.log(printEvenNumbers(1, 10)); // [2, 4, 6, 8, 10]
console.log(printOddNumbers(1, 10));  // [1, 3, 5, 7, 9]


// 13. Write a js program to find sum of all natural numbers between 1 to n using function.

function sumOfNaturalNumbers(n) {
    return n * (n + 1) / 2;
}

console.log(sumOfNaturalNumbers(10));   // 55


// 14. Write a js program to find sum of all even or odd numbers in given range using function.

function sumOfEvenNumbers(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) sum += i;
    }
    return sum;
}

function sumOfOddNumbers(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        if (i % 2 !== 0) sum += i;
    }
    return sum;
}

console.log(sumOfEvenNumbers(1, 10));  // 30
console.log(sumOfOddNumbers(1, 10));   // 25


// 15. Write a js program to find reverse of any number using function.

function reverseNumber(number) {
    return parseInt(number.toString().split('').reverse().join(''));
}

console.log(reverseNumber(12345));  // 54321


// 16. Write a js program to check whether a number is palindrome or not using function.

function isPalindrome(number) {
    let reversed = reverseNumber(number);
    return number === reversed;
}

console.log(isPalindrome(121));  // true
console.log(isPalindrome(123));  // false


// 17. Write a js program to find sum of digits of a given number using function.

function sumOfDigits(number) {
    let sum = 0;
    while (number > 0) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }
    return sum;
}

console.log(sumOfDigits(123));  // 6


// 18. Write a js program to find factorial of any number using function.

function factorial(n) {
    return n === 0 ? 1 : n * factorial(n - 1);
}

console.log(factorial(5));  // 120


// 19. Write a js program to generate nth Fibonacci term using function.

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));  // 55


// 20. Write a js program to find GCD (HCF) of two numbers using function.

function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

console.log(gcd(48, 18));  // 6


// 21. Write a js program to find LCM of two numbers using function.

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

console.log(lcm(12, 15)); // 60


// 22. Write a js program to display all array elements using function.

function displayArrayElements(arr) {
    arr.forEach(element => console.log(element));
}

// Example usage:
const myArray = [1, 2, 3, 4, 5];
displayArrayElements(myArray);

// Output:
// 1
// 2
// 3
// 4
// 5


// 23. Write a js program to find sum of elements of array using function.

function sumOfArrayElements(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// Example usage:
const MyArray = [1, 2, 3, 4, 5];
console.log(sumOfArrayElements(MyArray));   // Output: 15


// 24. Write a js program to find maximum and minimum elements in array using function.

function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function findMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

// Example usage:
const MYArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log(findMax(MYArray));    // Output: 9
console.log(findMin(MYArray));   // Output: 1

