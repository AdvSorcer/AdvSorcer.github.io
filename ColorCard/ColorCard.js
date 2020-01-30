document.addEventListener("DOMContentLoaded", function () {
    initColor();
    barsGetColor();
});

let ColorArray = {
    Blue: "BarColorB", Red: "BarColorR", Green: "BarColorG"
}

let showTest = (inputString)=>{
    let test = document.getElementById('test')
    test.innerText = inputString
}
let initColor = ()=>{
    let DivColor = document.getElementById('DivColor');
    DivColor.style.backgroundColor = `rgb(23,53,53)`;
}
let setColor = () => {
    let element_R = document.getElementById(ColorArray["Red"]);
    let R = element_R.value;
    let element_G = document.getElementById(ColorArray["Green"]);
    let G = element_G.value;
    let element_B = document.getElementById(ColorArray["Blue"]);
    let B = element_B.value;
    let DivColor = document.getElementById('DivColor');
    DivColor.style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
}

let getBarColorValue = (inputId, outputId) => {
    let inputTarget = document.getElementById(inputId);
    let ShowTarget = document.getElementById(outputId)
    inputTarget.addEventListener("input", () => {
        let colorValue = inputTarget.value;
        ShowTarget.innerText = colorValue
        setColor();
    })
}

let barsGetColor = () => {
    getBarColorValue("BarColorR", "fontR");
    getBarColorValue("BarColorG", "fontG");
    getBarColorValue("BarColorB", "fontB");
}

