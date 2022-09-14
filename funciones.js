"use strict"

var operandoA;
var operandoB;
var operandoC;
var operacion;
var resultado = 0;

/*------------------------------VISUALIZACION DE LOS NUMEROS EN LA PANTALLA-------------------- */
const pruebaPantalla = (num) => {
    arriba.style.fontSize = "27px";
    abajo.style.fontSize = "23px";
    abajo.textContent += num;
    if(abajo.textContent.length > 14) {
        abajo.textContent = "ERROR: NO HAY MÁS ESPACIO";
        setTimeout(()=> {
            limpiar();
        },2000);
        clearTimeout();
    }
}
/*--------------------------BOTONES DE OPERACIONES---------------------- */
const Suma = ()=> {
    if(abajo.textContent == "") abajo.textContent += 0;
    operandoA = abajo.textContent;
    arriba.textContent = abajo.textContent + " + ";
    operacion = 1;
    limpiar();
}

const Resta = ()=> {
    operandoA = abajo.textContent;
    arriba.textContent = abajo.textContent + " - ";
    operacion = 2;
    limpiar();
}

const Multiplicador = ()=> {
    operandoA = abajo.textContent;
    arriba.textContent = abajo.textContent + " * ";
    operacion = 3;
    limpiar();
}

const Dividir = ()=> {
    operandoA = abajo.textContent;
    arriba.textContent = abajo.textContent + " / ";
    operacion = 4;
    limpiar();
}

const raizCuadrada = ()=> {
    operandoC = abajo.textContent;
    operacion = 5;
    limpiar();
    resolver();
}

const Igual = ()=> {
    operandoB = abajo.textContent;
    if (parseInt(operandoB) || operandoB == 0) {
        arriba.textContent += abajo.textContent;
        limpiar();
        resolver();
    } else {
        abajo.textContent = "Error de Sintaxis"
        setTimeout(()=> {Resetear()},3000);
    }
}
/*--------------------FUNCION PARA RESOLVER----------------- */

const resolver = ()=> {
    if(operacion === 1) {
        resultado = parseFloat(operandoA) + parseFloat(operandoB);
        if(isNaN(resultado)) {
            limpiar();
            abajo.textContent = "Error de Sintaxis";
            setTimeout(()=> {Resetear()},3000);
        } else {
            limpiarArriba();
            abajo.textContent += resultado;
        }
    }else if(operacion === 2) {
        resultado = parseFloat(operandoA - operandoB);
        abajo.textContent += resultado;
        limpiarArriba();
    }else if(operacion === 3) {
        resultado = parseFloat(operandoA) * parseFloat(operandoB);
        verPantalla(resultado);
        limpiarArriba();
    }else if (operacion === 4) {
        resultado = parseFloat(operandoA) / parseFloat(operandoB);
        verPantalla(resultado);
        limpiarArriba();
    }else if(operacion === 5) {
        resultado = Math.sqrt(operandoC);
        verPantalla(resultado);
    }

}
/*-----------------------PARA VISUALIZAR NUMEROS 2 DECIMALES-------------- */
const verPantalla = (resultado) => {
    resultado = Number(resultado.toFixed(2));
        if(isNaN(abajo.textContent)) {
        abajo.textContent = "Error de Sintaxis"
        setTimeout(()=> {Resetear()},3000);
    } else abajo.innerHTML += resultado;

}

/*---------------------PARA BOTONES DE ELIMINAR------------------ */

const limpiar = ()=> {
    abajo.textContent = "";
}

const limpiarArriba = ()=> {
    arriba.textContent = "";
}
const Resetear = ()=> {
    arriba.textContent = "";
    abajo.textContent = "";
    const operandoA = 0;
    const operandoB = 0;
    const operacion = "";
}

const Eliminar = ()=> {
    let cadena = abajo.textContent;
    let toArray = cadena.split("");
    toArray.pop();
    let joder = toArray.join('');
    abajo.textContent = joder;
}

const arriba = document.querySelector(".arriba");
const abajo = document.querySelector(".abajo");
const borrar = document.querySelector(".reinicio").addEventListener("click", ()=> Resetear());
const raiz = document.querySelector(".raiz").addEventListener("click", ()=> raizCuadrada());
const eliminar = document.querySelector(".eliminar").addEventListener("click", ()=> Eliminar());
const dividir = document.querySelector(".divisor").addEventListener("click", ()=> Dividir());
const multiplicar = document.querySelector(".multiplica").addEventListener("click", ()=> Multiplicador(9));
const resta = document.querySelector(".resta").addEventListener("click", ()=> Resta());
const suma = document.querySelector(".suma").addEventListener("click", ()=> Suma());
const igual = document.querySelector(".igual").addEventListener("click", ()=> Igual());
const coma = document.querySelector(".coma").addEventListener("click", ()=> {let abajito = abajo.textContent;
if(abajito.includes('.') == false){ 
abajo.innerHTML += ".";}});
const n1 = document.querySelector(".uno").addEventListener("click", () => pruebaPantalla(1));
const n2 = document.querySelector(".dos").addEventListener("click", () => pruebaPantalla(2));
const n3 = document.querySelector(".tres").addEventListener("click", () => pruebaPantalla(3));
const n4 = document.querySelector(".cuatro").addEventListener("click", () => pruebaPantalla(4));
const n5 = document.querySelector(".cinco").addEventListener("click", () => pruebaPantalla(5));
const n6 = document.querySelector(".seis").addEventListener("click", () => pruebaPantalla(6));
const n7 = document.querySelector(".siete").addEventListener("click", () => pruebaPantalla(7));
const n8 = document.querySelector(".ocho").addEventListener("click", () => pruebaPantalla(8));
const n9 = document.querySelector(".nueve").addEventListener("click", () => pruebaPantalla(9));
const n0 = document.querySelector(".cero").addEventListener("click", () => pruebaPantalla(0));