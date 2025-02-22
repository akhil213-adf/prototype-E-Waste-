document.getElementById('upload-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const fileInput = document.getElementById('device-photo');
    const file = fileInput.files[0];

    if (file) {
        alert('Thank you for uploading a photo of your device! Together, we can work towards a more sustainable future.');
        // Here you can integrate additional functionality like sending the photo to a server for storage or processing
    } else {
        alert('Please select a valid image file.');
    }
});
