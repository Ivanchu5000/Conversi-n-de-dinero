function funcionPrimos(){
    const numero = parseInt(prompt(`Ingrese un número`));
    let numero2;
    let primo = 1;
for(let i = 2; i <= numero; i++){
    primo = 1;
    numero2 = i-1;
    while(i%numero2 != 0){
        numero2 = numero2 - 1
        if(numero2 == 2 && i%numero2 != 0){console.log(`El número ${i} es primo`); primo = primo - 1;}
    }
    if(i == 2 || i == 3){console.log(`El número ${i} es primo`); primo = primo - 1;}
    if(primo == 1){console.log(`El número ${i} es compuesto`);}
}

}

function funcionGrados(){
//Grados Farenheit = Grados Celsius * 1.8 + 32

  let unidades = parseInt(prompt(`Escribe 1 si quieres  pasar de celsius a farenheit o cualquier otro número si quieres pasar de farenheit a celsius`));
  let numero = 0;
  let resultado = 0;
  if(unidades == 1){numero = parseFloat(prompt(`Escribe la cantidad de grados celsius`))}
  else{numero = parseFloat(prompt(`Escribe la cantidad de grados farenheit`))}

//Cálculo

if(unidades == 1){resultado = numero * 1.8 + 32}
else{resultado = (numero - 32) / 1.8}

//Alert

if(unidades == 1){alert(`El resultado son ${resultado} grados farenheit`)}
else{alert(`El resultado son ${resultado} grados celsius`)}
}

function funcionDinero(){

    let unidades = parseInt(prompt(`Escribe 1 si quieres  pasar de dólares a pesos argentinos o cualquier otro número si quieres pasar de pesos argentinos a dólares`));
  let numero = 0;
  let resultado = 0;
  if(unidades == 1){numero = parseFloat(prompt(`Escribe la cantidad de dólares`))}
  else{numero = parseFloat(prompt(`Escribe la cantidad de pesos argentinos`))}

//Cálculo

if(unidades == 1){resultado = numero * 1060}
else{resultado = numero / 1060}

//Alert

if(unidades == 1){alert(`El resultado son ${resultado} pesos argentinos`)}
else{alert(`El resultado son ${resultado} dólares`)}
}

const cambio = pesos => {pesos / 370}
alert(cambio(parseInt(prompt(`¿Cuántos pesos argentinos quieres convertir?`))))
