document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();

    let height = document.getElementById("height").value / 100;
    let weight = document.getElementById("weight").value;
    let bmi = weight / height ** 2;

    document.getElementById("result").innerHTML = bmi.toFixed(2);

    document.getElementById("below").classList.remove("active");
    document.getElementById("normal").classList.remove("active");
    document.getElementById("Overweight").classList.remove("active");
    document.getElementById("Obesity1").classList.remove("active");
    document.getElementById("Obesity2").classList.remove("active");
    document.getElementById("Obesity3").classList.remove("active");

    if (bmi < 18.49) {
        document.getElementById("below").classList.add("active");
    } else if ((bmi > 18.5) & (bmi < 24.99)) {
        document.getElementById("normal").classList.add("active");
    } else if ((bmi > 25) & (bmi < 29.99)) {
        document.getElementById("Overweight").classList.add("active");
    } else if ((bmi > 30) & (bmi < 34.99)) {
        document.getElementById("Obesity1").classList.add("active");
    } else if ((bmi > 35) & (bmi < 39.99)) {
        document.getElementById("Obesity2").classList.add("active");
    } else if (bmi > 40) {
        document.getElementById("Obesity3").classList.add("active");
    }
});