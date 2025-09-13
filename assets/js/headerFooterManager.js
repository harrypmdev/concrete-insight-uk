class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav id="navbar" class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a id="site-title" class="navbar-brand fw-bold ms-lg-2" href="#">CONCRETE INSIGHT UK</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto me-4 mb-2 mb-lg-0">
                            <li class="nav-item mx-1">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item dropdown mx-2 hover-underline-animation">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Intrusive Investigations
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Concrete Coring</a></li>
                                <li><a class="dropdown-item" href="#">Dust Sampling</a></li>
                                <li><a class="dropdown-item" href="#">Conrete Breakouts</a></li>
                                <li><a class="dropdown-item" href="#">Pull Testing</a></li>
                                <li><a class="dropdown-item" href="#">Half Cell Potential Surveys</a></li>
                            </ul>
                            </li>
                            <li class="nav-item dropdown mx-1 hover-underline-animation">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                                <a class="nav-link" aria-current="page" href="#">Contact Us</a>
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
            <div class="footer mt-auto text-center">
                <span id="bottom"> 
                    <hr>
                    <p>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-facebook"></i></a>
                </p>
                </span>
            </div>
    `
    }
}

customElements.define('special-header', SpecialHeader)
customElements.define('special-footer', SpecialFooter)

