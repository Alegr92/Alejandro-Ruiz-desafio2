const DIVISAS = [
  {
    divisa: "Dolar",
    precio: 290,
  },
  {
    divisa: "Euro",
    precio: 315,
  },
  {
    divisa: "Real",
    precio: 56,
  },
];

let menu2 = 0;
let mostrarDivisas = [];

function dolarAPeso(dolar) {
  return dolar * DIVISAS[0].precio;
}

function pesoADolar(peso) {
  return peso / DIVISAS[0].precio;
}

function euroAPeso(euro) {
  return euro * DIVISAS[1].precio;
}
function pesoAEuro(peso) {
  return peso / DIVISAS[1].precio;
}

function realAPeso(real) {
  return real * DIVISAS[2].precio;
}
function pesoAReal(peso) {
  return peso / DIVISAS[2].precio;
}

function validarMenu(menu) {
  while (
    menu !== "1" &&
    menu !== "2" &&
    menu !== "3" &&
    menu !== "4" &&
    menu !== "5" &&
    menu !== "6" &&
    menu !== "7"
  ) {
    alert("Opcion no valida, ingrese nuevamente");
    menu = prompt(
      "Elija una opcion\n1- Dolares a pesos \n2- Pesos a dolares\n3- Euros a pesos\n4- Pesos a euros\n5- Real a peso\n6- Peso a real\n7- Mostrar valores de las divisas"
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

function cargarDivisas(lista) {
  lista.forEach((obj) => {
    mostrarDivisas.push(obj.divisa + " " + obj.precio + " Pesos argentinos");
  });
}

function pintarDivisas(divisas) {
  alert(divisas[0] + "\n" + divisas[1] + "\n" + divisas[2]);
}

do {
  //pide una opcion
  let opcion = prompt(
    "Elija una opcion\n1- Dolares a pesos \n2- Pesos a dolares\n3- Euros a pesos\n4- Pesos a euros\n5- Real a peso\n6- Peso a real\n7- Mostrar valores de las divisas"
  );
  //valida que la opcion sea correcta
  opcion = validarMenu(opcion);

  //ejecuta la opcion siete
  while (opcion === "7") {
    cargarDivisas(DIVISAS);
    pintarDivisas(mostrarDivisas);
    // reinicio el array por si ingresan 2 veces seguidas la misma opcion
    mostrarDivisas = [];
    opcion = prompt(
      "Elija una opcion\n1- Dolares a pesos \n2- Pesos a dolares\n3- Euros a pesos\n4- Pesos a euros\n5- Real a peso\n6- Peso a real\n7- Mostrar valores de las divisas"
    );
    //vuelve a validar que la opcion sea correcta
    opcion = validarMenu(opcion);
  }

  //pide un valor
  let valor = parseInt(prompt(`Ingrese el valor a convertir`));
  //valida que sea un numero
  valor = validarNumero(valor);

  //ejecuta el switch
  switch (opcion) {
    case "1":
      alert("Al cambio serian" + " " + dolarAPeso(valor) + " pesos");
      break;
    case "2":
      alert(
        "Al cambio serian" + " " + pesoADolar(valor).toFixed(2) + " dolares"
      );
      break;
    case "3":
      alert("Al cambio serian" + " " + euroAPeso(valor) + " pesos");
      break;
    case "4":
      alert("Al cambio serian" + " " + pesoAEuro(valor).toFixed(2) + " euros");
      break;
    case "5":
      alert("Al cambio serian" + " " + realAPeso(valor) + " pesos");
      break;
    case "6":
      alert("Al cambio serian" + " " + pesoAReal(valor).toFixed(2) + " reales");
      break;

    default:
      break;
  }

  //pide que ingreses una opcion para continuar o salir
  menu2 = prompt(
    "Gracias por usar nuestro cotizador\n1- Hacer otra cotizacion\n0- Salir"
  );
  //valida que la opcion sea correcta
  menu2 = validarMenuDos(menu2);
} while (menu2 !== "0");
