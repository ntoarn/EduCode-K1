function printIsoscelesTriangle(n, character) {
    for (let i = 1; i <= n; i++) {
        let line = ""
        for (let k = 0; k < n - i; k++) {
            line += " "
        }
        for (let j = 0; j < 2 * i - 1; j++) {
            line += character
        }
    console.log(line)
    }
    let truck = ""
    for(let k = 0; k < n- 1; k ++){
        truck += " "
    }
    truck += character
    console.log(truck)
}
printIsoscelesTriangle(6, "*");