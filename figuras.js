// Cuadrado 
console.group("Cuadrado");

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
    return lado * lado;
}
// console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");

console.groupEnd();

// Triangulo 
console.group("Triángulo");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;
// console.log("Los lados del triángulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm");
// console.log("La altura del triangulo es de: " + alturaTriangulo);

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo (base, altura) {
    return (base * altura) / 2;
}
// console.log("El área del triángulo es: " + areaTriangulo + "cm^2");

console.groupEnd();

// Círculo 
console.group("Círculo");

// const radioCirculo = 4;
function diametroCirculo(radio) {
    return radio * 2;
}
const PI = Math.PI;
function perimetroCirculo(radio) {
    return diametroCirculo(radio) * PI;
}
function areaCirculo(radio) {
    return (radio * radio) * PI;
}

// console.log("El radio del círculo es: " + radioCirculo + "cm");
// console.log("PI es: " + PI + "cm");
// console.log("El perímetro del circulo es: " + perimetroCirculo + "cm");
// console.log("El área del circulo es: " + areaCirculo + "cm^2");

console.groupEnd();

function trianguloIsosceles(lado1, lado2) {
    if (lado1 === lado2) {
        return true;
    }
    return false;
}

function alturaTriangulo(lado1, lado3) {
    const h = Math.sqrt((lado1**2)-(lado3**2)/4);
    return h;
}

// Interacciones con HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    
    const result = document.getElementById("cuadradoResultado");
    result.innerHTML = `<p class="results">${ perimetro }</p>`;
}
 function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    
    const result = document.getElementById("cuadradoResultado");
    result.innerHTML = `<p class="results">${ area }</p>`;
}
function calcularPerimetroTriangulo() {
    const input1 = parseInt(document.getElementById("inputTriangulo1").value);
    const input2 = parseInt(document.getElementById("inputTriangulo2").value);
    const input3 = parseInt(document.getElementById("inputTriangulo3").value);
    const perimetro = perimetroTriangulo(input1, input2, input3);
    
    const result = document.getElementById("trianguloResultado");
    result.innerHTML = `<p class="results">${ perimetro }</p>`;
}
 function calcularAreaTriangulo() {
    const input3 = document.getElementById("inputTriangulo3").value;
    const inputAltura = document.getElementById("inputTrianguloAltura").value;
    const area = areaTriangulo(input3, inputAltura)
   
    const result = document.getElementById("trianguloResultado");
    result.innerHTML = `<p class="results">${ area }</p>`;
}
function calcularDiametroCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const diametro = diametroCirculo(value);
    
    const result = document.getElementById("circuloResultado");
    result.innerHTML = `<p class="results">${ diametro }</p>`;
}
function calcularPerimetroCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    
    const result = document.getElementById("circuloResultado");
    result.innerHTML = `<p class="results">${ perimetro }</p>`;
}
function calcularAreaCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    
    const result = document.getElementById("circuloResultado");
    result.innerHTML = `<p class="results">${ area }</p>`;
}
function calcularAlturaTrianguloIsosceles() {
    const lado1 = document.getElementById("inputTriangulo1isosceles");
    const lado2 = document.getElementById("inputTriangulo2isosceles");
    const lado3 = document.getElementById("inputTriangulo3isosceles");
    const value1 = lado1.value;
    const value2 = lado2.value;
    const value3 = lado3.value;
    const result = document.getElementById("trianguloIsoscelesResultado");
    console.log(result);

    if (trianguloIsosceles(value1, value2)) {
        const h = alturaTriangulo(value1, value3);
        result.innerHTML = `<p class="results">${ h }</p>`;
    } else {
        result.innerHTML = `<p class="results">No es un triangulo isosceles</p>`;
    }
}