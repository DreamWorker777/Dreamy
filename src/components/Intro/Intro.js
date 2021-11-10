import './Intro.scss';

import banner from '../../assets/img/banner image-01.jpg';
import dropBack from '../../assets/img/2-geeks-by-drop-date-01.png';
import dropDate from '../../assets/img/drop dates.png';
import minus from '../../assets/img/minus.svg';
import plus from '../../assets/img/plus.svg';
import { useState } from 'react';

export const Intro = () => {
    const [value, setValue] = useState(1);
    
    return (
        <section className="intro">
            <div className="intro__banner">
                <img alt="pic" src={banner}></img>
            </div>

            <div className="intro__drop container">
                <div className="intro__drop__back">
                    <img alt="pic" src={dropBack}></img>
                </div>

                <div className="intro__drop__date">
                    <div className="intro__drop__date__mint">
                        <button className="intro__drop__date__mint__minus" onClick={() => { return value > 1 ? setValue((prev) => prev - 1): null }}><img alt="src" src={minus}></img></button>
                        <span className="intro__drop__date__mint__value">{value}</span>
                        <button className="intro__drop__date__mint__plus" onClick={() => { return setValue((prev) => prev + 1) }}><img alt="src" src={plus}></img></button>
                        <button className="intro__drop__date__mint__place"> mint </button>
                    </div>

                    <img alt="pic" src={dropDate}></img>
                </div>
            </div>
        </section>
    )
}

export default Intro;