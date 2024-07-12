// function calcularNumeros() {
//   const numerosPares = [];
//   const numerosImpares = [];
//   for (let i = 0; i < 500; ) {
//     i++;
//     if (i % 2 === 0) {
//       numerosPares.push(i);
//       continue;
//     } else if (i % 3 === 0) {
//       numerosImpares.push(i);
//     }
//   }
//   let soma = numerosImpares.reduce((acumulador, valorAtual) => {
//     return acumulador + valorAtual;
//   });
//   console.log(numerosPares);
//   console.log(
//     `a quantidade de numeros ímpares entre 1 e 500 é um total de ${numerosImpares.length} algarismos\n e a soma deles fica num total de ${soma}`
//   );
// }
// calcularNumeros();
//  a minha abordagem nesse exércicio foi primeiramente, montar uma estratégia que eu consiguisse de forma mais dinâmica guardar os números ímpares dentro de um array para que a soma ficasse algo mais pratico e controlavel sem precisar constituir dentro da estrutura mais if ou else para fazer essa somatória.

// continuação exercicio 1 ( opcional, gosto de fazer para expandir ainda mais as diversas formas de resolver um mesmo problema) utilizando uma forma recursiva

function part2() {
  const numeroÍmparesMultiplo3 = [];
  const numerosGlobais = [];

  const recursiva = (quantidadeVezes) => {
    if (quantidadeVezes < 1) {
      let somatoria = numeroÍmparesMultiplo3.reduce(
        (acumulador, valorAtual) => {
          return acumulador + valorAtual;
        }
      );
      console.log(
        `usanod a recursividade, o total de numeros impares divisivel por 3 são ${numeroÍmparesMultiplo3.length} e o somatório é ${somatoria}`
      );
      return somatoria;
    }
    numerosGlobais.push(quantidadeVezes);

    const forreach = (element) => {
      if (!numeroÍmparesMultiplo3.includes(element)) {
        if (element % 2 != 0 && element % 3 === 0) {
          numeroÍmparesMultiplo3.push(element);
        }
      }
    };
    numerosGlobais.forEach(forreach);
    recursiva(quantidadeVezes - 1);
  };
  recursiva(500);
}
part2();
//  nesse segundo exemplo, eu quis fazer uma recursiviade que é o ato de uma função se auto chamar, tive que tomar uns cuidados para que não houvesse quebra de pilha que seria quando a função não soubesse  quando ela teria que parar de  se auto invocar dentro de si mesma, por isso construi uma  condição de parada que olhava para o seu próprio parametro. ja neste  eu  tbm quis fazer algo decrescente sendo que começa por 500 e vai em cada chamada subtraindo 1 e verificando esse valor através ddo foreach se é um numero impar e multiplo de 3 e no final somandod tudo.
