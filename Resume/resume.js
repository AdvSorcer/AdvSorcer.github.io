document.addEventListener("DOMContentLoaded", function () {
    init()
});
let url_Tldep = "works/tldep/";
let numberTldep = 1;
let Next = () =>{
    let ImgTledep = document.getElementById("ImgTldep")
    if(numberTldep==8){
        numberTldep =0;
    }
    numberTldep +=1;
    let src = url_Tldep + numberTldep + ".png"
    ImgTledep.src = src;
}
let Pre =() =>{
    let ImgTledep = document.getElementById("ImgTldep")
    numberTldep -=1;
    if(numberTldep==0){
        numberTldep =8;
    }
    let src = url_Tldep + numberTldep + ".png"
    ImgTledep.src = src;
}
let init = ()=>{
    //let PlayTldep = setInterval(Next,4000)
    let btnNext = document.getElementById('btn_next')
    btnNext.addEventListener('click',()=>{
        Next();
        //clearInterval(PlayTldep)
    })
    let btnPre = document.getElementById('btn_pre')
    btnPre.addEventListener('click',()=>{
        Pre();
        //clearInterval(PlayTldep)
    })
}

