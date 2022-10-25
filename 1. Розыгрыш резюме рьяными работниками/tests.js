import solution from './solution.js';

console.log('running tests...');

const text1 = `3 4 11
1 1
2 2
3 3
- 4`;
const test1 = solution(text1);
console.log(test1, test1 === 5);

const text2 = `5 5 10
5 1
1 3
1 3
1 3
1 3`;
const test2 = solution(text2);
console.log(test2, test2 === 6);

const text3 = `6 4 10
4 2
2 1
4 8
6 5
1 -
7 -`;
const test3 = solution(text3);
console.log(test3, test3 === 4);

console.log('all tests done');
