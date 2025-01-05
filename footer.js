function createFooter() {
    const footerContent = `
        <div class="five">
            <div class="endofpage">
                <p>Diğer alışveriş seçenekleri: Yakınınızda <a class="underline" href="https://www.google.com/maps/place/TURKCELL+SUPERONLINE+DEHANET+EV+%C3%87%C3%96Z%C3%9CM+MERKEZ%C4%B0/@40.2200818,28.9531693,18z/data=!3m1!4b1!4m6!3m5!1s0x14ca15ca443d3ec5:0x41e661eb80ae8491!8m2!3d40.2204689!4d28.9535448!16s%2Fg%2F11srjm4zwy?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D">bir Turkcell İletişim Merkezi</a> veya <a class="underline" href="sales-team/index.html">başka bir satış temsilcisi</a> bulun. Veya 0224 999 5858 ya da 0532 532 00 00 numaralı telefonu arayın.</p>
                <div class="divider"></div>
                <p>Telif Hakkı © 2025 Turkcell Superonline DehaNet | Ev Çözüm Merkezi. Tüm hakları saklıdır.</p>
                <ul class="legal">
                    <a href="about/privacy/index.html"><li class="legalli">Gizlilik Politikası</li></a>
                    <a href="about/cookies/index.html"><li class="legalli">Çerezlerin Kullanımı</li></a>
                    <a href="about/internet-services/index.html"><li class="legalli">Kullanım Şartları</li></a>
                    <a href="about/salespolicies/index.html"><li class="legalli">Cayma Hakkı</li></a>
                    <a href="about/legal/index.html"><li class="legalli">Yasal Bilgiler</li></a>
                    <a href="https://vknsorgula.net/2730624106.html"><li class="legalli">Bilgi Toplumu Hizmetleri</li></a>
                </ul>
            </div>
        </div>
    `;
    document.querySelector('.canvas').insertAdjacentHTML('beforeend', footerContent);
}

document.addEventListener('DOMContentLoaded', createFooter);