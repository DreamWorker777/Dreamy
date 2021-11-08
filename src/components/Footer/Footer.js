import { Link } from 'react-scroll'

import './Footer.scss';

const menu = [
    "about", "rarity", "roadmap", "team"
];

export const Footer = () => {
    return (
        <section className="footer">
            <div className="footer__links">
                <div className="footer__links__title">
                    DREAMY GEEKS
                </div>

                <div className="footer__links__buttons">
                    <div className="footer__links__buttons__menu">
                        {
                            menu.map((item, index) => (
                                <Link
                                    key={index}
                                    smooth={true} 
                                    duration={500} 
                                    spy={true} 
                                    to={ item }
                                >
                                    { item.toUpperCase() }
                                </Link>
                            ))
                        }
                    </div>

                    <div className="footer__links__buttons__menu">
                        <a href="https://discord.gg/pdHyHZ9dJ3">JOIN DISCORD</a>
                        <a href="https://twitter.com/DreamyGeeks">TWITTER</a>
                        <a href="https://instagram.com/DreamyGeeks">INSTAGRAM</a>
                        <a href="#javascript;">FACEBOOK</a>
                    </div>
                </div>
            </div>

            <div className="footer__copyright">
                © 2021 DREAMY GEEKS. ALL RIGHTS RESERVED
            </div>
        </section>
    )
}

export default Footer;