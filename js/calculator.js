var slider = document.querySelector(".calculator__number");
var output = document.querySelector(".output")
output.innerHTML = slider.value

slider.oninput = function() {
    output.innerHTML = this.value
}

const result = document.querySelector('.calculator__result')
const persons = document.querySelector('.section-price__value');
const range = document.querySelector('.section-price__range')
const free = document.querySelector('.regular-user');
const business = document.querySelector('.business-user')

const calculatePrice = () => {
    result.textContent = ((parseInt(persons.textContent, 10) * 5) + '$')
}


range.addEventListener('change', () => {
    persons.textContent = range.value;
    if (business.checked) {
        calculatePrice();
    }
});

business.addEventListener('change', () => {
    calculatePrice();
})


free.addEventListener('change', () => {
    if (free.checked) {
        result.textContent = range.value * 0 + '$';
    }
})