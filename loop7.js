let multp = 0;
const rresult = (n) => {
  if (n <= 10) {
    if (n > 0) console.log("número valido");
  } else {
    console.log("digite um numero entre 1 a 10");
    return;
  }
  multp += 1;
  if (multp > 10) {
    return 1;
  }
  let calculo = multp * n;
  numero(calculo);
  return rresult(n);
};
let tbu = {};
var multiplica = 0;
const numero = (numero) => {
  multiplica += 1;
  tbu[multiplica] = numero;
  return tbu;
};
rresult(5);
console.log(tbu);
