// obtenemos boton y lista
const button = document.getElementById('button');
const list= document.getElementById('list');
const ul = document.getElementById('list__hide');

const about = document.getElementById('about');
const projects = document.getElementById('projects');


const change = ()=>{
    button.classList.toggle('change')
    list.classList.toggle('change__menu')
}

button.addEventListener('click', change);
ul.addEventListener('click', change);

// Funcion para saber el scroll
window.onscroll = function(){
    const scroll = document.documentElement.scrollTop;
    console.log(scroll);
}

// Ir a sobre mi
const sobreMi = ()=>{
        window.scrollTo({
        top:0,
        behavior:'smooth'
    })
}

about.addEventListener('click', sobreMi);

// Ir a proyectos
const irProjects = ()=>{
        window.scrollTo({
        top:784,
        behavior:'smooth'
    })
}

projects.addEventListener('click', irProjects);