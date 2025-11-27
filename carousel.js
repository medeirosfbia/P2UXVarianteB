const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);

let currentIndex = 0;
const intervalTime = 3000; // 3 segundos

// Ajusta o tamanho corretamente ao carregar as imagens
window.addEventListener("load", () => {
    slides.forEach(slide => {
        slide.style.width = track.clientWidth + "px";
    });
});

// Função principal do carrossel
function moveCarousel() {
    currentIndex++;

    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }

    const offset = -currentIndex * track.clientWidth;
    track.style.transform = `translateX(${offset}px)`;
}

setInterval(moveCarousel, intervalTime);
