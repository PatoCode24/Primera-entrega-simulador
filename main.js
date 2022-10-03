let productos = "Ponemos a su disposición nuestro catálogo: \n1-Potus $810 \n2-Ficus $1125 \n3-Palma areca $7650 \n4-Monstera deliciosa $3420 \n5-Maceta piramidal $3325 \n6-Maceta fibrocemento $1900 \n7-Maceta edén $1980 \n8-Maceta rotomoldeada $5525";
let elegir_cantidad;
let total = 0;


function cantidad(unidades, precio) {
    return unidades * precio
}

let desea_comprar = prompt("Bienvenido a Babilonia Deco Natural \nDesea comprar alguno de nuestros productos? \nIngrese si para confirmar. \nIngrese no para salir");

while (desea_comprar != "si" && desea_comprar != "no") {
    alert("Por favor ingrese si o no");
    desea_comprar = prompt("Desea comprar algo: si o no");
}
if (desea_comprar === "si") {
    alert(productos);
    console.log(productos);
}
else if (desea_comprar === "no") {
    alert("Gracias por visitarnos");
    console.log("Gracias por visitarnos");
}

while (desea_comprar != "no") {

    productos = parseInt(prompt("Ingresa el número del producto elegido"));

    switch (productos) {
        case 1:
            elegir_cantidad = parseInt(prompt("El producto seleccionado es Potus , por favor elija qué cantidad desea comprar"));
            total += cantidad(elegir_cantidad, 810)
            break;
        case 2:
            elegir_cantidad = parseInt(prompt("El producto seleccionado es Ficus  , por favor elija qué cantidad desea comprar"));
            total += cantidad(elegir_cantidad, 1125)
            break;
        case 3:
            elegir_cantidad = parseInt(prompt("El producto seleccionado es Palma areca , por favor elija qué cantidad desea comprar"));
            total += cantidad(elegir_cantidad, 7650)
            break;
        case 4:
            elegir_cantidad = parseInt(prompt("El producto seleccionado es Monstera deliciosa  , por favor elija qué cantidad desea comprar"));
            total += cantidad(elegir_cantidad, 3420)
            break;
        case 5:
            elegir_cantidad = parseInt(prompt("El producto seleccionado es Maceta piramidal , por favor elija qué cantidad desea comprar"));
            total += cantidad(elegir_cantidad, 3325)
            break;
        case 6:
            elegir_cantidad = parseInt(prompt("El producto seleccionado es Maceta fibrocemento , por favor elija qué cantidad desea comprar"));
            total += cantidad(elegir_cantidad, 1900)
            break;
        case 7:
            elegir_cantidad = parseInt(prompt("El producto seleccionado es Maceta edén  , por favor elija qué cantidad desea comprar"));
            total += cantidad(elegir_cantidad, 1980)
            break;
        case 8:
            elegir_cantidad = parseInt(prompt("El producto seleccionado es Maceta rotomoldeada  , por favor elija qué cantidad desea comprar"));
            total += cantidad(elegir_cantidad, 5525)
            break;

        default:
            break;
    }

    break;
}

if (desea_comprar === "si") {
    alert("El total es de $" + total);
    console.log("El total es de $" + total);
}

if (total != 0) {
    alert("Gracias por su compra");
    console.log("Gracias por su compra");
}
