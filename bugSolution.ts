function add(a: number, b: number): number {
  return a + b;
}

let result = add(5, 10); // Correct: both arguments are numbers

function addSafe(a: number | string, b: number | string): number {
  const numA = typeof a === 'string' ? parseFloat(a) : a;
  const numB = typeof b === 'string' ? parseFloat(b) : b;
  return numA + numB;
}

let result2 = addSafe(5, '10'); // Correct: handles string and number inputs
let result3 = addSafe('5', 10); // Correct: handles string and number inputs
let result4 = addSafe('5', '10'); // Correct: handles string and number inputs