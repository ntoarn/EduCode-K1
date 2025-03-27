const n = parseFloat(prompt("Nhập n:"))
function printPrimeNumber(n) {
    for(i = 2; i <= n; i++){
        let Prime = true
        // if(Math.sqrt(i) * Math.sqrt(i) == i){
        //     return
        // }
        // if(i * i >= Math.sqrt(n)){
        // return
        // }
        for(j = 2; j <= Math.sqrt(i); j++){
            
            if(i % j ===0){
                Prime = false
                break
            }
        }
        if(Prime){
            document.writeln(`${i}`)
        }
  }
}
printPrimeNumber(n)