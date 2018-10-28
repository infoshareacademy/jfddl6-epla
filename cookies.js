if(localStorage.getItem('person', 'visited')){
    document.getElementById('cookies').classList.add('cookies--hidden');
}

function buttonClick(){
    localStorage.setItem('person', 'visited');
    document.getElementById('cookies').classList.add('cookies--hidden');
 }


document.getElementById('cookies__button').addEventListener('click', buttonClick);
