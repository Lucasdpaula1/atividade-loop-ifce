const pedido = () => {
  let lista = [];
  const regex = new RegExp("s");
  const variacaoProgressiva = parseInt(
    prompt(
      "digite um numero de sua preferencia e veja a sua progressão de acordo com esse valor"
    )
  );
  const comecoProgressiva = parseInt(
    prompt("qual o começo da sua progressão ? o valor em numero inteiro")
  );
  let a = comecoProgressiva;
  let b = a + variacaoProgressiva;

  lista.push(a, b);
  return lista;
};

const progressao = (listaProgressiva) => {
  let posic = parseInt(
    prompt(
      "qual a posição do algarismo vc quer ver dentro dessa progressão apartir do numero que vc solicitou?"
    )
  );
  alert(`voce escolheu o algorismo de posição ${posic}º`);

  while (posic <= 0) {
    if (posic === 0) {
      console.log(listaProgressiva[0]);
      return;
    }
    alert("numero invalido");
    posic = parseInt(prompt("digite um numero maior que zero"));
  }
  for (let i = 1; i < posic; i++) {
    const razao = listaProgressiva[i] - listaProgressiva[i - 1];
    console.log(razao);

    const termoG = listaProgressiva[0] - razao;
    console.log(termoG);
    const posicD = razao + listaProgressiva[i];
    console.log(posicD);
    let pergunta = prompt(
      "quer sabber logo o valor do algorismo na posição ",
      posic
    );
    if (pergunta === "s") {
      let posicprecisa = razao * posic - termoG;
      console.log(posicprecisa);
      return;
    }

    listaProgressiva.push(posicD);
  }

  console.log(listaProgressiva);
};
progressao(pedido());
export default {
  "first-function": progressao(),
  "second-function": pedido(),
};

//  nessa atividade eu tive que relembrar um pouco sobre a progressao aritme na qual eu não me recordava muito bem pois so tive mais contato com a pg. porém ela é bem tranquila depois que vc entende o conceito que é que diz a respeito a diferença tanto de acrescimo e decres ser igualitária, com base nisso eu so tive que descobrir qual era a diferença com base em qual algarismo o usuário queria percorrer, se era em 2 em 2 ou em 4 em 4, enfim. extraio essa informação através de uma caixa de entrada , a primeira entrada queria identificar em qual pulo a progressão iria progredir e no segundo por qual algarismo essa progressão se iniciaria, com esses valores bases conseguimos tranquilamente saber qualquer posição de algorismo dentro dessa progressão, vamos supor que eu bote " quero que ela vá de 2 em 2 , e que comece no algorismo 5" a minha estrutura de dados do tipo array  "lista" ficará da seguinte forma [5,7] pois no indice 0 é representado por 5 e no outro por 7 pois minha variavel b é a soma do indice 0 com o valor da progressiva passada , que no caso foi 2 . saindo dessa função ja temos tudo que precisamos para achar os outros indices para completar a progressão. agora solicitaremos a posição apreciada por nosso usuário , caso fosse sla o  valor da posição " 5" porém antes disso, teremos que primeiro passar  por um sistema de verificação caso o usuário botasse para ver o valor do elemento da posição "1" que ja tinhamos declarado inicialmente  dentro do array, que ficava localizado no indice 0 que neste nosso exemplo é o valor "5", não tinha muito sentido proseguir para ver o restante dos algorismo pois ele so quis até o primeiro algorismo portanto encerraria o nosso programa e no outro caso se  fosse um valor menor que 0 seria barrado tbm, entretanto, estamos no mundo perfeito e nosso usuário decidiu ver o elemento que ocupa a posição 5 na nossa progressão a partir daqueles valores bases, agora ele teria uma simples opção de escolha que seria ver todos os valores dos algorismo que ocupam uma posição inferior a quinta ou ver logo o resultado que ocupa tal posição assim fnalizando a nossa progressão!. e por fim fiz uma modularizaççao em formato de objeto para deixar meio como padrão e fazer o mesmo sistema no outro aquivo.
