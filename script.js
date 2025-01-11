// Tab switching için event listener
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".detail-options");
    const contentSections = document.querySelectorAll(".content-section");

    // Açılışta 12. seçeneği aktif yap
    const defaultOption = "12";
    const activeSection = document.querySelector(`.content-section[data-content="${defaultOption}"]`);
    if (activeSection) {
        contentSections.forEach(section => section.classList.add("hidden"));
        activeSection.classList.remove("hidden");
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

            contentSections.forEach(section => {
                section.classList.add("hidden");
            });

            const activeSection = document.querySelector(`.content-section[data-content="${selectedOption}"]`);
            if (activeSection) {
                activeSection.classList.remove("hidden");
            }

            buttons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
        });
    });

    // Tüm form handler'ları başlat
    Object.values(formConfigs).forEach(config => {
        const formHandler = new FormHandler(config);
        console.log(`Form handler initialized for: ${config.buttonId}`);
    });
});

// Form yapılandırmaları
const formConfigs = {
    d8mbps12m: {
        buttonId: 'dslButtond8-12m',
        popupId: 'dslPopupd8-12m',
        formId: 'dslFormd8-12m',
        formType: 'dsl'
    },

    d16mbps12m: {
        buttonId: 'dslButtond16-12m',
        popupId: 'dslPopupd16-12m',
        formId: 'dslFormd16-12m',
        formType: 'dsl'
    },

    d24mbps12m: {
        buttonId: 'dslButtond24-12m',
        popupId: 'dslPopupd24-12m',
        formId: 'dslFormd24-12m',
        formType: 'dsl'
    },

    d35mbps12m: {
        buttonId: 'dslButtond35-12m',
        popupId: 'dslPopupd35-12m',
        formId: 'dslFormd35-12m',
        formType: 'dsl'
    },

    d50mbps12m: {
        buttonId: 'dslButtond50-12m',
        popupId: 'dslPopupd50-12m',
        formId: 'dslFormd50-12m',
        formType: 'dsl'
    },

    d100mbps12m: {
        buttonId: 'dslButtond100-12m',
        popupId: 'dslPopupd100-12m',
        formId: 'dslFormd100-12m',
        formType: 'dsl'
    },




    d16mbps24mDevice: {
        buttonId: 'dslButtond16-24m-device',
        popupId: 'dslPopupd16-24m-device',
        formId: 'dslFormd16-24m-device',
        formType: 'dsl'
    },

    d24mbps12mDevice: {
        buttonId: 'dslButtond24-24m-device',
        popupId: 'dslPopupd24-24m-device',
        formId: 'dslFormd24-24m-device',
        formType: 'dsl'
    },

    d35mbps12mDevice: {
        buttonId: 'dslButtond35-24m-device',
        popupId: 'dslPopupd35-24m-device',
        formId: 'dslFormd35-24m-device',
        formType: 'dsl'
    },

    d50mbps12mDevice: {
        buttonId: 'dslButtond50-24m-device',
        popupId: 'dslPopupd50-24m-device',
        formId: 'dslFormd50-24m-device',
        formType: 'dsl'
    },

    d100mbps12mDevice: {
        buttonId: 'dslButtond100-24m-device',
        popupId: 'dslPopupd100-24m-device',
        formId: 'dslFormd100-24m-device',
        formType: 'dsl'
    },



    
    f25mbpsThsz: {
        buttonId: 'fiberButtonf25-t',
        popupId: 'fiberPopupf25-t',
        formId: 'fiberFormf25-t',
        formType: 'fiber'
    },

    f50mbpsThsz: {
        buttonId: 'fiberButtonf50-t',
        popupId: 'fiberPopupf50-t',
        formId: 'fiberFormf50-t',
        formType: 'fiber'
    },

    f100mbpsThsz: {
        buttonId: 'fiberButtonf100-t',
        popupId: 'fiberPopupf100-t',
        formId: 'fiberFormf100-t',
        formType: 'fiber'
    },

    f200mbpsThsz: {
        buttonId: 'fiberButtonf200-t',
        popupId: 'fiberPopupf200-t',
        formId: 'fiberFormf200-t',
        formType: 'fiber'
    },

    f500mbpsThsz: {
        buttonId: 'fiberButtonf500-t',
        popupId: 'fiberPopupf500-t',
        formId: 'fiberFormf500-t',
        formType: 'fiber'
    },

    f1000mbpsThsz: {
        buttonId: 'fiberButtonf1000-t',
        popupId: 'fiberPopupf1000-t',
        formId: 'fiberFormf1000-t',
        formType: 'fiber'
    },


    
    f25mbps12mtv: {
        buttonId: 'fiberButtonf25-12m-tv',
        popupId: 'fiberPopupf25-12m-tv',
        formId: 'fiberFormf25-12m-tv',
        formType: 'fiber'
    },

    f50mbps12mtv: {
        buttonId: 'fiberButtonf50-12m-tv',
        popupId: 'fiberPopupf50-12m-tv',
        formId: 'fiberFormf50-12m-tv',
        formType: 'fiber'
    },

    f100mbps12mtv: {
        buttonId: 'fiberButtonf100-12m-tv',
        popupId: 'fiberPopupf100-12m-tv',
        formId: 'fiberFormf100-12m-tv',
        formType: 'fiber'
    },

    f200mbps12mtv: {
        buttonId: 'fiberButtonf200-12m-tv',
        popupId: 'fiberPopupf200-12m-tv',
        formId: 'fiberFormf200-12m-tv',
        formType: 'fiber'
    },

    f500mbps12mtv: {
        buttonId: 'fiberButtonf500-12m-tv',
        popupId: 'fiberPopupf500-12m-tv',
        formId: 'fiberFormf500-12m-tv',
        formType: 'fiber'
    },

    f1000mbps12mtv: {
        buttonId: 'fiberButtonf1000-12m-tv',
        popupId: 'fiberPopupf1000-12m-tv',
        formId: 'fiberFormf1000-12m-tv',
        formType: 'fiber'
    },
};

