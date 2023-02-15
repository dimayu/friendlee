const itemsSlide = document.querySelectorAll(".calculator-input");

itemsSlide.forEach((item) => {
    let slider = item.querySelector(".calculator-input__value--range");
    let input = item.querySelector(".calculator-input__value--number");
    
    function sliderInput() {
        slider.value = input.value;
    }
    
    input.addEventListener("change", sliderInput);
    
    function inputSlider() {
        input.value = slider.value;
    }
    
    slider.addEventListener("change", inputSlider);
});