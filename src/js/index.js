const botao = document.querySelector(".btn-plataforma");
const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

botao.addEventListener("click", () => { 
    if(elementoPlataformas.classList.contains("ativo")) {
        elementoPlataformas.classList.remove("ativo");
    } else {
        elementoPlataformas.classList.add("ativo");
    }
} );
