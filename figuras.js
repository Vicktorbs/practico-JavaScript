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

// Interacciones con HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
 function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
 }