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
function calcularPerimetroTriangulo() {
    const input1 = parseInt(document.getElementById("inputTriangulo1").value);
    const input2 = parseInt(document.getElementById("inputTriangulo2").value);
    const input3 = parseInt(document.getElementById("inputTriangulo3").value);
    console.log(input1, input2, input3);

    const perimetro = perimetroTriangulo(input1, input2, input3);
    alert(perimetro)
}
 function calcularAreaTriangulo() {
    const input3 = document.getElementById("inputTriangulo3").value;
    const inputAltura = document.getElementById("inputTrianguloAltura").value;


    const area = areaTriangulo(input3, inputAltura)
    alert(area);
}
function calcularDiametroCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const diametro = diametroCirculo(value);
    alert(diametro);
}
function calcularPerimetroCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}
function calcularAreaCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}