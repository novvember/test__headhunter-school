// const readline = require('readline').createInterface(
//   process.stdin,
//   process.stdout,
// );

// const input = [];

// readline
//   .on('line', (line) => {
//     input.push(line);
//   })
//   .on('close', () => {
//     const result = solution(input.join('\n'));
//     console.log(result);
//     process.exit(0);
//   });

function solution(input) {
  function parseInput(input) {
    input = input.split('\n').map((line) => line.split(' '));

    const stacksCount = input[0].length - 1;
    const maxSum = +input[0][stacksCount];

    const stacks = [];
    for (let i = 0; i < stacksCount; i++) {
      stacks[i] = [];
      stacks[i].push(0);
    }

    for (let line of input) {
      if (line === input[0]) continue;
      for (let i = 0; i < stacksCount; i++) {
        const value = +line[i];
        if (value && value !== '-') stacks[i].push(+value);
      }
    }

    return [stacks, maxSum];
  }

  function getSums() {
    return stacks.map((stack) => {
      return stack.map(
        (value, pos, arr) =>
          value + arr.slice(0, pos).reduce((sum, value) => sum + value, 0),
      );
    });
  }

  function findIndex(stackIndex, targetSum) {
    const index = sums[stackIndex].findIndex((value) => value > targetSum) - 1;
    return index < 0 ? sums[stackIndex].length - 1 : index;
  }

  const [stacks, maxSum] = parseInput(input);
  const sums = getSums();

  const maxIndex0 = findIndex(0, maxSum);
  let maxCount = 0;

  for (let index0 = 0; index0 <= maxIndex0; index0++) {
    const index1 = findIndex(1, maxSum - sums[0][index0]);
    maxCount = Math.max(maxCount, index0 + index1);
  }

  return maxCount;
}

export default solution;
