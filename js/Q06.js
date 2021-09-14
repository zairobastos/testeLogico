function duplicados(arr){

    let newArray = arr.filter((este, i) => arr.indexOf(este) === i);
    document.writeln(`<br><br>Resposta Q06: ${newArray}`);
    
}

duplicados([1,2,3,3,2,4,5,4,7,3])