// const precioOriginla = 120;
// const descuento = 18;

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

// console.log({
//     precioOriginla,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// });

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;
    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;
    const result = document.getElementById("resultP")

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    result.innerText = "El precio con descuento son: $" + precioConDescuento;
}