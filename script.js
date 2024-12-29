document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".detail-options");
    const contentSections = document.querySelectorAll(".content-section");

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
        });
    });
});
