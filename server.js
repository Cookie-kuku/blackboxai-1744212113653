const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;

// Middleware
app.use(cors());
app.use(express.json());

// Mock database of phone numbers and locations
const mockLocations = {
    '+919876543210': { // Mumbai
        country: 'India',
        state: 'Maharashtra',
        city: 'Mumbai',
        latitude: 19.0760,
        longitude: 72.8777,
        carrier: 'Jio',
        circle: 'Mumbai'
    },
    '+919876543211': { // Delhi
        country: 'India',
        state: 'Delhi',
        city: 'New Delhi',
        latitude: 28.6139,
        longitude: 77.2090,
        carrier: 'Airtel',
        circle: 'Delhi NCR'
    },
    '+919876543212': { // Bangalore
        country: 'India',
        state: 'Karnataka',
        city: 'Bangalore',
        latitude: 12.9716,
        longitude: 77.5946,
        carrier: 'Vodafone Idea',
        circle: 'Karnataka'
    }
};

// API endpoint to track location
app.post('/api/track', (req, res) => {
    const { phoneNumber } = req.body;
    
    if (!phoneNumber) {
        return res.status(400).json({ error: 'Phone number is required' });
    }

    // Simulate API delay
    setTimeout(() => {
        if (mockLocations[phoneNumber]) {
            res.json({
                success: true,
                data: {
                    phoneNumber,
                    location: mockLocations[phoneNumber],
                    timestamp: new Date().toISOString()
                }
            });
        } else {
            res.status(404).json({ 
                success: false,
                error: 'Location not found for this number'
            });
        }
    }, 1000);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
