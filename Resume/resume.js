document.addEventListener("DOMContentLoaded", function () {
    init()
});
let url = "works/tldep/"
//https://freeteatime.com/Resume/works/tldep/1.png
let number = 1;
let Next = () =>{
    let ImgTledep = document.getElementById("ImgTldep")
    if(number==8){
        number =0;
    }
    number +=1;
    let src = url + number + ".png"
    ImgTledep.src = src;
}
let Pre =() =>{
    let ImgTledep = document.getElementById("ImgTldep")
    number -=1;
    if(number==0){
        number =8;
    }
    let src = url + number + ".png"
    ImgTledep.src = src;
}
let init = ()=>{
    let btnNext = document.getElementById('btn_next')
    btnNext.addEventListener('click',()=>{
        Next();
    })
    let btnPre = document.getElementById('btn_pre')
    btnPre.addEventListener('click',()=>{
        Pre();
    })
}