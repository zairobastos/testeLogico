function inverter(array){
    let aux = array;

    for (let c=array.length-1, cont=0; cont<c; c--, cont++){
        let aux = array[cont];
        array[cont] = array[c];
        array[c] = aux;
    }
    document.writeln(`<br><br>Resposta Q02: ${array}`);
}

inverter([1,2,3,4]);