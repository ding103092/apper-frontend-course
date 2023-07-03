function fizzBuzz(number) {
  let result = '';

  if (number % 3 === 0) {
    result += 'Fizz';
  }

  if (number % 5 === 0) {
    result += 'Buzz';
  }

  // Return 'None' if result is empty
  if (!result) {
    result = 'None';
  }

  return result;
}

// For loop from 1 to 100 using fizzBuzz function
for (let i = 1; i <= 100; i++) {
  console.log(fizzBuzz(i));
}