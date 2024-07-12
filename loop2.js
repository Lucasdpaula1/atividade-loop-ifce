const altura = () => {
  class alturaIdiviual {
    constructor(name, altura, id) {
      this.name = name;
      this.altura = altura;
      this.id = id;
    }
    id = 0;
    name = "";
    altura = "";
  }
  const objetGlobal = [];
  let regex = new RegExp(",", "gi");
  let id = 0;
  const quantidade = parseInt(
    prompt("digite aqui a quantidade de pessoas que esta no grupo agora")
  );

  for (let i = 0; i < quantidade; i++) {
    id += 1;
    let name = prompt("digite seu nome");
    let altura = prompt("digite sua altura");
    altura = altura.replace(regex, ".");
    console.log(altura);
    altura = parseFloat(altura);

    altura *= 100;
    if (altura > 1000) {
      alert("altura invalida, tente novamente com uma altura válida");
    }
    objetGlobal.push(new alturaIdiviual(name, altura, id));
  }
  console.log(objetGlobal);
  const maenoraltura = objetGlobal.reduce((acumulador, valoratual) => {
    return acumulador > valoratual.altura ? valoratual.altura : acumulador;
  }, 1000);

  const maioraltura = objetGlobal.reduce((acumulador, valoratual) => {
    return acumulador < valoratual.altura ? valoratual.altura : acumulador;
  }, 0);

  console.log(
    `vcs formam um grupo de ${quantidade} pessoas, a maior altura é ${Math.round(
      maioraltura
    )}cm, e a menor ${Math.round(maenoraltura)}cm`
  );
};
altura();
//  nessa atv em especifico, eu quis montar um molde de um objeto na qual iria servir para cada pessoa que fosse preencher a sua altura respectivamente com seu nome, criei uma lógica que consiguisse converter as virgulas que o usário pudsse colocar para o ponto usando uma expressão regular , para fazer operações aritmeticas no java s. realizei  o tratamento de metro para centimetro ,poém eu poderia ter feito uma verificação caso o valor  ja vinhesse em centímetro , para que n houvesse  a mutlp por 100. e por fim, fiz um reduce para extrair do meu objeto o maior e a menor altura e logo em seguida printar no console.log()
