document.addEventListener('DOMContentLoaded', () => {
    const scanner = document.querySelector('.scanner');
    const scannerContainer = document.querySelector('.scanner-container');
    const touchEffect = document.querySelector('.touch-effect');

    const startScan = (event) => {
        // Agregar clase para desenfoque
        document.body.classList.add('scanner-active');

        // Obtener las coordenadas del toque
        const rect = scannerContainer.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        // Posicionar y animar el efecto de toque
        touchEffect.style.left = `${x}px`;
        touchEffect.style.top = `${y}px`;
        touchEffect.style.width = '100px';
        touchEffect.style.height = '100px';
        touchEffect.style.animation = 'ripple 0.6s linear';

        // Reiniciar la animación para el siguiente toque
        touchEffect.addEventListener('animationend', () => {
            touchEffect.style.animation = '';
        });

        // Simular finalización del escaneo
        setTimeout(() => {
            document.body.classList.remove('scanner-active');
        }, 5000);
    };

    document.body.addEventListener('touchstart', startScan);
    document.body.addEventListener('click', startScan);

    // Crear partículas
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 3}s`;
        scannerContainer.appendChild(particle);
    }
});
