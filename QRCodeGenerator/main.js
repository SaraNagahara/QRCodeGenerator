const form = document.getElementById("qr-form");
const text = document.getElementById("URL-Input");


form.addEventListener("submit", (event) => {
    // Impede o envio do formulário e a recarga da página
    event.preventDefault();
    //Cria o QR Code baseado no valor do text
    QRCode.toDataURL(text.value).then(dataURL => {
        // aqui vai salvar a url colocada na index.html no localstorage pro funcionamento do botão share
        localStorage.setItem("URLCopy", text.value);

        // Salva o QR Code na localStorage para acessar na codepage
        localStorage.setItem('qrCodeUrl', dataURL);

        // Redireciona para a codepage
        window.location.href = 'codepage.html';
    });
});





