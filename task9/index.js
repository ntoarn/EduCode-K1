const a = parseFloat(prompt("Nhập a:"))
const b = parseFloat(prompt("Nhập b:"))

function swapNumber(a, b) {
    let n = a
    a = b
    b=n
    return [a,b]
}
console.log(swapNumber(a, b))