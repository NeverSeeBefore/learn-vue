export const abs = num => {
  let res = num;
  if (num < 0) {
    return -num;
  }
  if (typeof num !== 'number') {
    return NaN;
  }
  return res;
}

// const add = (...args) => {
//   return args.reduce((prev, next) => {
//     return prev + next;
//   })
// }

export const add = (...args) => args.reduce((prev, next) => prev + next);

console.log(abs(1));
console.log(abs(0));
console.log(abs(-1));
console.log(abs("abc"));
console.log(add(1,2,3,4));
console.log(add("abc", 1,2,3));

