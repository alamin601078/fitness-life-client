


import AboutSection from "../../Pages/HomePages/AboutSection";
import FeaturedClasses from "../../Pages/HomePages/FeaturedClasses";
import FeaturedSection from "../../Pages/HomePages/FeaturedSection";
import NewsletterSection from "../../Pages/HomePages/NewsletterSection";
import Slider from "../../Pages/HomePages/Slider";
import TeamSection from "../../Pages/HomePages/TeamSection";
import Testimonials from "../../Pages/HomePages/Testimonials";



const Home = () => {
    return (
        <div className="">
            <Slider/>
            <FeaturedClasses/>
            <FeaturedSection/>
            <NewsletterSection/>
            <Testimonials/>
            <TeamSection/>
            <AboutSection/>
        </div>
    );
};

export default Home;