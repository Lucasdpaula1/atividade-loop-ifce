function ímpar() {
  const numero = [];
  for (let index = 100; index < 200; index++) {
    if (index % 2 === 0) {
      continue;
    } else {
      numero.push(index);
    }
  }
  console.log(
    `a sequencia dos numeros impares entre 100 e 200 são ${numero.join(",")}`
  );
}
ímpar();
