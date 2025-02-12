document.getElementById("generate_btn").addEventListener("click", () => {
  const inputText = document.getElementById("input_text").value;
  const foregroundColor = document.getElementById("foreground_color").value;
  const backgroundColor = document.getElementById("background_color").value;
  const qrSize = parseInt(document.getElementById("qr_size").value);

  const qrCodeContainer = document.querySelector(".qr-code");
  qrCodeContainer.innerHTML = ""; // Clear previous QR code

  if (inputText.trim() === "") {
    alert("Please enter text or a URL to generate a QR code.");
    return;
  }

  const qrCode = new QRCode(qrCodeContainer, {
    text: inputText,
    width: qrSize,
    height: qrSize,
    colorDark: foregroundColor,
    colorLight: backgroundColor,
    correctLevel: QRCode.CorrectLevel.H,
  });
});
