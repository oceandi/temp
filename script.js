document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".detail-options");
    const contentSections = document.querySelectorAll(".content-section");

    // Açılışta 12. seçeneği aktif yap
    const defaultOption = "12"; // Varsayılan aktif seçenek
    const activeSection = document.querySelector(`.content-section[data-content="${defaultOption}"]`);
    if (activeSection) {
        contentSections.forEach(section => section.classList.add("hidden")); // Tümünü gizle
        activeSection.classList.remove("hidden"); // Sadece 12'yi göster
    }

    // Açılışta ilgili butonu aktif yap
    const defaultButton = document.querySelector(`.detail-options[data-option="${defaultOption}"]`);
    if (defaultButton) {
        defaultButton.classList.add("active");
    }

    // Butonlara tıklama olaylarını ekle
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const selectedOption = button.getAttribute("data-option");

            // Tüm içerik bölümlerini gizle
            contentSections.forEach(section => {
                section.classList.add("hidden");
            });

            // Seçilen içeriği göster
            const activeSection = document.querySelector(`.content-section[data-content="${selectedOption}"]`);
            if (activeSection) {
                activeSection.classList.remove("hidden");
            }

            // Tüm butonlardan 'active' sınıfını kaldır ve tıklanan butona ekle
            buttons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
        });
    });
});
