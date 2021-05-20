document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();

    let height = Number(document.getElementById("height").value / 100);
    let weight = Number(document.getElementById("weight").value);
    let formula = weight / height ** 2;

    function bmi() {
        return Number(formula.toFixed(2));
    }

    console.log(bmi());
    document.getElementById("result").innerHTML = bmi();

    document.querySelectorAll(".result .active").forEach((element) => {
        element.classList.remove("active");
    });

    if (bmi() <= 18.49) {
        document.getElementById("below").classList.add("active");
    } else if (bmi() >= 18.5 && bmi() <= 24.99) {
        document.getElementById("normal").classList.add("active");
    } else if (bmi() >= 25 && bmi() <= 29.99) {
        document.getElementById("Overweight").classList.add("active");
    } else if (bmi() >= 30 && bmi() <= 34.99) {
        document.getElementById("Obesity1").classList.add("active");
    } else if (bmi() >= 35 && bmi() <= 39.99) {
        document.getElementById("Obesity2").classList.add("active");
    } else if (bmi() >= 40) {
        document.getElementById("Obesity3").classList.add("active");
    }
});