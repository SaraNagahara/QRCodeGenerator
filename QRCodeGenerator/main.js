
const form = document.getElementById("qr-form");
const text = document.getElementById("URL-Input");


form.addEventListener("submit", (event) => {
    event.preventDefault(); // Impede o envio do formulário e a recarga da página
    QRCode.toDataURL(text.value).then(dataURL => {

        localStorage.setItem("URLCopy", text.value);

        // Salva o QR Code na localStorage para acessar na codepage
        localStorage.setItem('qrCodeUrl', dataURL);

        // Redireciona para a codepage
        window.location.href = 'codepage.html';
    });
});





