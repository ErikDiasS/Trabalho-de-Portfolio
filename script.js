function escrevendoLetra() {

}

function escrevendoLetra() {
    const titulo = document.querySelector('.digitando');
    const texto = titulo.innerHTML;

    function ativarLetra() {
        titulo.innerHTML = '';

        texto.split('').forEach((letra, i) => {
            setTimeout(() => {
                titulo.innerHTML += letra;
            }, 75 * i);
        });

        // Espera terminar de escrever + 1,5 segundo
        setTimeout(() => {
            titulo.innerHTML = '';

            // Espera 500ms e começa novamente
            setTimeout(() => {
                ativarLetra();
            }, 500);

        }, 75 * texto.length + 1500);
    }

    ativarLetra();
}

escrevendoLetra();


function menuMobol() {
     const ativaMenu = document.querySelector('.fa-bars');
     const navMenu = document.querySelector('header .navegacao-primaria')
    
    
     ativaMenu.addEventListener('click', ()=>{
        ativaMenu.classList.toggle('fa-x');
        navMenu.classList.toggle('ativado');
    });
}
menuMobol ();

function sobreMim(){
    const divExperiencia = document.querrySelectorAll('experience_content div');
    const liExperiencia = document.querrySelectorAll('experience_content ul li');
    const divEducation = document.querrySelectorAll('education_content div');
    const liEducation = document.querrySelectorAll('education_content ul li');
    divExperiencia[0].classlist.add('ativo')
    function slideShow(index){
        divExperiencia.forEach((div)=>{
            div.classList.remove('ativo');
        });
        liExperiencia.forEach((botao)=>{
            botao.classList.remove('ativo');
        })
        divExperiencia[index].classList.add('ativo');
        liExperiencia[index].classList.add('ativo');
    }

    function slideShow2(index){
        divEducation.forEach((div)=>{
            div.classList.remove('ativo');
        });
        liEducation.forEach((botao)=>{
            botao.classList.remove('ativo');
        })
        divEducation[index].classList.add('ativo');
        liEducation[index].classList.add('ativo');
    }

    liExperiencia.forEach((event,index)=>{
        event.addEventListener('click', ()=>{
            slideShow(index)
        });
    });


    liEducation.forEach((event,index)=>{
        event.addEventListener('click', ()=>{
            slideShow2(index)
        });
    });

}

sobreMim();

const listaALL= document.querySelectorAll('.project_armazenamento ul li');
const buttonGeral= document.querySelectorAll('.project_models ul li');
const buttonAll= document.querySelectorAll('.project_model .all');


function removiClick(index){
    buttonGeral.forEach((item)=>{
        item.classList.removi('ativo')
    });
    buttonGeral[index].classList.add('ativo');
}

buttonGeral.forEach ((item,index)=>{
    item.addEventListener('click',()=>{
        removiClick(index);
    })
})



function showLista(lista, categoria = "all") {
    lista.forEach((item) => {
        item.classList.remove("ativo");

        if (categoria === "all" || item.classList.contains(categoria)) {
            item.classList.add("ativo");
        }
    });
}


buttonGeral.forEach((item) => {
    item.addEventListener("click", (e) => {
        let currentButton = e.target;

        if (currentButton.classList.contains("all")) {
            showLista(listaALL, "all");
        }

        if (currentButton.classList.contains("python")) {
            showLista(listaALL, "python");
        }

        if (currentButton.classList.contains("web")) {
            showLista(listaALL, "web");
        }

        if (currentButton.classList.contains("estudos")) {
            showLista(listaALL, "estudos");
        }
    });
});