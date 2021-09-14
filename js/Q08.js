function juncao(matriz){
    let array = matriz.reduce((list,sub)=> list.concat(sub),[]);
    document.writeln(`<br><br>Resposta Q08: ${array}`);
}

juncao([1,2,[3],[4, 5]])