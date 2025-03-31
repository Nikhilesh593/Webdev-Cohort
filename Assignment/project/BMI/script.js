// const weight = document.getElementById("weight").value
// const height = document.getElementById("height-feet").value
// const calculate = document.getElementById("calculate").value

calculate.addEventListener("click", () => {
    const weight = document.getElementById("weight").value
    const height = document.getElementById("height-feet").value
    const calculate = document.getElementById("calculate").value

    const result = (weight / (height * height))
    console.log(result);

    const res = document.getElementById("result")
    res.innerText = `your bmi index is ${result.toFixed(2)}`
    clear.addEventListener('click', () => {

        document.getElementById("result").innerText = "";


    })



})