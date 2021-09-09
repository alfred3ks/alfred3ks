// obtenemos boton y lista
const button = document.getElementById('button');
const list= document.getElementById('list');
const ul = document.getElementById('list__hide');
const button_up = document.getElementById('button__up');

const change = ()=>{
    button.classList.toggle('change')
    list.classList.toggle('change__menu')
}

button.addEventListener('click', change);
ul.addEventListener('click', change);

// Botton volver arriba
// Agrego los estilos al boton de volver
const add = ()=>{
    button_up.classList.add('show');
}

// Le quito los estilos
const remove = ()=>{
    button_up.classList.remove('show');
}

// Creo la funcion para que se haga scroll al inicio
const volverUp = ()=>{
    console.log('click');
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
}

// Hacemos aparecer el boton al scroll de 100
window.onscroll = function(){
    const scroll = document.documentElement.scrollTop;
    console.log(scroll);
    if(scroll > 100){
        add();
    } else {
    remove();
        }
}

button_up.addEventListener('click', volverUp);