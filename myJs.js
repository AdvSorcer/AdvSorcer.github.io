
let radio_Online = document.getElementsByName('radio_online');
let progress = 0;
let message = document.getElementById("lbl_message")

let sender = () => {
    let divQ1 = document.getElementById("div_Q1")
    let divQ2 = document.getElementById("div_Q2")
    let message = document.getElementById("lbl_message")

    if (divQ1.style.display != "none") {
        let radio_Online_Value = document.querySelector('input[name="radio_online"]:checked').value;
        if (radio_Online_Value == "yes") {
            message.innerText = "是一個認真的師父呢"
            progressBarAdd()
            divQ1.style.display = "none"
            divQ2.style.display = "block"
        } else if (radio_Online_Value == "no") {
            message.innerText = "感謝淺笑的努力"
            progressBarAdd()
            divQ1.style.display = "none"
            divQ2.style.display = "block"
        }
    } else {
        let radio_medicine_Value = document.querySelector('input[name="radio_medicine"]:checked').value;
        if (radio_medicine_Value == "yes") {
            message.innerText = "師父有乖"
            progressBarAdd()
        } else if (radio_medicine_Value == "no") {
            message.innerText = "快去吃 !!!"
            progressBarAdd()
        }
    }





}

let progressBarAdd = () => {
    if (progress < 100) {
        let progressBar = document.getElementById("progressBar")
        progress = progress + 50;
        progressBar.style.width = progress + "%"
    }
    if(progress==100){
        let div_img = document.getElementById("div_Img")
        div_img.style.visibility = "visible"
    }

}
