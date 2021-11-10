import './Rarity.scss';
import back from '../../assets/img/blue block.jpg';

export const Rarity = () => {
    return (
        <section className="rarity" id="rarity">
            <div className="rarity__back">
                <img src={back} alt="pic"></img>
            </div>
        </section>
    )
}

export default Rarity;