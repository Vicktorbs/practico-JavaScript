const list = []

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista
}

function addItemList() {
    const newItem = document.getElementById("newItem");
    const listView = document.getElementById("lista")
    const newValue = parseInt(newItem.value);
    list.push(newValue)

    listView.innerText = "[" + list + "]"
    newItem.value = ""
}

function onClickButtonPromedio() {
    const result = calcularMediaAritmetica(list);
    const resultView = document.getElementById("resultPromedio");
    console.log(result, resultView);
    resultView.innerText = result;
}