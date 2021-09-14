function remover(array,num1,num2){
    let total = array.length-1;

    for(let c=0; c<total; c++){
        let index = array.indexOf(num1);
        if (index>-1)
            array.splice(index,1);

        let busca = array.indexOf(num2);
        if(busca>-1)
            array.splice(busca,1);
    }
    document.writeln(`<br><br>Resposta Q05: ${array}`);
}

remover([5,4,3,2,5],5,3);