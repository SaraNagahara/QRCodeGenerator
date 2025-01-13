const text = document.getElementById("URL-Input");
const input = document.getElementById("submit-button");
const image = document.getElementById("QRcodeImage");


input.addEventListener("click", () => {
    QRCode.toDataURL(text.value).then(dataURL => {
        image.src = dataURL;
    });
});


