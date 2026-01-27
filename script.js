// Função para copiar chave Pix
function copyPix() {
    const pixValue = "65998446011";
    navigator.clipboard.writeText(pixValue).then(() => {
        const copyText = document.getElementById('copyText');
        if (copyText) {
            copyText.innerText = "✅ Copiado!";
            copyText.style.color = "#1a8b64";
            setTimeout(() => {
                copyText.innerText = "Toque para copiar (Celular)";
                copyText.style.color = "#777";
            }, 2000);
        }
    });
}

// Contagem regressiva
const targetDate = new Date('2026-02-13T18:00:00');

function updateTimers() {
    const now = new Date();
    const diff = targetDate - now;
    
    const customCountdown = document.getElementById('customCountdown');
    const countdownSoma = document.getElementById('countdownSoma');
    
    if (diff <= 0) {
        if (customCountdown) customCountdown.innerHTML = "O RETIRO COMEÇOU!";
        if (countdownSoma) countdownSoma.innerHTML = "O RETIRO COMEÇOU!";
        return;
    }
    
    const daysTotal = Math.floor(diff / (1000 * 60 * 60 * 24));
    const months = (diff / (1000 * 60 * 60 * 24 * 30)).toFixed(1);
    const weeksTotal = (diff / (1000 * 60 * 60 * 24 * 7)).toFixed(1);
    
    if (customCountdown) {
        customCountdown.innerHTML = `${months} Meses = ${weeksTotal} Semanas = ${daysTotal} Dias`;
    }

    const weeks = Math.floor(daysTotal / 7);
    const days = daysTotal % 7;
    const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
    const minutes = Math.floor(diff / (1000 * 60)) % 60;
    const seconds = Math.floor(diff / 1000) % 60;
    
    if (countdownSoma) {
        countdownSoma.innerHTML = `${weeks} Semanas + ${days} Dias + ${hours} Horas + ${minutes} Minutos + ${seconds} Segundos`;
    }
}

// Iniciar contagem regressiva se os elementos existirem
if (document.getElementById('customCountdown') || document.getElementById('countdownSoma')) {
    setInterval(updateTimers, 1000);
    updateTimers();
}

// Carrossel de fotos
const track = document.getElementById('carouselTrack');
if (track) {
    const slides = document.querySelectorAll('.carousel-slide');
    let index = 0;
    
    function nextSlide() {
        index++;
        if (index >= slides.length) { 
            index = 0; 
        }
        track.style.transform = `translateX(-${index * 100}%)`;
    }
    
    setInterval(nextSlide, 3000);
}

// Menu hambúrguer para páginas dos dias
function toggleMenu() {
    const menuOverlay = document.getElementById('menuOverlay');
    if (menuOverlay) {
        menuOverlay.classList.toggle('active');
    }
}

// Fechar menu ao clicar fora
const menuOverlay = document.getElementById('menuOverlay');
if (menuOverlay) {
    menuOverlay.addEventListener('click', function(e) {
        if (e.target === menuOverlay) {
            toggleMenu();
        }
    });
}
