
var notas = [8, 6, 4];//Declaração de notas

var média = (notas[0] + notas[1] + notas[2])/3;//Faz o calculo da média

for(var i = 0; i <= 2; i++){//Escreve as notas no console por loop for (percorre o array notas)
    console.log(i+1,"º Nota:", notas[i]);
    }

    console.log("Média:", média);//Imprime a média fora do loop, depois das médias e antes da situação.

if(média >=7){//Imprime no console a condição de aprovado caso o if seja verdadeiro
    console.log("Situação: aprovado");
}
else{//Imprime no console a condição de aprovado caso o if seja falso
    console.log("Situação: reprovado");
}

