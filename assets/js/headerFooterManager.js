class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="d-flex justify-content-center py-1" id="nav-header">
                <a id="site-title" class="navbar-brand fw-bold ms-lg-2 d-inline-block" href="../index.html">CONCRETE • INSIGHT • UK</a>
                <div class="navbar ms-5 d-lg-none">
                    <button class="navbar-toggler my-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
            </div>
                <nav id="navbar" class="navbar navbar-expand-lg bg-body-tertiary p-0 text-uppercase">
                    <div class="container-fluid py-0">
                        <div class="collapse navbar-collapse d-lg-flex justify-content-lg-center" id="navbarSupportedContent">
                            <ul class="navbar-nav mb-2 mb-lg-0">
                                <li class="nav-item mx-1">
                                    <a class="nav-link active p-3" aria-current="page" href="../index.html">Home</a>
                                </li>
                                <li class="nav-item dropdown mx-1 hover-underline-animation">
                                <a class="nav-link dropdown-toggle p-3" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Intrusive Investigations
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="service-pages/intrusive-investigations.html">Concrete Coring</a></li>
                                    <li><a class="dropdown-item" href="#">Dust Sampling</a></li>
                                    <li><a class="dropdown-item" href="#">Conrete Breakouts</a></li>
                                    <li><a class="dropdown-item" href="#">Pull Testing</a></li>
                                    <li><a class="dropdown-item" href="#">Half Cell Potential Surveys</a></li>
                                </ul>
                                </li>
                                <li class="nav-item dropdown mx-1 hover-underline-animation">
                                    <a class="nav-link dropdown-toggle p-3" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Non-Intrusive Surveys
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Ferroscanning</a></li>
                                        <li><a class="dropdown-item" href="#">Ground Penetrating Radar</a></li>
                                        <li><a class="dropdown-item" href="#">Defect Surveys</a></li>
                                        <li><a class="dropdown-item" href="#">Dimensional Surveys</a></li>
                                        <li><a class="dropdown-item" href="#">Rebound Hammer Surveys</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown mx-1 hover-underline-animation">
                                    <a class="nav-link dropdown-toggle p-3" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Testing
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Carbonation Testing</a></li>
                                        <li><a class="dropdown-item" href="#">Chloride Ion Testing</a></li>
                                        <li><a class="dropdown-item" href="#">HAC Determination</a></li>
                                        <li><a class="dropdown-item" href="#">Compressive Strength Testing</a></li>
                                        <li><a class="dropdown-item" href="#">Sulphide Testing</a></li>
                                        <li><a class="dropdown-item" href="#">Total Alkali Testing</a></li>
                                        <li><a class="dropdown-item" href="#">Petrographic Testing</a></li>
                                        <li><a class="dropdown-item" href="#">Cement Content</a></li>
                                        <li><a class="dropdown-item" href="#">Moisture Content</a></li>
                                        <li><a class="dropdown-item" href="#">Mixed Mortar Analysis</a></li>
                                        <li><a class="dropdown-item" href="#">Tensile Strength</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item mx-1 me-1 me-lg-4 hover-underline-animation">
                                    <a class="nav-link p-3" aria-current="page" href="#">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
    `
    }
}

class SpecialFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div id="map"></div>
            <footer class="d-flex flex-wrap justify-content-evenly align-items-center py-4 border-top">
                <div class="col-4 d-flex align-items-center">
                <span class="text-muted">© 2025 Concrete Insight UK
                <br><br>
                Some images provided by <a class="inherit-color" href="https://www.freepik.com/">Freepik</a>
                </span>
                </div>
            
                <ul class="nav col-6 justify-content-end list-unstyled d-flex">
                    <li class="ms-3"><a class="text-muted" href="#"><i class="fa-brands fa-square-facebook fa-2xl"></i></li>
                    <li class="ms-3"><a class="text-muted" href="#"><i class="fa-brands fa-google fa-xl"></i></li>
                    <li class="ms-3"><a class="text-muted" href="#"><i class="fa-brands fa-square-instagram fa-2xl"></i></li>
                </ul>
            </footer>
    `
    }
}

customElements.define('special-header', SpecialHeader)
customElements.define('special-footer', SpecialFooter)

