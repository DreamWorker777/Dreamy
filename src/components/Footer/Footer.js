import { Link } from 'react-scroll'

import './Footer.scss';
import etherscan from '../../assets/img/etherscan button.png';
import opensea from '../../assets/img/opensea button.png';
import calendar from '../../assets/img/nft calendar-01.png';

const menu = [
    "about", "rarity", "roadmap", "team"
];

export const Footer = () => {
    return (
        <section className="footer container">
            <div className="footer__buttons">
                <div className="footer__buttons__item">
                    <a><img alt="pic" src={etherscan}></img></a>
                </div>
                <div className="footer__buttons__item">
                    <a href="https://OpenSea.io/collection/DreamyGeeks" target="_blank"><img alt="pic" src={opensea}></img></a>
                </div>
                <div className="footer__buttons__item">
                    <a href="https://nftcalendar.io/event/dreamy-geeks/" target="_blank"><img alt="pic" src={calendar}></img></a>
                </div>
            </div>

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