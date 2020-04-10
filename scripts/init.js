window.onload = () => {
    insertNavigation();
    insertFooter();
};

function insertNavigation() {
    document.getElementById('nav-container').innerHTML =
        `<nav class="topnav" id="nav">
        <a class="link" id="logo-link" href="index.html"><img class="logo" id="nav-logo" src="assets/img/logo.png"/></a>
        <div class="links-container">
            <a class="menu-link link" id="about-link" href="#about">
                <span>About</span>
            </a>
            <a class="menu-link link" id="menu-link" href="#menu">
                <span>Menu</span>
            </a>
            <a class="menu-link link" id="order-link" href="./views/contactPage.html">
                <span>Order online</span>
            </a>
        </div>
        <a href="javascript:void(0);" class="menu-link icon" onclick="toggleNavigation()">
            <i class="fa fa-bars" id="toggler-icon"></i>
        </a>
    </nav>
    `;
    setNavigationAttributes();
}

function setNavigationAttributes() {
    if(window.location.href.endsWith(_contactPageName)){
        document.getElementById('about-link').setAttribute('href', `./../index.html#about`);
        document.getElementById('menu-link').setAttribute('href', './../index.html#menu');
        document.getElementById('logo-link').setAttribute('href', './../index.html');
        document.getElementById('order-link').setAttribute('href', './../views/contactPage.html');
        document.getElementById('nav-logo').setAttribute('src', './../assets/img/logo.png');
    }
}

function toggleNavigation() {
    document.getElementById("nav").classList.toggle('responsive');
    document.getElementById(_navToggler).classList.toggle('fa-bars');
    document.getElementById(_navToggler).classList.toggle('fa-times');
}

function insertFooter() {
    document.getElementById('footer-container').innerHTML =
        `<footer id="reservation">
        <div class="footer-content">
            <p class="footer-text">Want to have an unforgettable experience as you <strong>#stayhome</strong>? Just place your order!</p>
            <div class="banner-controls">
                <a href="#menu">
                    <button class="footer-button">Check our menu</button>
                </a>
                <a href="views/contactPage.html">
                    <button class="footer-button">Order online</button>
                </a>
            </div>
        </div>
        <div class="copyright">
            <p>This website is made by 
                <a class="copyright-link" href="https://www.linkedin.com/in/deyan-peychev/" target="_blank">Deyan Peychev</a> 
                as a course project at Plovdiv University "Paisii Hilendarski" | All rights reserved.
            </p>
        </div>
    </footer>`;
}