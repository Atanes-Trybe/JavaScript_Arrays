# Repositório: JavaScript_Arrays
O que são e como trabalhar com Arrays no JavaScript

## O que são Arrays na programação
Um array é uma estrutura de dados que segue uma sequência não ordenada, onde os elementos ficam armazenados em uma posição isolada e o acesso é realizado à partir de índices para cada posição de cada item e que são gerados automáticamente na inclusão de cada elemento no array.  
Eles são utilizados para armazenar uma lista de elementos dentro deles e esses elementos podem ser de quaisquer formato e ou tipo.  

![Project Gif](./images/estrutura_de_arrays.png). 

Dessa forma você pode armazenar muitos valores refenciados com um único nome de variável e acessa-los através do seu índice. 😉

## Criando Arrays no JavaScript
Você [cria uma variável normal em JavaScript](https://github.com/Atanes-Trybe/JavaScript_Variaveis) e na atribuição dos valores coloca os valores dentro de colchetes separados por virgula, exemplo:

```javascript
  let estados = ['São Paulo', 'Rio de Janeiro', 'Minas Gerais', 'Santa Catarina'];
  let numerosPares = [2, 4, 6, 8, 10];
```
## Acessando e modificando os elementos de um Array
Para acessar um elemento de um array só precisamos utilizar o índice da posição do elemento, exemplo:

```javascript
  let nomesPessoasEstudantes = ['Alexandre', 'Adriana', 'Michelle', 'Teresa', 'Cláudio'];
  console.log(nomesPessoasEstudantes[2])
  // A saída desse comando seria Michelle, pois é o valor que está no indice 2 do array nomesPessoasEstudantes.
  
  let numeros = [13, 6, 87, 10, 1, 5];
  let soma = numeros[0] + numeros[4];
  console.log(soma)
  // A saída desse comando seria 14, pois estamos somando o valor que está no indice 0 do array de numeros, que é o número 13, com o valor
  // que está na posição 4 do array de numeros que é o número 1.
```
