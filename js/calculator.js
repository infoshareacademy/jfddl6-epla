var slider = document.querySelector(".calculator__slider-number");
var output = document.querySelector(".calculator__slider-output")
const result = document.querySelector('.calculator__result-number')
const free = document.querySelector('.account-type-regular');
const business = document.querySelector('.account-type-business')
output.innerText = slider.value
result.innerText = 0 + '$'

const calculatePrice = () => {
    if (output.innerText < 5) {
        result.innerText = ((parseInt(output.innerText, 10) * 6) + '$')
    } else if (slider.value >= 5 && slider.value < 10) {
        result.innerText = ((parseInt(output.innerText, 10) * 5) + '$')
    } else if (slider.value >= 10 && slider.value < 25){
        result.innerText = ((parseInt(output.innerText, 10) * 4) + '$')
    } else if (slider.value >= 25){
        result.innerText = ((parseInt(output.innerText, 10) * 3.5) + '$')
    }

}

slider.addEventListener('input', () => {
    output.innerText = slider.value
    if (business.checked) {
        calculatePrice()
    }
})

business.addEventListener('change', () => calculatePrice() )

free.addEventListener('change', () => {
    if (free.checked) {
        result.innerText = 0 + '$';
    }
})