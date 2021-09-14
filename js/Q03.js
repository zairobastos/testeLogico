function remover(array){
    let vet=array.filter(function (i) {
        return i;
    });
    document.writeln(`<br><br>Resposta Q03: ${vet}`);
}

remover([1,2,'', undefined]);