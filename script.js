document.getElementById('downloadBtn').addEventListener('click', function() {
    const url = document.getElementById('videoUrl').value;
    // Here you would typically send the URL to your backend for processing
    // For now, we'll just display a message
    document.getElementById('result').innerText = `Download link for ${url} will be generated here.`;
});
