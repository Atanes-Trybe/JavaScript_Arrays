let estados = ['São Paulo', 'Rio de Janeiro', 'Minas Gerais', 'Santa Catarina'];
let numerosPares = [2, 4, 6, 8, 10];

let nomesPessoasEstudantes = ['Alexandre', 'Adriana', 'Michelle', 'Teresa', 'Cláudio'];
console.log(nomesPessoasEstudantes[2])

let numeros = [13, 6, 87, 10, 1, 5];
let soma = numeros[0] + numeros[4];
console.log(soma)

let nomesPessoasEstudantes = ['Alexandre', 'Adriana', 'Michelle', 'Teresa', 'Cláudio'];
nomesPessoasEstudantes[0] = 'Carol';
console.log(nomesPessoasEstudantes[0])

let numeros = [13, 6, 87, 10, 1, 5];
numeros[4] = 7;
let soma = numeros[0] + numeros[4];
console.log(soma)

let nomesPessoasEstudantes = ['Alexandre', 'Adriana', 'Michelle', 'Teresa', 'Cláudio'];
console.log(nomesPessoasEstudantes)
// A saída desse comando seria ['Alexandre', 'Adriana', 'Michelle', 'Teresa', 'Cláudio'].

let numeros = [13, 6, 87, 10, 1, 5];
console.log(numeros)
// A saída desse comando seria [13, 6, 87, 10, 1, 5].

let numeros = [13, 6, 87, 10, 1, 5];
console.log(numeros.length);
// A saída desse comando é 6, pois o array numeros tem 6 elementos armazenados dentro dele.

// Para acessar o valor do primeiro elemento do array podemos usar o indice 0 e para acessar o valor do ultimo elemento do array
// podemos usar o indice array.length - 1.
console.log(numeros[0]);
console.log(numeros[numeros.length - 1]);

let nomesPessoasEstudantes = ['Alexandre', 'Adriana', 'Michelle', 'Teresa', 'Cláudio'];
nomesPessoasEstudantes.push('Rodolfo');
console.log(nomesPessoasEstudantes)
// A saída desse comando é ['Alexandre', 'Adriana', 'Michelle', 'Teresa', 'Cláudio','Rodolfo'] com o novo elemento adicionado no final do array

let nomesPessoasEstudantes = ['Alexandre', 'Adriana', 'Michelle', 'Teresa', 'Cláudio'];
nomesPessoasEstudantes.unshift('Rodolfo');
console.log(nomesPessoasEstudantes)
// A saída desse comando é ['Rodolfo','Alexandre', 'Adriana', 'Michelle', 'Teresa', 'Cláudio'] com o novo elemento adicionado no início do array.

let frutas = ["Banana", "Laranja", "Maça", "Manga", "Abacate"];
frutas.pop();
console.log(frutas)
// A saída desse comando é ["Banana", "Laranja", "Maça", "Manga"] com o ultimo elemento (Abacate) removido do array

let frutas = ["Banana", "Laranja", "Maça", "Manga", "Abacate"];
delete frutas[0];
console.log(frutas)
// A saída desse comando é [undefined, "Laranja", "Maça", "Manga", "Abacate"] com o undefined no lugar de Banana.

let frutas = ["Banana", "Laranja", "Maça", "Manga", "Abacate"];
frutas.splice(3, 0, "Uva", "Morango");
console.log(frutas)
// A saída desse comando é ["Banana", "Laranja", "Maça", "Uva", "Morango", "Manga", "Abacate"] com a inclusão de Uva e Morango depois da terceira posição do array.

let frutas = ["Banana", "Laranja", "Maça", "Manga", "Abacate"];
frutas.splice(2, 2);
console.log(frutas)
// A saída desse comando é ["Banana", "Laranja", "Abacate"] com a exclusao de Maça e Manga, os dois elementos a partir da posição 2 do array.

let frutas = ["Banana", "Laranja", "Maça", "Manga", "Abacate"];
console.log(frutas.toString())
// A saída desse comando é Banana,Laranja,Maça,Manga,Abacate.

let frutas = ["Banana", "Laranja", "Maça", "Manga", "Abacate"];
console.log(frutas.join(" - "))
// A saída desse comando é Banana - Laranja - Maça - Manga - Abacate.

let frutas = ["Banana", "Laranja", "Maça", "Manga", "Abacate"];
console.log(frutas.reverse())
// A saída desse comando é ["Abacate", "Manga", "Maça", "Laranja", "Banana"].

// Exemplo para extrair 'Laranja' e 'Limao' do array frutas
let frutas = ['Banana', 'Morango', 'Amora', 'Laranja', 'Limao', 'Maçã', 'Manga'];
let frutasVermelhas = frutas.slice(1, 3);
console.log(frutasVermelhas);
// A saída desse somando seria ['Morango', 'Amora'] que é o conteúdo do novo array frutasVermelas

for (let index = 0; index < frutas.length; index += 1) {
    console.log('Fruta: ', frutas[index]);
}

// Usando a variável index para referenciar cada indice do array e fazendo o controle
// dessa variável até o tamanho do array e com passo de 1 em 1, a saída desse comando
// é:
// Fruta:  Banana
// Fruta:  Morango
// Fruta:  Amora
// Fruta:  Laranja
// Fruta:  Limao
// Fruta:  Maçã
// Fruta:  Manga

let frutas = ['Banana', 'Morango', 'Amora', 'Laranja', 'Limao', 'Maçã', 'Manga'];
for (fruta of frutas) {
    console.log('Fruta: ', fruta);
}

// A estrutura desse laço for é bem mais simples e o resultado é o mesmo do for tradicional:
// Fruta:  Banana
// Fruta:  Morango
// Fruta:  Amora
// Fruta:  Laranja
// Fruta:  Limao
// Fruta:  Maçã
// Fruta:  Manga
