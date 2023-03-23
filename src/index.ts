type SuperPrintExample = {
  (arr: number[]): void,
  (arr: string[]): void,
  (arr: boolean[]): void,
  (arr: (number|boolean)[]): void,
};
type SuperPrint = {
  <T>(arr: T[]): T,
  <T, M>(arr: T[], no:M): T,
};

const superPrint: SuperPrint = (arr, no?) => {
  if(no) return arr[no];
  return arr[0];
}

const superPrint2: SuperPrint = (arr) => {
  return arr[0];
}


const a = superPrint([1, 2, 3, 4])
const b = superPrint([true, false, true], 1)
const c = superPrint(["a", "b", "c"], 2)
const d = superPrint([1, 2, true, false])
console.log(b);

console.log(c.concat("ddd"));
console.log(a);
console.log(b);
console.log(c);
console.log(d);
