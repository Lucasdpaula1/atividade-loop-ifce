class invervalos {
  constructor(a, b, c, d) {
    this["1-25"] += a;
    this["26-50"] += b;
    this["51-75"] += c;
    this["76-100"] += d;
  }
  "1-25" = 0;
  "26-50" = 0;
  "51-75" = 0;
  "76-100" = 0;
}
export const intervalo = () => {
  let a = 0;
  let b = 0;
  let c = 0;
  let d = 0;
  let controle = false;
  var qutndNumber = 0;
  while (!controle) {
    qutndNumber += 1;
    const recado = () => {
      controle = true;
      console.log(
        "o numero que voce digitou era negativo por isso encerramos o programa"
      );
    };
    let number = parseInt(prompt("digite um número aleatório de 1 a 100"));
    number < 0 ? recado() : alert(`esse é seu ${qutndNumber} numero`);

    if (1 <= number && number <= 25) {
      a += 1;
    } else if (number <= 50) {
      b += 1;
    } else if (number <= 75) {
      c += 1;
    } else if (number <= 100) {
      d += 1;
    }
  }
  const obj = new invervalos(a, b, c, d);
  console.log(`vai a lista da quantidade de numeros ${JSON.stringify(obj)}`);
};
intervalo();
