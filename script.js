const DOLAR = 290;
let menu2 = 0;

function dolarAPeso(dolar) {
  return dolar * DOLAR;
}

function pesoADolar(peso) {
  return peso / DOLAR;
}

function validarMenu(menu) {
  while (menu !== "1" && menu !== "2" && menu !== "3") {
    alert("Opcion no valida, ingrese nuevamente");
    menu = prompt(
      "Elija una opcion\n1- Dolares a pesos \n2- Pesos a dolares\n3- Mostrar valor del dolar"
    );
  }
  return menu;
}

function validarNumero(numero) {
  while (isNaN(numero)) {
    alert("Lo ingresado no fue un numero, ingrese nuevamente");
    numero = parseInt(prompt("Ingrese el valor a convertir"));
  }
  return numero;
}

function validarMenuDos(menu2) {
  while (menu2 !== "0" && menu2 !== "1") {
    alert("Opcion no valida, ingrese nuevamente");
    menu2 = prompt(
      "Gracias por usar nuestro cotizador\n1- Hacer otra cotizacion\n0- Salir"
    );
  }
  return menu2;
}

do {
  //pide una opcion
  let opcion = prompt(
    "Elija una opcion\n1- Dolares a pesos \n2- Pesos a dolares\n3- Mostrar valor del dolar"
  );
  //valida que la opcion sea correcta
  opcion = validarMenu(opcion);

  //ejecuta la opcion tres
  while (opcion === "3") {
    alert("El valor del dolar es" + " " + DOLAR);
    opcion = prompt(
      "Elija una opcion\n1- Dolares a pesos \n2- Pesos a dolares\n3- Mostrar valor del dolar"
    );
    //vuelve a validar que la opcion sea correcta
    opcion = validarMenu(opcion);
  }

  //pide un valor
  let valor = parseInt(prompt(`Ingrese el valor a convertir`));
  //valida que sea un numero
  valor = validarNumero(valor);

  //ejecuta la opcion uno o la dos
  if (opcion === "1") {
    alert("Al cambio serian" + " " + dolarAPeso(valor) + " pesos");
  } else {
    alert("Al cambio serian" + " " + pesoADolar(valor).toFixed(2) + " dolares");
  }

  //pide que ingreses una opcion para continuar o salir
  menu2 = prompt(
    "Gracias por usar nuestro cotizador\n1- Hacer otra cotizacion\n0- Salir"
  );
  //valida que la opcion sea correcta
  menu2 = validarMenuDos(menu2);
} while (menu2 !== "0");
