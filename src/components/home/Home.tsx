import Hero from "./Hero";
import Skill from "./skills/Skill";

const HomePage = () => {
    return (
        <div className="overflow-hidden">
            <Hero/>
            <Skill/>
        </div>
    );
};

export default HomePage;