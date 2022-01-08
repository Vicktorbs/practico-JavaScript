const lista1 = [1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1 ];
const list = []
let lista1Count = {};

function addItemList() {
    const newItem = document.getElementById("newItem");
    const listView = document.getElementById("lista")
    const newValue = parseInt(newItem.value);
    list.push(newValue)

    listView.innerText = "[" + list + "]"
    newItem.value = ""
}

function onClickButtonModa() {
    list.map(
        function (elemento) {
            if (lista1Count[elemento]) {
                lista1Count[elemento] += 1;
            } else {
                lista1Count[elemento] = 1;
            }
        }
    )

    let listaArray = Object.entries(lista1Count).sort((a, b) => a[1] - b[1]);

    let moda = listaArray[listaArray.length - 1];

    const resultView = document.getElementById("resultModa");
    
    resultView.innerText = "La moda es: " + moda[0] + " - Aparece " + moda[1];
    moda, listaArray = [];
    lista1Count = {};
}
