async function fryEgg() {
  return 1;
}

let a;

fryEgg().then((res) => {
  console.log(res);
  a = res;
});

console.log(a); //undefined
