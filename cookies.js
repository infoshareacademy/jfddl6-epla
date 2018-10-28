if(localStorage.getItem('person', 'visited')){
    document.getElementById('cookies').style.display = 'none';
}

function buttonClick(){
    localStorage.setItem('person', 'visited');
    document.getElementById('cookies').style.display = 'none';
    document.getElementById('cookies__button').style.display = 'none';
 }


document.getElementById('cookies__button').addEventListener('click', buttonClick);