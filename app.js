let cross=document.querySelector(".cross");
cross.style.display="none";
let ham=document.querySelector(".ham"); 
let hamburger=document.querySelector(".hamburger");
hamburger.addEventListener("click",()=>{
    document.querySelector(".side_bar").classList.toggle("side_barGo");
    if(document.querySelector(".side_bar").classList.contains("side_barGo")){
        cross.style.display="none";
        ham.style.display="inline";
    }else{
        ham.style.display="none";
        setTimeout(()=>{
            cross.style.display="inline";
        },300);
    }
})