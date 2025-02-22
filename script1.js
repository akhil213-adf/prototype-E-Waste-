document.getElementById('upload-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const fileInput = document.getElementById('device-photo');
    const file = fileInput.files[0];

    if (file) {
        alert('Thank you for uploading a photo of your device! Let’s calculate its recycling value.');
        // Here you can add additional logic to identify the device or process the image for more specific data (e.g., AI-powered image recognition)
        
        // For simplicity, we can simulate a price calculation
        simulatePriceEstimate();
    } else {
        alert('Please select a valid image file.');
    }
});

function simulatePriceEstimate() {
    const price = Math.floor(Math.random() * 200) + 10; // Simulated price range between $10 and $200
    document.getElementById('price-output').innerText = `Estimated Recycling Value: $${price}`;
}

function calculateImpact() {
    const deviceType = document.getElementById('device-type').value;
    let impact;

    switch (deviceType) {
        case "smartphone":
            impact = "Smartphones require around 15 to 30 different metals for manufacturing, with significant environmental impact during extraction.";
            break;
        case "laptop":
            impact = "Laptops require metals like aluminum, lithium, and copper, contributing to CO2 emissions during production.";
            break;
        case "tablet":
            impact = "Tablets use precious metals like gold and silver. Recycling them can prevent resource depletion.";
            break;
        case "desktop":
            impact = "Desktops often contain hazardous chemicals like mercury. Recycling can save energy and reduce e-waste.";
            break;
        default:
            impact = "Please select a device.";
    }

    document.getElementById('ewaste-output').innerText = impact;
}
