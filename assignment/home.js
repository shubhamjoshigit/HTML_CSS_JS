const cookieContainer=document.querySelector(".cookie-container");
const cookieBtn=document.querySelector(".cookie-btn");
cookieBtn.addEventListener("click",()=>{
    cookieContainer.classList.remove("active");
    localStorage.setItem("cookieBanner","true");
});

setTimeout(()=>{
    if(!localStorage.getItem("cookieBanner")){
    cookieContainer.classList.add("active");
    }
},0);

let imgs=$("img");
for(let a=0;a<imgs.length;a++){
    loadImg(imgs[a]);
}
function loadImg(elem){
    let url = $(elem).attr("ref-src");
    let newUrl=new Image();
    newUrl.onload=function(){
        console.log("Done");
        $(elem).attr("src",url);
    }
    newUrl.src=url;
}