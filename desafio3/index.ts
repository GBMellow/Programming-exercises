const fs = require("fs");

// Definição da interface para os dados
interface Faturamento {
  dia: number;
  valor: number;
}

// Lendo o JSON de faturamento
const dados: Faturamento[] = JSON.parse(
  fs.readFileSync("faturamento.json", "utf8")
);

// Filtrando dias com faturamento maior que 0
const valores: number[] = dados
  .filter((dia: Faturamento) => dia.valor > 0)
  .map((dia: Faturamento) => dia.valor);

// Calculando estatísticas
const menorValor: number = Math.min(...valores);
const maiorValor: number = Math.max(...valores);
const media: number =
  valores.reduce((acc: number, val: number) => acc + val, 0) / valores.length;
const diasAcimaDaMedia: number = valores.filter(
  (valor: number) => valor > media
).length;

// Exibindo os resultados
console.log(`Menor valor: R$${menorValor.toFixed(2)}`);
console.log(`Maior valor: R$${maiorValor.toFixed(2)}`);
console.log(`Dias acima da média: ${diasAcimaDaMedia}`);
