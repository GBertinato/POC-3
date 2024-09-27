// Função para verificar o dispositivo com base na largura da janela
function checkDevice() {
    const width = window.innerWidth;
    const notification = document.getElementById('notification');
    let message = '';

    // Verifica as larguras para definir o tipo de dispositivo
    if (width <= 480) {
        message = 'Você está usando um Celular!';
    } else if (width <= 768) {
        message = 'Você está usando um Tablet!';
    } else {
        message = 'Você está usando um Notebook/Computador!';
    }

    // Exibe a notificação
    notification.textContent = message;
    notification.classList.add('show');

    // Remove a notificação após 3 segundos
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Escuta o evento de redimensionamento da janela
window.addEventListener('resize', checkDevice);

// Chama a função assim que a página carrega para verificar o tamanho inicial
window.onload = checkDevice;
