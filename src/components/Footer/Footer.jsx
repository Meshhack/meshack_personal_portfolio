import logo from "../../assets/logo.png"
import "./footer.css"


const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title"><img className="footer__logo" height={"50px"} width={"50px"} src={logo} alt="logo" /></h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#skills" className="footer__link">Skills</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://www.instagram.com/meshhack/" className="footer__social-link" target="_blank">
                    <i className="uil uil-instagram"></i>
                </a>

                <a href="https://twitter.com/meshhark" className="footer__social-link" target="_blank">
                    <i className="uil uil-twitter-alt"></i>
                </a>
        
                <a href="https://github.com/Meshhack/" className="footer__social-link" target="_blank">
                    <i className="uil uil-github-alt"></i>
                </a>
            </div>

            <span className="footer__copy">&#169; 2024 Meshack All rigths reserved</span>
        </div>
    </footer>

  )
}

export default Footer