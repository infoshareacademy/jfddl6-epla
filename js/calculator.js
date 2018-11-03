var slider = document.querySelector(".calculator__number");
var output = document.querySelector(".output")
const result = document.querySelector('.calculator__result')
const free = document.querySelector('.account-type-regular');
const business = document.querySelector('.account-type-business')
output.innerText = slider.value

const calculatePrice = () => result.innerText = ((parseInt(output.innerText, 10) * 5) + '$')

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