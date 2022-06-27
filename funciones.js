"use strict"

var operandoA;
var operandoB;
var operandoC;
var operacion;


const pruebaPantalla = (num) => {
    console.log(num);
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

const Suma = ()=> {
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

const Coma = ()=> {
    let simbolo =  ".";
    abajo.textContent += simbolo;
}

const Igual = ()=> {
    operandoB = abajo.textContent;
    arriba.textContent += abajo.textContent;
    limpiar();
    resolver();
}

const resolver = ()=> {
    if(operacion === 1) {
        const resultado = parseFloat(operandoA) + parseFloat(operandoB);
        abajo.textContent += resultado;
    }else if(operacion === 2) {
        const resultado = parseFloat(operandoA) - parseFloat(operandoB);
        abajo.textContent += resultado;
    }else if(operacion === 3) {
        const resultado = parseFloat(operandoA) * parseFloat(operandoB);
        verPantalla(resultado);
    }else if (operacion === 4) {
        const resultado = parseInt(operandoA) / parseInt(operandoB);
        verPantalla(resultado);
    }else if(operacion === 5) {
        const resultado = Math.sqrt(operandoC);
        verPantalla(resultado);
    }

}

const verPantalla = (resultado) => {
    console.log(resultado.length);
        if (resultado.length == undefined) {
            abajo.style.fontSize = "25px";
            abajo.toString();
            console.log(resultado);
            abajo.innerHTML += resultado.toFixed(4);
            console.log(abajo.innerHTML)
        } else abajo.textContent += resultado;
}

const limpiar = ()=> {
    abajo.textContent = "";
}

const Resetear = ()=> {
    arriba.textContent = "";
    abajo.textContent = "";
    const operandoA = 0;
    const operandoB = 0;
    const operacion = "";
}

const pantalla = document.querySelector(".pantalla");
const arriba = document.querySelector(".arriba");
const abajo = document.querySelector(".abajo");
const borrar = document.querySelector(".reinicio").addEventListener("click", ()=> Resetear());
const raiz = document.querySelector(".raiz").addEventListener("click", ()=> raizCuadrada());
const porcentaje = document.querySelector(".porcentaje");
const dividir = document.querySelector(".divisor").addEventListener("click", ()=> Dividir());
const multiplicar = document.querySelector(".multiplica").addEventListener("click", ()=> Multiplicador(9));
const resta = document.querySelector(".resta").addEventListener("click", ()=> Resta());
const suma = document.querySelector(".suma").addEventListener("click", ()=> Suma());
const igual = document.querySelector(".igual").addEventListener("click", ()=> Igual());
const coma = document.querySelector(".coma").addEventListener("click", ()=> Coma());
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