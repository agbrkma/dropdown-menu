const menu = document.getElementById('menu')

menu.style.display = 'none';

let showState = false;

const menuBtn = document.getElementById('dropdown-btn')

menuBtn.addEventListener('click', () =>{
    showState = !showState
    if(showState){
        menu.style.display = 'block'
    }
    if(!showState){
        menu.style.display = 'none'
    }
})