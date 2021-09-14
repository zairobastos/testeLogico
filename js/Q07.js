function comparacao(array1, array2){
    if(array1.length == array2.length){
        let cont=0;
        for(let c=0; c<array1.length-1; c++){
            if(array1[c]===array2[c]){
                cont++;
                if(cont==array1.length-1){
                    document.writeln(`<br><br>Resposta Q07: true`);
                    return true;
                }
                    
            }else{
                return false;
            }
        }
    }else{
        return false;
    }
}

comparacao([1,2,3,4],[1,2,3,4]);