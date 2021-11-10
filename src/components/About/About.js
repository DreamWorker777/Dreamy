import './About.scss';

import back from '../../assets/img/orange block.jpg';

export const About = () => {
    return (
        <section className="about" id="about">
            <div className="about__back">
                <img src={back} alt="pic"></img>
            </div>
        </section>
    )
}

export default About;