import Hero from "./Hero";
import Project from "./project/Project";
import Skill from "./skills/Skill";

const HomePage = () => {
    return (
        <div className="overflow-hidden">
            <Hero/>
            <Project/>
            <Skill/>
        </div>
    );
};

export default HomePage;