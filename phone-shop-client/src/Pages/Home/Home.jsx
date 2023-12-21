import Banner from "../../Components/Home/Banner/Banner";
import LatestProducts from "../../Components/Home/LatestProducts/LatestProducts";


const Home = () => {
    return (
        <div className="text-5xl">
            <Banner/>
            <LatestProducts/>
        </div>
    );
};

export default Home;