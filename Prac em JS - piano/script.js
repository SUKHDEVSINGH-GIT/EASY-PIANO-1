window.addEventListener('load', () => {

const sounds=document.querySelectorAll(".sound");
const pads=document.querySelectorAll(".main div");


pads.forEach((pad,index)=> {
    pad.addEventListener("mouseover",function(){
sounds[index].play();
sounds[index].currentTime =0;
pads[index].style.color="blue";
pads[index].style.fontSize="40px";
    });
});
pads.forEach((pad,index)=> {
    pad.addEventListener("mouseout",function(){

pads[index].style.color="black";
pads[index].style.fontSize="22px";
    });
});


});