// Form işleyici sınıfı
class FormHandler {
    constructor(config) {
        this.button = document.getElementById(config.buttonId);
        if (!this.button) {
            console.error(`Button with id ${config.buttonId} not found`);
            return;
        }
        
        this.popup = document.getElementById(config.popupId);
        if (!this.popup) {
            console.error(`Popup with id ${config.popupId} not found`);
            return;
        }

        this.form = document.getElementById(config.formId);
        this.closeButton = this.popup.querySelector('.close-popup');
        this.formType = config.formType;
        
        console.log('FormHandler initialized with:', config);
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        const handleClick = (e) => {
            console.log('Button clicked');
            e.preventDefault();
            e.stopPropagation();
            this.openPopup();
        };

        this.button.addEventListener('click', handleClick);

        this.closeButton.addEventListener('click', () => {
            this.closePopup();
        });

        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.submitForm();
        });
    }

    openPopup() {
        this.popup.classList.add('active');
        gsap.fromTo(
            this.popup.querySelector('.popup-content'),
            { scale: 0.8, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.4, ease: 'power1.out' }
        );
    }
    
    closePopup() {
        gsap.to(this.popup.querySelector('.popup-content'), {
            scale: 0.8,
            opacity: 0,
            duration: 0.3,
            ease: 'power1.in',
            onComplete: () => this.popup.classList.remove('active')
        });
    }

    async submitForm() {
        try {
            const formData = new FormData(this.form);
            const response = await fetch(this.form.action, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                alert('Form başarıyla gönderildi!');
                this.form.reset();
                this.closePopup();
            } else {
                throw new Error('Form gönderilemedi');
            }
        } catch (error) {
            alert('Form gönderilirken bir hata oluştu. Lütfen tekrar deneyin.');
            console.error('Hata:', error);
        }
    }
}

// Toggle menu fonksiyonu
function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}