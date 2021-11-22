//atividade prática 1
//01
function estados(){
    var estadosDoNorteDoBrasil = ['Amapá', 'Amazonas', 'Pará']
    console.log(estadosDoNorteDoBrasil.reverse());
}

console.log(estados());

//02
function string01(valorA, valorB){
    valorA = 'oi ';
    valorB = 'mundo';
    let maiuscula = valorA.toUpperCase();
    let juntar = maiuscula.concat(valorB);
    return juntar;
}
    
console.log(string01());

var repeticao = () => {
    for(let i = 0; i <=17; i++){
        
        console.log('Repetição');
    }
}

console.log(repeticao());

//atividade 02
//01
var porcentual02 = (n1, porcentual) =>{
return (n1/100)*porcentual;
}

console.log(porcentual02(8, 5));

//02
var array01 = (valor1, valor2) =>{
   valor1 = [1, true, false, 'oi']
   valor2 = [8, false, true, 'hello']
   var juntar = valor2.concat(valor1);
   return juntar.join();
}

console.log(array01());

//atividade 03
//01
var quantidade = (valor, valor2) => {
    return valor.localeCompare(valor2);
}

console.log(quantidade('karoline', 'karol'));

//02
var inverter = function(cincoNumeros){
    cincoNumeros = [1, 2, 3, 4, 5]
    return cincoNumeros.reverse();
}

console.log(inverter());

//03
var soma = (n1, n2, n3, n4) =>{
    if(n1 >= 0 && n2 >= 0 && n3 >= 0 && n4 >= 0){
       var resultado = parseInt(n1 + n2 + n3 + n4);
       return resultado;
    }
    else{
        return 'Digite os números maior ou igual a zero.'
    }
}

 console.log(soma(1.5, 1.5, 2.5, 2));