import FeaturedArtists from "../components/FeaturedArtists";
import FeaturedArtwork from "../components/FeaturedArtwork";
import Hero from "../components/Hero";
import Header from "../Extras/Header";

export default function Featured() {
    return(
        <>
        
            <Hero />
            <FeaturedArtwork />
            <FeaturedArtists />
        </>
    );
}