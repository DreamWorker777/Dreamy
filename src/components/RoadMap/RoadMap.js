import './RoadMap.scss';
import back from '../../assets/img/purple block.png';

export const Rarity = () => {
    return (
        <section className="roadMap" id="roadmap">
            <div className="roadMap__back">
                <img src={back} alt="pic"></img>
            </div>
        </section>
    )
}

export default Rarity;