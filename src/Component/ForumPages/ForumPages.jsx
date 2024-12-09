import Banner from "../../Pages/ForumPost/Banner";
import Post from "../../Pages/ForumPost/Post";
// import PostCad from "../../Pages/ForumPost/PostCad";
import FeaturedSection from "../../Pages/HomePages/FeaturedSection";

const ForumPages = () => {
    return (
        <div>
              <Banner/>
              <Post></Post>
            {/* <PostCad/> */}
            <FeaturedSection/>
        </div>
    )
};

export default ForumPages;