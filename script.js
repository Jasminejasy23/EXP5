
// 1. WORD ANALYZER

function analyzeWords() {
    var sentence = document.getElementById("sentence").value.trim();

    if (sentence === "") {
        document.getElementById("wordResult").innerHTML = "Please enter a sentence.";
        return;
    }

    var words = sentence.split(/\s+/);
    var shortest = words[0];
    var longest = words[0];

    for (var i = 0; i < words.length; i++) {
        if (words[i].length < shortest.length) {
            shortest = words[i];
        }

        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }

    document.getElementById("wordResult").innerHTML =
        "Shortest Word: " + shortest +
        "<br>Longest Word: " + longest;
}

document.getElementById("analyze").addEventListener("click", analyzeWords);


// 2. BMI CALCULATOR

function calculate() {
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);

    if (weight <= 0 || height <= 0 || isNaN(weight) || isNaN(height)) {
        document.getElementById("score").innerHTML = "Enter valid values";
        document.getElementById("type").innerHTML = "";
        return;
    }

    var bmi = weight / (height * height);
    var bodyType;

    if (bmi < 18) {
        bodyType = "Underweight";
    } else if (bmi < 25) {
        bodyType = "Normal";
    } else if (bmi < 30) {
        bodyType = "Overweight";
    } else {
        bodyType = "Obese";
    }

    document.getElementById("score").innerHTML = bmi.toFixed(2);
    document.getElementById("type").innerHTML = bodyType;
}

document.getElementById("bmiButton").addEventListener("click", calculate);


// 3. FRUIT FARM

function grow() {
    var rows = parseInt(document.getElementById("rows").value);
    var columns = parseInt(document.getElementById("columns").value);

    var garden = document.getElementById("garden");
    garden.innerHTML = "";

    if (rows <= 0 || columns <= 0 || isNaN(rows) || isNaN(columns) || rows * columns > 100) {
        garden.innerHTML = "Enter valid dimensions (maximum 100 fruits).";
        return;
    }

    garden.style.gridTemplateColumns = "repeat(" + columns + ", 60px)";

    var fruits = ["🍎", "🍊"];

    for (var i = 0; i < rows * columns; i++) {
        var number = Math.floor(Math.random() * 2);
        garden.innerHTML += '<div class="fruit">' + fruits[number] + '</div>';
    }
}

document.getElementById("plant").addEventListener("click", grow);


// 4. CURRENCY CONVERTER

function convert() {
    var amount = parseFloat(document.getElementById("data").value);
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;
    var result;

    if (isNaN(amount) || amount < 0) {
        document.getElementById("answer").innerHTML = "Enter a valid amount.";
        return;
    }

    if (from === to) {
        result = amount;
    } else if (from === "INR" && to === "USD") {
        result = amount * 0.015;
    } else {
        result = amount * 67.12;
    }

    document.getElementById("answer").innerHTML =
        result.toFixed(2) + " " + to;
}

document.getElementById("convertButton").addEventListener("click", convert);


// 5. COIN FLIP

var heads = 0;
var tails = 0;

function flipFunction() {
    var number = Math.floor(Math.random() * 2);

    if (number === 0) {
        heads++;
        document.getElementById("coinDisplay").innerHTML = "👑 HEADS";
    } else {
        tails++;
        document.getElementById("coinDisplay").innerHTML = "🪙 TAILS";
    }

    document.getElementById("num_heads").innerHTML = heads;
    document.getElementById("num_tails").innerHTML = tails;
}

document.getElementById("flip").addEventListener("click", flipFunction);


// 6. BIRTHDAY CAKE ORDER

function calculateOrder() {
    var small = parseInt(document.getElementById("small").value) || 0;
    var medium = parseInt(document.getElementById("medium").value) || 0;
    var large = parseInt(document.getElementById("large").value) || 0;

    if (small < 0 || medium < 0 || large < 0) {
        document.getElementById("price").innerHTML = "Enter valid quantities.";
        return;
    }

    var cost = (small * 100) + (medium * 200) + (large * 400);
    var tax = cost * 0.09;

    var tip = parseFloat(document.querySelector('input[name="tip"]:checked').value);

    var totalAfterTax = cost + tax;
    var tipAmount = totalAfterTax * tip / 100;
    var total = totalAfterTax + tipAmount;

    document.getElementById("price").innerHTML = total.toFixed(2);
}

document.getElementById("submit").addEventListener("click", calculateOrder);
