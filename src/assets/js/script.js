document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();

    let height = Number(document.getElementById("height").value / 100);
    let weight = Number(document.getElementById("weight").value);
    let bmi = weight / height ** 2;

    console.log(bmi);
    document.getElementById("result").innerHTML = bmi.toFixed(2);

    document.getElementById("below").classList.remove("active");
    document.getElementById("normal").classList.remove("active");
    document.getElementById("Overweight").classList.remove("active");
    document.getElementById("Obesity1").classList.remove("active");
    document.getElementById("Obesity2").classList.remove("active");
    document.getElementById("Obesity3").classList.remove("active");

    if (bmi <= 18.499999999999999999999999) {
        document.getElementById("below").classList.add("active");
    } else if (bmi >= 18.5 && bmi <= 24.9999999999999999999999) {
        document.getElementById("normal").classList.add("active");
    } else if (bmi >= 25 && bmi <= 29.9999999999999999999999) {
        document.getElementById("Overweight").classList.add("active");
    } else if (bmi >= 30 && bmi <= 34.9999999999999999999999) {
        document.getElementById("Obesity1").classList.add("active");
    } else if (bmi >= 35 && bmi <= 39.999999999999999999999999) {
        document.getElementById("Obesity2").classList.add("active");
    } else if (bmi >= 40) {
        document.getElementById("Obesity3").classList.add("active");
    }
});