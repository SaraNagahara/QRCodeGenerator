//Carregamento do localstorage
window.addEventListener('load', () => {
    //puxar a qrCodeUrl que foi armazenada anteriormente
    const qrCodeUrl = localStorage.getItem('qrCodeUrl');
    if (qrCodeUrl) {
        //Aqui o elemento com id QRcodeImage vai receber o src de valor da variável qrCodeUrl
        document.getElementById('QRcodeImage').src = qrCodeUrl;
    }
});





   // Função para baixar o código QR Code
   document.getElementById('download-button').addEventListener('click', () => {
    const qrCodeImage = document.getElementById('QRcodeImage');
    const link = document.createElement('a');
    link.href = qrCodeImage.src;
    link.download = 'qrcode.png';
    link.click();
});


    //Função para copiar a url colocada no index
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


