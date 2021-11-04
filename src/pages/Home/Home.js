import NavBar from '../../components/NavBar/NavBar';
import Intro from '../../components/Intro/Intro';
import About from '../../components/About/About';
import Slider from '../../components/Slider/Slider';
import Rarity from '../../components/Rarity/Rarity';
import RoadMap from '../../components/RoadMap/RoadMap';
import Team from '../../components/Team/Team';
import Footer from '../../components/Footer/Footer';

export const Home = () => {
    return (
        <div>
            <NavBar />
            <Intro />
            <About />
            <Slider />
            <Rarity />
            <RoadMap />
            <Team />
            <Footer />
        </div>
    )
}

export default Home;