const weight = parseFloat(prompt("Nhập cân nặng:"))
const height = parseFloat(prompt("Nhập chiều cao:"))

const calcBMI = (weight, height) => {
    const BMI = weight / (height * height)
    if(BMI < 18.5){
        console.log(`BMI = ${BMI}, Thiếu cân`)
    } else if(BMI < 23){
        console.log(`BMI = ${BMI}, Bình thường`)
    } else if(23 <= BMI < 25){
        console.log(`BMI = ${BMI}, Thừa cân`)
    } else if(BMI >= 25){
        console.log(`BMI = ${BMI}, Béo phì`)
    }
}
calcBMI(weight, height)