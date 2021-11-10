import {NotificationManager} from 'react-notifications';
import { Link } from 'react-scroll'

import './NavBar.scss';

import topIcon1 from '../../assets/img/icons/topIcon1.svg';
import topIcon2 from '../../assets/img/icons/topIcon2.svg';
import topIcon3 from '../../assets/img/icons/topIcon3.svg';
import topIcon4 from '../../assets/img/icons/topIcon4.png';

import menuIcon from '../../assets/img/icons/menu.svg';

const menu = [
    "about", "rarity", "roadmap", "team"
];

const TopLogo = () => {
    return (
        <div className="navBar__logo">
            <div className="navBar__logo__text">
                dreamy geeks
            </div>
        </div>
    )
}

const SectionMenu = () => {
    return (
        <div className="navBar__sectionMenu">
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
    )
}

const TopButtons = () => {
    const connectWallet = () => {
        NotificationManager.info('Metamask Wallet connection currently unavailable! Please retry on launch date.');
    }

    return (
        <div className="navBar__menu">
            <button className="navBar__menu__walletBtn" onClick={ connectWallet } >CONNECT WALLET</button>
            <div className="navBar__menu__icons">
                <a href="https://discord.gg/pdHyHZ9dJ3"><img src={ topIcon1 } alt="logo"></img></a>
                <a href="https://twitter.com/DreamyGeeks"><img src={ topIcon2 } alt="logo"></img></a>
                <a href="https://instagram.com/DreamyGeeks"><img src={ topIcon3 } alt="logo"></img></a>
                <a href="https://OpenSea.io/collection/DreamyGeeks"><img src={ topIcon4 } alt="logo"></img></a>
            </div>

            <div className="navBar__menu__dropDownMenu">
                <img src={menuIcon} className="navBar__menu__dropDownMenu__icon" alt="menu"></img>
                <div className="navBar__menu__dropDownMenu__content">
                    <a href="https://discord.gg/pdHyHZ9dJ3" target="_blank">JOIN DISCORD</a>
                    <a href="https://twitter.com/DreamyGeeks" target="_blank">TWITTER</a>
                    <a href="https://instagram.com/DreamyGeeks" target="_blank">INSTAGRAM</a>
                    <a href="#javascript;">FACEBOOK</a>
                </div>
            </div>
        </div>
    )
}

export const NavBar = () => {
    return (
        <div className="navBar container">
            <TopLogo />
            <SectionMenu />
            <TopButtons />
        </div>
    )
}

export default NavBar;