/*
Crie um programa que identifique valores pares e ímpares. Esse programa deve:
- Receber 10 valores numéricos e colocá-los em um vetor;
- Iterar pelo vetor e definir se cada valor é par ou ímpar;
- Mostrar ao usuário qual o valor sendo estudado e qual a definição dele;
    Exemplo:
        - "1 é ímpar"
        - "38.219.830.922 é par"

- Bônus: Garantir que o usuário digite números nos inputs, repetindo a pergunta caso ele digite qualquer outra coisa que não números;
*/

let num = [];
for (i = 0; i < 10; i++){
    num[i] = Number(prompt("Digite um valor:"));
}

for (i = 0; i < num.length; i++){
    if(num[i] % 2 == 0){
        alert(`O número ${num[i]} é ímpar`);
    }else{
        alert(`O número ${num[i]} é Par`);
    }
}