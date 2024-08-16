import footerLogo from '../assets/images/footer-logo.svg';
import appleLogo from '../assets/images/socials/apple icon.svg';
import androidLogo from '../assets/images/socials/android icon.svg';
import instagramLogo from '../assets/images/socials/insta icon.svg';
import tiktokLogo from '../assets/images/socials/tiktok icon.svg';

function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-row">
                <div className="footer-copyright">
                    <img src={footerLogo} alt="Footer logo" />
                    <p className="footer-content"><span>Все права защищены, 2024</span><span>Разработчик: Yereke</span></p>
                </div>
                <div className="footer-socials">
                    <h3 className="footer-title">Скачайте и подпишитесь</h3>
                    <ul className="socials-nav">
                        <li className="socials-nav__item">
                            <span className="socials-nav__link">
                                <img src={appleLogo} alt="Apple" />
                            </span>
                        </li>
                        <li className="socials-nav__item">
                            <span className="socials-nav__link">
                                <img src={androidLogo} alt="Android" />
                            </span>
                        </li>
                        <li className="socials-nav__item">
                            <span className="socials-nav__link">
                                <img src={instagramLogo} alt="Instagram" />
                            </span>
                        </li>
                        <li className="socials-nav__item">
                            <span className="socials-nav__link">
                                <img src={tiktokLogo} alt="Tik Tok" />
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;