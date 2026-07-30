let largestnumber = 20
let smallestnumber = 10
let middlenumber = 15
console.log("O maior número é: " + largestnumber);
console.log("O menor número é: " + smallestnumber);
console.log("O número do meio é: " + middlenumber);

let lado1 = 5
let lado2 = 10
let lado3 = 15
console.log("Se forma triangulo? " + (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1));
let lado4 = 20
let lado5 = 20
let lado6 = 20
console.log("O triângulo é equilátero? " + (lado4 === lado5 && lado4 === lado6 && lado5 === lado6));
let lado7 = 10
let lado8 = 10
let lado9 = 15
console.log("O triângulo é isósceles? " + (lado7 === lado8 || lado7 === lado9 || lado8 === lado9));
let lado10 = 5
let lado11 = 10 
let lado12 = 15
console.log("O triângulo é escaleno? " + (lado10 !== lado11 && lado10 !== lado12 && lado11 !== lado12));

let horastrabalhadas = 160
let valorhora = 21.25
let salariobruto = horastrabalhadas * valorhora
console.log("O salário bruto é: " + salariobruto);
let salarioLiquido = salariobruto - (salariobruto * 0.15) - (salariobruto * 0.12) - (salariobruto * 0.06)  
console.log("O salário líquido é: " + salarioLiquido);

let vitorias = 10
let derrotas = 5
let empates = 3
let pontos = (vitorias * 3) + (empates * 1)
console.log("O total de pontos é: " + pontos);
let aproveitamento = (pontos / ((vitorias + derrotas + empates) * 3)) * 100
console.log("O aproveitamento é: " + aproveitamento + "%");
console.log("o time foi excelente?, pessimo?, bom ou regular? " + (aproveitamento >= 70 ? "O time foi Excelente" : aproveitamento >= 50 ? "O time foi Bom" : aproveitamento >= 30 ? "O time foi Regular" : "O time foi Péssimo"));








