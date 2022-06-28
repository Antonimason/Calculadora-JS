"use strict"

var operandoA;
var operandoB;
var operandoC;
var operacion;

/*------------------------------VISUALIZACION DE LOS NUMEROS EN LA PANTALLA-------------------- */
const pruebaPantalla = (num) => {
    if(num == 20) {
        num = ".";
    }
    abajo.style.fontSize = "30px";
    abajo.innerHTML += num;
    if(abajo.textContent.length > 18) {
        abajo.textContent = "ERROR, NO HAY MÁS ESPACIO";
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

const Resta = ()=>{
    operandoA = abajo.textContent;
    arriba.textContent = abajo.textContent + " - ";
    operacion = 2;
    limpiar();
}

const Multiplicador = () => {
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
        const resultado = parseFloat(operandoA) + parseFloat(operandoB);
        abajo.textContent += resultado;
        limpiarArriba();
    }else if(operacion === 2) {
        const resultado = parseFloat(operandoA - operandoB);
        abajo.textContent += resultado;
        limpiarArriba();
    }else if(operacion === 3) {
        const resultado = operandoA * operandoB;
        verPantalla(resultado);
        limpiarArriba();
    }else if (operacion === 4) {
        const resultado = operandoA / operandoB;
        verPantalla(resultado);
        limpiarArriba();
    }else if(operacion === 5) {
        const resultado = Math.sqrt(operandoC);
        verPantalla(resultado);
    }

}
/*-----------------------PARA VISUALIZAR NUMEROS 2 DECIMALES-------------- */
const verPantalla = (resultado) => {
    resultado.toString;
    if (resultado.length == undefined ) {
        abajo.toString();
        abajo.innerHTML += resultado.toFixed(2);
        console.log(abajo.innerHTML)
    } else abajo.textContent += resultado;
}

/*---------------------PARA BOTONES DE ELIMINAR------------------ */

const limpiar = ()=> {
    abajo.textContent = "";
}

const limpiarArriba = ()=> {
    setTimeout(()=> {arriba.textContent = "";},1000);
    clearTimeout();
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

const pantalla = document.querySelector(".pantalla");
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
const coma = document.querySelector(".coma").addEventListener("click", ()=> pruebaPantalla(20));
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