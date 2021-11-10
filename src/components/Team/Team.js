import './Team.scss';
import back from '../../assets/img/green block.jpg';

export const Team = () => {
    return (
        <section className="team" id="team">
            <div className="team__back">
                <img src={back} alt="pic"></img>
            </div>
        </section>
    )
}

export default Team;