// VDSL hız seçenekleri için yeni veri yapısı
const speeds = [
    { type: 'fiber', speed: 25, price: 570, upload: 10, initialPrice: 813.99 },
    { type: 'fiber', speed: 50, price: 590, upload: 10, initialPrice: 843.99 },
    { type: 'fiber', speed: 100, price: 600, upload: 20, initialPrice: 863.99 },
    { type: 'fiber', speed: 200, price: 650, upload: 20, initialPrice: 913.99 },
    { type: 'fiber', speed: 500, price: 700, upload: 50, initialPrice: 963.99 },
    { type: 'fiber', speed: 1000, price: 800, upload: 50, initialPrice: 1063.99 },
    // VDSL hızları
    { type: 'vdsl', speed: 16, price: 520, upload: 2, initialPrice: 763.99 },
    { type: 'vdsl', speed: 24, price: 540, upload: 3, initialPrice: 783.99 },
    { type: 'vdsl', speed: 35, price: 560, upload: 4, initialPrice: 803.99 },
    { type: 'vdsl', speed: 50, price: 580, upload: 5, initialPrice: 823.99 }
];

document.addEventListener('DOMContentLoaded', function() {
    const speedButton = document.getElementById('speedButton');
    const speedOptions = document.getElementById('speedOptions');
    const selectedSpeedText = document.getElementById('selectedSpeed');
    const monthlyPrice = document.getElementById('monthlyPrice');
    const uploadSpeed = document.getElementById('uploadSpeed');
    const noCommitmentPrice = document.getElementById('noCommitmentPrice');
    const chevron = speedButton.querySelector('.chevron');
    
    // İnternet tipi seçimi için yeni butonlar
    const typeButtons = document.createElement('div');
    typeButtons.className = 'internet-type-buttons';
    typeButtons.innerHTML = `
        <button class="type-button active" data-type="fiber">Fiber</button>
        <button class="type-button" data-type="vdsl">VDSL</button>
    `;
    speedButton.parentNode.insertBefore(typeButtons, speedButton);

    let currentType = 'fiber';

    // Hız seçeneklerini güncelle
    function updateSpeedOptions(type) {
        speedOptions.innerHTML = '';
        speeds.filter(option => option.type === type).forEach(option => {
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
    }

    // İlk yükleme için fiber seçeneklerini göster
    updateSpeedOptions('fiber');

    // İnternet tipi değiştirme
    typeButtons.addEventListener('click', (e) => {
        if (e.target.classList.contains('type-button')) {
            currentType = e.target.dataset.type;
            document.querySelectorAll('.type-button').forEach(btn => {
                btn.classList.remove('active');
            });
            e.target.classList.add('active');
            updateSpeedOptions(currentType);
            
            // İlk hız seçeneğini varsayılan olarak seç
            const firstOption = speeds.find(option => option.type === currentType);
            if (firstOption) {
                selectedSpeedText.textContent = `${firstOption.speed} Mbps İndirme Hızı`;
                monthlyPrice.textContent = firstOption.price;
                uploadSpeed.textContent = firstOption.upload;
                noCommitmentPrice.textContent = firstOption.initialPrice;
            }
        }
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