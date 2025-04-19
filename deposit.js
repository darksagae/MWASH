
// Generate QR code for the Bitcoin address
document.addEventListener('DOMContentLoaded', function() {
    new QRCode(document.getElementById("qrcode"), {
        text: "186uGq39K6YADia5eCMcGHjEJJvFLYsDDE",
        width: 200,
        height: 200,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
});

// Copy address to clipboard
function copyAddress() {
    const address = document.getElementById("deposit-address").innerText;
    navigator.clipboard.writeText(address).then(() => {
        alert("Address copied to clipboard!");
    });
}