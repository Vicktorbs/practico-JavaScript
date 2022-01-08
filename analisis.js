let list = []
// Helpers
function esPar(numerito) {
    return numerito % 2 === 0;
}

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista
}

// Calculadora de mediana
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
        return mediana;
    } else {
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}

function addItemList() {
    const newItem = document.getElementById("newItem");
    const listView = document.getElementById("lista")
    const newValue = parseInt(newItem.value);
    list.push(newValue)

    console.log(list);
    listView.innerText = "[" + list + "]"
    newItem.value = ""
}

function onClickButtonModa() {
    const salariosColSorted = list.sort(
        function (salaryA, salaryB) {
            return salaryA - salaryB;
        }    
    )

    const medianaGeneralCol = medianaSalarios(salariosColSorted);

    // Mediana del top 10% 
    const spliceStart = (salariosColSorted.length * 90) / 100;
    const spliceCount = salariosColSorted.length - spliceStart;
    const salariosColTop10 = salariosColSorted.splice(spliceStart, (spliceCount >= 1 ?  spliceCount: 1));

    const medianaTop10Col = medianaSalarios(salariosColTop10);

    const resultView = document.getElementById("resultSalario");
    
    resultView.innerText = `El salario medio general es: ${ medianaGeneralCol }
    Salario general del top 10%: ${ medianaTop10Col}`;
    list = []
}