const numeosNegativos = () => {
  const numerosnegativos = [];
  let quantidadeNumero = Math.floor(Math.random() * 100);
  for (let i = 0; i < quantidadeNumero; i++) {
    let numerosaleatóris = Math.floor(Math.random() * 100) * -1;
    numerosnegativos.push(numerosaleatóris);
  }
  return numerosnegativos;
};
const numerosPositivos = () => {
  const numerosPositivos = [];
  let quantidadeNumero = Math.floor(Math.random() * 100);
  for (let index = 0; index < quantidadeNumero; index++) {
    let numerosaleatóris = Math.floor(Math.random() * 100);
    numerosPositivos.push(numerosaleatóris);
  }
  return numerosPositivos;
};
function média(lista) {
  let quntsNegativos = 0;
  let quntsPositivos = 0;
  let soma = lista.reduce((acumulador, numeroAtual) => {
    return acumulador + numeroAtual;
  }, 0);
  const percent = lista.forEach((element) => {
    if (element > 0) {
      quntsPositivos += 1;
    } else {
      quntsNegativos += 1;
    }
  });

  console.log(
    `a quantidae respectiva de positivos é de ${quntsPositivos.toFixed(
      0
    )} , negativos é de ${quntsNegativos.toFixed(
      0
    )},\n  o percente \n positivo é ${(quntsPositivos / lista.length).toFixed(
      1
    )} o negativo é ${(quntsNegativos / lista.length).toFixed(1)}`
  );

  return soma / lista.length;
}

const resultado = média(numerosPositivos().concat(numeosNegativos()));
console.log(`a média ficou ein ${resultado.toFixed(0)}`);
//  a minha mente ta esgotada para comentar isso. so sei que nada sei. n sei se fui fiel ao exercicio pelo fato que eu n entendi mt bem porém, pelo que eu entendi , era meio que a média de todos os valores, tanto os positivos e os negativos. fiz um math para me dar isso para ambos os resultados e o numero de numeros positivos sempre vai ser diferente pelo fato que o paramentro do for é um numero aleatório para as uas funções resultando sempre em uma divergencia de numeros positivos e negativos e dps eu fiz a média e o percent dos positivos e negativos e suas quantidades.
