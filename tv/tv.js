const speeds = [
    { speed: 25, price: 570, upload: 10, initialPrice: 813.99 },
    { speed: 50, price: 590, upload: 10, initialPrice: 843.99 },
    { speed: 100, price: 600, upload: 20, initialPrice: 863.99 },
    { speed: 200, price: 650, upload: 20, initialPrice: 913.99 },
    { speed: 500, price: 700, upload: 50, initialPrice: 963.99 },
    { speed: 1000, price: 800, upload: 50, initialPrice: 1063.99 }
];

document.addEventListener('DOMContentLoaded', function() {
    const speedButton = document.getElementById('speedButton');
    const speedOptions = document.getElementById('speedOptions');
    const selectedSpeedText = document.getElementById('selectedSpeed');
    const monthlyPrice = document.getElementById('monthlyPrice');
    const uploadSpeed = document.getElementById('uploadSpeed');
    const noCommitmentPrice = document.getElementById('noCommitmentPrice');
    const chevron = speedButton.querySelector('.chevron');

    // Hız seçeneklerini oluştur
    speeds.forEach(option => {
        const item = document.createElement('div');
        item.className = 'dropdown-item';
        item.textContent = `${option.speed} Mbps İndirme Hızı`;
        item.addEventListener('click', () => {
            selectedSpeedText.textContent = `${option.speed} Mbps İndirme Hızı`;
            monthlyPrice.textContent = option.price;
            uploadSpeed.textContent = option.upload;
            noCommitmentPrice.textContent = option.initialPrice;
            speedOptions.classList.add('hidden');
            chevron.classList.remove('active');
        });
        speedOptions.appendChild(item);
    });

    // Dropdown toggle
    speedButton.addEventListener('click', () => {
        speedOptions.classList.toggle('hidden');
        chevron.classList.toggle('active');
    });

    // Dropdown dışına tıklandığında kapat
    document.addEventListener('click', (e) => {
        if (!speedButton.contains(e.target)) {
            speedOptions.classList.add('hidden');
            chevron.classList.remove('active');
        }
    });
});