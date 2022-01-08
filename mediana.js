const list = []
let mediana;

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista
}


// const lista1 = [100, 4000000, 200, 500];
// lista1.sort((a, b) => a - b);

// const mitadLista1 = parseInt(lista1.length / 2);

function esPar(numerito) {
    if (numerito % 2 === 0) {
        return true;
    } else {
        return false;
    }
}


function addItemList() {
    const newItem = document.getElementById("newItem");
    const listView = document.getElementById("lista")
    const newValue = parseInt(newItem.value);
    list.push(newValue)

    listView.innerText = "[" + list + "]"
    newItem.value = ""
}

function onClickButtonMediana() {
    list.sort((a, b) => a - b);
    const mitadLista = parseInt(list.length / 2);
    
    if (esPar(list.length)) {
        const elemento1 = list[mitadLista];
        const elemento2 = list[mitadLista - 1];
    
        const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);
    
        mediana = promedioElemento1y2;
    } else {
        mediana = list[mitadLista]
    }

    const result = calcularMediaAritmetica(list);
    const resultView = document.getElementById("resultPromedio");
    
    resultView.innerText = result;
}