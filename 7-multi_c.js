const arg = process.argv[2];
const num = Number(arg);

if (isNaN(num)) {
  console.log('Missing number of occurrences');
} else if (num > 0 && Number.isInteger(num)) {
  let i = 0;
  let output = '';
  while (i < num) {
    output += 'C is fun' + (i === num - 1 ? '' : '\n');
    i++;
  }
  console.log(output);
}
// For zero or negative numbers, do nothing (no output)
