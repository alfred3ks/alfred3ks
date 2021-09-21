// obtenemos boton y lista
const button = document.getElementById('button');
const list= document.getElementById('list');
const ul = document.getElementById('list__hide');

// Obtenemos los elementos para el scroll al click
const about = document.getElementById('about');
// const project = document.getElementById('project');

const change = ()=>{
    button.classList.toggle('change')
    list.classList.toggle('change__menu')
}

button.addEventListener('click', change);
ul.addEventListener('click', change);

// Funcion para saber el scroll
window.onscroll = function(e){
    const scroll = document.documentElement.scrollTop;
    // console.log(scroll);
    console.log(e);
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
// const irProjects = ()=>{
//         window.scrollTo({
//             top:780,
//             behavior:'smooth'
//         })
// }
// project.addEventListener('click', irProjects);