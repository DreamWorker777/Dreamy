import './Intro.scss';

import banner from '../../assets/img/banner image-01.png';
import dropBack from '../../assets/img/2 geeks by drop date-01.png';
import dropDate from '../../assets/img/drop dates.png';

export const Intro = () => {
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
                    <button> mint </button>

                    <img alt="pic" src={dropDate}></img>
                </div>
            </div>
        </section>
    )
}

export default Intro;