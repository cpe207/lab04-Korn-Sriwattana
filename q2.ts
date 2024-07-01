function arrayStringify(a: number[]) {
  for (let i = 0; i < a.length; i++) {
    return a.toString();
  }
  if (a.length === 0) {
    return " ";
  }
}

const c1: number[] = [1, 2, 3];
const c2: number[] = [10, 9, 8, 7, 6, 5];
const c3: number[] = [];

console.log(arrayStringify(c1));
console.log(arrayStringify(c2));
console.log(arrayStringify(c3));

module.exports = arrayStringify;
