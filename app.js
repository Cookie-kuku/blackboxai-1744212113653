document.addEventListener('DOMContentLoaded', () => {
    const garden = document.getElementById('garden');
    const addFlowerBtn = document.getElementById('add-flower');
    
    // Colors for tulips and butterflies
    const tulipColors = ['bg-pink-500', 'bg-red-500', 'bg-purple-500', 'bg-yellow-400'];
    const butterflyColors = ['text-yellow-300', 'text-orange-300', 'text-white', 'text-blue-300'];
    
    // Create initial garden
    createTulips(10);
    createButterflies(5);
    
    // Add more flowers when button clicked
    addFlowerBtn.addEventListener('click', () => {
        createTulips(3);
    });
    
    function createTulips(count) {
        for (let i = 0; i < count; i++) {
            const tulip = document.createElement('div');
            const color = tulipColors[Math.floor(Math.random() * tulipColors.length)];
            const size = Math.random() * 20 + 10;
            const delay = Math.random() * 2;
            
            tulip.className = `tulip absolute bottom-0 ${color} rounded-t-full`;
            tulip.style.width = `${size}px`;
            tulip.style.height = `${size * 2}px`;
            tulip.style.left = `${Math.random() * 90 + 5}%`;
            tulip.style.animationDelay = `${delay}s`;
            
            // Add stem
            const stem = document.createElement('div');
            stem.className = 'absolute -bottom-24 left-1/2 -translate-x-1/2 w-1 h-24 bg-green-600';
            
            const flowerGroup = document.createElement('div');
            flowerGroup.className = 'relative';
            flowerGroup.appendChild(tulip);
            flowerGroup.appendChild(stem);
            
            garden.appendChild(flowerGroup);
        }
    }
    
    function createButterflies(count) {
        for (let i = 0; i < count; i++) {
            const butterfly = document.createElement('div');
            const color = butterflyColors[Math.floor(Math.random() * butterflyColors.length)];
            const size = Math.random() * 20 + 10;
            const delay = Math.random() * 3;
            const duration = Math.random() * 3 + 2;
            
            butterfly.className = `butterfly ${color} text-2xl`;
            butterfly.innerHTML = '<i class="fas fa-butterfly"></i>';
            butterfly.style.left = `${Math.random() * 90 + 5}%`;
            butterfly.style.top = `${Math.random() * 70 + 10}%`;
            butterfly.style.animationDelay = `${delay}s`;
            butterfly.style.animationDuration = `${duration}s`;
            butterfly.style.fontSize = `${size}px`;
            
            // Random movement
            setInterval(() => {
                butterfly.style.left = `${Math.random() * 90 + 5}%`;
                butterfly.style.top = `${Math.random() * 70 + 10}%`;
            }, 3000);
            
            garden.appendChild(butterfly);
        }
    }
});
