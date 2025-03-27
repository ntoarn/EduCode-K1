function printMultiplicationTable(n){
    for(let i = 1; i <= n; i++ ){
        for(let j = 1; j <= n; j++){
            document.writeln(`${i} x ${j} = ${i * j} <br>`)
        }
    }
}

printMultiplicationTable(10)