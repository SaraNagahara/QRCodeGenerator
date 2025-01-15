window.addEventListener('load', () => {
    const qrCodeUrl = localStorage.getItem('qrCodeUrl');
    if (qrCodeUrl) {
        document.getElementById('QRcodeImage').src = qrCodeUrl;
    }
});





   // Função para baixar o código QR
   document.getElementById('download-button').addEventListener('click', () => {
    const qrCodeImage = document.getElementById('QRcodeImage');
    const link = document.createElement('a');
    link.href = qrCodeImage.src;
    link.download = 'qrcode.png';
    link.click();
});



document.getElementById('share-button').addEventListener('click', () => {
    const url = localStorage.getItem("URLCopy");
    navigator.clipboard.writeText(url) // Copia para a área de transferência
        .then(() => {
            alert('URL copiada para a área de transferência!');
        })
        .catch(err => {
            console.error('Erro ao copiar a URL:', err);
        });
});


