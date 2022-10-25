import solution from './solution.js';

function makeInput(array) {
  return array.map((line) => line.join(' ')).join('\n');
}

console.log('running tests...');

const test1 = solution(`5 4
0 1 1 0 0
1 1 1 0 1
1 1 0 0 1
0 0 0 1 0`);
console.log(test1, test1 === 9);

const test2 = solution(`5 3
1 1 1 0 1
1 1 1 0 1
1 1 1 0 1`);
console.log(test2, test2 === 9);

const test3 = solution(`3 5
1 0 1
0 1 1
1 0 1
0 0 0
0 1 0`);
console.log(test3, test3 === 9);

const test4 = solution(`5 3
1 1 1 1 1
1 0 0 0 1
1 0 1 0 1`);
console.log(test4, test4 === 15);

const test5 = solution(`1 30
1
0
1
1
1
1
1
1
1
1
1
1
1
1
0
0
0
0
0
0
0
0
1
1
1
1
0
0
0
1`);
console.log(test5, test5 === 12);

const test6 = solution(`4 4
1 1 1 1
1 1 1 1
1 1 1 1
1 1 1 1`);
console.log(test6, test6 === 16);

const test7 = solution(`10 1
1 0 0 1 1 1 1 1 0 1`);
console.log(test7, test7 === 5);

const test8 = solution(`4 4
0 0 0 1
1 0 0 0
0 0 1 0
1 0 0 0`);
console.log(test8, test8 === 0);

const test9 = solution(`4 4
0 0 0 0
0 0 0 0
0 0 0 0
0 0 0 0`);
console.log(test9, test9 === 0);

const test10 = solution(`6 3
1 1 1 1 1 1
1 0 0 0 0 1
1 0 1 1 0 1`);
console.log(test10, test10 === 2);

const test11 = solution(`2 10
1 0
1 0
0 1
1 0
0 0
1 0
0 0
0 0
1 0
0 1`);
console.log(test11, test11 === 8);

const test12 = solution(`2 10
1 0
1 0
0 1
1 0
0 0
1 0
0 0
0 0
1 0
0 1`);
console.log(test12, test12 === 8);

const test13 = solution(
  makeInput([
    ['3', '3'],
    ['1', '1', '0'],
    ['1', '0', '0'],
    ['1', '0', '1'],
  ]),
);
console.log(test13, test13 === 6);

const test14 = solution(
  makeInput([
    ['7', '7'],
    ['1', '0', '1', '0', '1', '0', '1'],
    ['1', '0', '1', '0', '1', '0', '1'],
    ['0', '1', '0', '0', '0', '1', '0'],
    ['0', '1', '0', '1', '0', '1', '0'],
    ['1', '0', '1', '0', '1', '0', '0'],
    ['1', '0', '1', '0', '1', '0', '0'],
    ['0', '1', '0', '1', '0', '1', '0'],
  ]),
);
console.log(test14, test14 === 49);

const test15 = solution(
  makeInput([
    ['7', '9'],
    ['1', '0', '0', '1', '0', '0', '1'],
    ['0', '1', '0', '0', '1', '0', '0'],
    ['0', '0', '1', '0', '0', '1', '0'],
    ['1', '0', '0', '1', '0', '0', '1'],
    ['0', '1', '0', '0', '1', '0', '0'],
    ['0', '0', '1', '0', '0', '1', '0'],
    ['1', '0', '0', '1', '0', '0', '1'],
    ['0', '1', '0', '0', '1', '0', '0'],
    ['0', '0', '1', '0', '0', '1', '0'],
  ]),
);
console.log(test15, test15 === 16);

console.log('tests done');
