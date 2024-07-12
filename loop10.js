function fatoração(fator) {
  if (fator < 1) {
    return 1;
  }
  return fator * fatoração(fator - 1);
}
const fator = fatoração(5);
console.log(fator);
//  aqui pratiquei a recursiviadde,  no primeiro ciclo a chamada raiz da funçao , eu passei um valor fixo " 5"
// loog na primeira iteraçao dessa função, qual seria o seu trajeto? ela iria primeiramente analisar a sua condição de parada e logo em seguidda iria multiplicar o valor atual "5" com o seu 5 - 1 = 4, 5*4 iria retornar pra função e o novo fator seria 4, assim fazendo a fatoração. e quando chegasse na condição de parada, iria multiplicar os returns que essa funçao cometeu, por isso retornei o numero 1, para fazer o fator * 1, sendo: 120. no caso do numero 5 passado!
