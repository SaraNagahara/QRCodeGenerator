const form = document.getElementById("qr-form");
const text = document.getElementById("URL-Input");


form.addEventListener("submit", (event) => {

     // Impede o envio do formulário e a recarga da página
     event.preventDefault();


    //Verifica se o input esta vazio, caso esteja ele mostra um alerta pra preencher os campor
    if (text.value.trim() === "") {
        alert("Fill in all the fields before submitting.");
    }

    //Verifica se o link é valido, se for ele cria o qr code caso contrario ele da um alert avisando
    if(text.value.startsWith("https://") || text.value.startsWith("000") || text.value.startsWith("http://")){
        //Cria o QR Code baseado no valor do text
        QRCode.toDataURL(text.value).then(dataURL => {
        // Salva o QR Code na localStorage para acessar na codepage
        localStorage.setItem('qrCodeUrl', dataURL);

        // Redireciona para a codepage
        window.location.href = 'codepage.html';
    })
    }else {
        alert("Please provide a valid field (e.g., starting with http://, https://, or 000).");
    }

});





