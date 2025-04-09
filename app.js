document.getElementById('track-btn').addEventListener('click', async () => {
    const phoneNumber = document.getElementById('phone').value.trim();
    const resultDiv = document.getElementById('result');
    const locationInfo = document.getElementById('location-info');
    
    if (!phoneNumber) {
        alert('Please enter a phone number');
        return;
    }

    // Show loading state
    const trackBtn = document.getElementById('track-btn');
    trackBtn.disabled = true;
    trackBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Tracking...';
    
    try {
        const response = await fetch('http://localhost:8000/api/track', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ phoneNumber })
        });

        const data = await response.json();
        
        if (data.success) {
            const loc = data.data.location;
            locationInfo.innerHTML = `
                <p><strong>Phone Number:</strong> ${data.data.phoneNumber}</p>
                <p><strong>Country:</strong> ${loc.country}</p>
                <p><strong>State:</strong> ${loc.state}</p>
                <p><strong>City:</strong> ${loc.city}</p>
                <p><strong>Telecom Circle:</strong> ${loc.circle}</p>
                <p><strong>Carrier:</strong> ${loc.carrier}</p>
                <p><strong>Coordinates:</strong> ${loc.latitude}, ${loc.longitude}</p>
                <p class="mt-4 text-sm text-gray-500">Last updated: ${new Date(data.data.timestamp).toLocaleString()}</p>
            `;
            resultDiv.classList.remove('hidden');
        } else {
            throw new Error('Failed to track location');
        }
    } catch (error) {
        locationInfo.innerHTML = `
            <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                <strong>Error:</strong> ${error.message}
            </div>
        `;
        resultDiv.classList.remove('hidden');
    } finally {
        trackBtn.disabled = false;
        trackBtn.innerHTML = '<i class="fas fa-map-marker-alt mr-2"></i> Track Location';
    }
});

// Note: In a production app, you would need:
// 1. A backend service to handle the actual tracking
// 2. Proper authentication and authorization
// 3. Compliance with privacy laws and regulations
// 4. Integration with a phone number location API service
