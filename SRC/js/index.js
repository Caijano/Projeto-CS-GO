const botaoTrailer = document.querySelector(".botao-trailer");


const modal = document.querySelector(".modal");
const video = document.getElementById("video");
const linkDoVideo = video.src;


botaoTrailer.addEventListener("click", () => {
    console.log("clicou no botão veja o trailer");
        // passo 4
        modal.classList.add("aberto");
        video.setAttribute("src", linkDoVideo);
})


    const botaoFecharModal = document.querySelector(".fechar-modal");


    botaoFecharModal.addEventListener("click", () => {

        modal.classList.remove("aberto");
        video.setAttribute("src", "");
    });








