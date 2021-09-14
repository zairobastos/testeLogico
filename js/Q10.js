function iguais(array, array2){
    let aux =[];
    let x=0;
    for(let c=0;c<=array.length-1; c++){
        for (let cc = 0; cc < array2.length-1; cc++) {
            if(array[c]==array2[cc]){
                aux[x] =array2[cc];
                x++;
            }            
        }
    }
    document.writeln(`<br><br>Resposta Q10: ${aux}`);
}

iguais([6, 8], [8, 9]);