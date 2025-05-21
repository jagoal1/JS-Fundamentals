const arg = process.argv[2];
const num = Number(arg);

if (!Number.isInteger(num) || num <= 0) {
  console.log('Missing number of occurrences');
} else {
  let i = 0;
  let output = '';
  while (i < num) {
    output += 'C is fun' + (i === num - 1 ? '' : '\n');
    i++;
  }
  console.log(output);
}
