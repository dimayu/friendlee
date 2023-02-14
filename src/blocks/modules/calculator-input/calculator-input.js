// slider();
//
//
// function slider(){
//     const range = document.getElementsByClassName('price-slider-range');
//     const max = Math.max(range[0].value, range[1].value);
//     document.getElementById('price-slider-paragraph').innerHTML = `${max}`;
//
//     const progress = document.getElementById('price-progress');
//     progress.style.setProperty('--max', max);
// }
//
// const range = document.querySelectorAll('input[type=range]')
//
// range.forEach((r)=>{
//     r.addEventListener('mousemove', ()=>{
//         slider();
//     });
// });


let sliderLeft=document.getElementById("slider0to50");
let inputMin=document.getElementById("min");

function sliderLeftInput(){
    sliderLeft.value=inputMin.value;
}

inputMin.addEventListener("change",sliderLeftInput);

function inputMinSliderLeft(){
    inputMin.value=sliderLeft.value;
}
sliderLeft.addEventListener("change",inputMinSliderLeft);
