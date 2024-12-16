function convertToHTML() {
    const plainTextInput = document.getElementById('plainTextInput').value;
    const outputHTML = document.getElementById('outputHTML');

    // Pisahkan teks input per baris dan bungkus dengan <p>...</p>
    const htmlContent = plainTextInput
      .split('\n')
      .filter(line => line.trim() !== '') // Hapus baris kosong
      .map(line => `<p>${line}</p>`)
      .join('</br>');

    outputHTML.textContent = htmlContent; // Menampilkan sebagai teks yang dapat disalin
  }

  function clearFields() {
    document.getElementById('plainTextInput').value = '';
    document.getElementById('outputHTML').textContent = '';
  }

  function copyToClipboard() {
    const outputHTML = document.getElementById('outputHTML').textContent;
    navigator.clipboard.writeText(outputHTML).then(() => {
      alert('HTML content copied to clipboard!');
    }).catch(err => {
      console.error('Error copying text: ', err);
    });
  }
