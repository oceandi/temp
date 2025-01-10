function createNavbar() {
    const navbarHTML = `
        <nav class="navbar">
            <a class="noact" href="/">
                <img class="navlogo" src="https://raw.githubusercontent.com/oceandi/links/refs/heads/main/ISP/images/homepage/sol.png">
            </a>
            <div class="nwa">
                <ul class="nav-menu">
                    <li><a href="/offer/fiber-internet" draggable="false">Fiber</a></li>
                    <li><a href="/offer/vdsl" draggable="false">VDSL</a></li>
                    <li><a href="/offer/superbox" draggable="false">SuperBox</a></li>
                    <li><a href="/offer/tv-plus" draggable="false">TV+</a></li>
                    <li><a href="/offer/aksesuarlar" draggable="false">Aksesuarlar</a></li>
                    <li><a href="/offer/destek" draggable="false">Destek</a></li>
                </ul>
            </div>
            <div class="hamburger" onclick="toggleMenu()">
                <span></span>
                <span></span>
            </div>
        </nav>
    `;
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);
}

function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// Sayfa Yüklendiğinde Navbar Oluştur
window.addEventListener('DOMContentLoaded', createNavbar);
