# QR Code Generator

Generate custom QR codes instantly for any text or link!

## Overview

The **Qr-Code-Generator** is a web application that allows users to quickly create QR codes for any input using an intuitive interface. Enter text, URLs, or any string, and the app generates a downloadable QR code image.

## Live Demo

Try it out: [QR Code Generator](https://qr-code-generator-theta-two.vercel.app)

## Features

- **Instant QR Generation:** Enter any text or URL to generate a QR code.
- **Download QR Codes:** Save your generated QR code as an image with one click.
- **Responsive Design:** Mobile-friendly, modern UI.
- **Animated Effects:** Interactive button and animated footer for an engaging experience.

## Usage

1. Enter your text or URL in the input field.
2. Click the **Generate** button.
3. A QR code will appear below the button.
4. Click **Download** to save your QR code as a PNG image.

## Technologies Used

- **HTML, CSS, JavaScript:** Core technologies for UI and logic.
- **QRCode.js:** Popular JS library for QR code generation.
- **Font Awesome & Google Fonts:** For rich icons and typography.

## Example

```javascript
// Generates a QR code with high error correction
var qrcode = new QRCode(qr_code_element, {
  text: "https://your-link.com",
  width: 180,
  height: 180,
  colorDark: "#000000",
  colorLight: "#ffffff",
  correctLevel: QRCode.CorrectLevel.H
});
```

## Credits

Made by Asaad Siddiqui  
[PixelDev](https://www.youtube.com/@CubicDeveloper)

---

Feel free to contribute or raise issues for improvements!
