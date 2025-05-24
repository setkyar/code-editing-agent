/**
 * FizzBuzz implementation
 * Prints numbers from 1 to 15, with the following rules:
 * - For multiples of 3, print "Fizz" instead of the number
 * - For multiples of 5, print "Buzz" instead of the number
 * - For multiples of both 3 and 5, print "FizzBuzz" instead of the number
 */

function fizzBuzz(start = 1, end = 15) {
  for (let i = start; i <= end; i++) {
    let output = '';
    
    if (i % 3 === 0) output += 'Fizz';
    if (i % 5 === 0) output += 'Buzz';
    
    console.log(output || i);
  }
}

// Execute FizzBuzz for numbers 1-15
console.log('Running FizzBuzz from 1 to 15:');
fizzBuzz();

// If you want to run it with custom range, you can call it like:
// fizzBuzz(1, 20); // This would run FizzBuzz from 1 to 20