"use strict";
let yourBMI = 0;

let hiddenBMI = document.querySelector('.showBMI');
let counsel   = document.querySelector('.counsel');

const resetBMI = () => {
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
    hiddenBMI.classList.add("hidden");
    counsel.classList.add("hidden");
};

const calcBMI = () => {
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
    const yourBMI = weight / height ** 2;
    if (weight > 0 && weight < 400 && height > 0.2 && height < 2.5){
        document.getElementById("BMI").innerHTML = `Your BMI : ${yourBMI}`;
        hiddenBMI.classList.remove("hidden");
    
    if (yourBMI <=10)
        document.querySelector(".counsel").innerHTML = `Category : Mostly incompatible with survival`;
    
    if (yourBMI > 10 && yourBMI <= 12)
        document.querySelector(".counsel").innerHTML = `Category: acute danger to life`;
    
    if (yourBMI > 12 && yourBMI <= 16)
        document.querySelector(".counsel").innerHTML = `Category : Severe Underweight Degree`;
    
    if (yourBMI > 17.5 && yourBMI <= 18.5)
        document.querySelector(".counsel").innerHTML = `Category : Lightest Underweight`;
    
    if (yourBMI > 18.5 && yourBMI <= 25)
        document.querySelector(".counsel").innerHTML = `Category : Normal Weight`;

    if (yourBMI > 25 && yourBMI <= 30)
        document.querySelector(".counsel").innerHTML = `Category : Präadipositas`;

    if (yourBMI > 30){
        document.querySelector(".counsel").innerHTML = `Category : Adipositas`;
    }
    counsel.classList.remove("hidden");
    } else {
    document.getElementById(
        "BMI"
    ).innerHTML = `Your weight or height spelled wrong. Please check again.`;
    hiddenBMI.classList.remove("hidden");
}

};
