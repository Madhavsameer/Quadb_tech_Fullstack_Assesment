import Slider from "./../components/Slidersection";
import Banner from "./../components/Bannergrid";
import Product from "./../components/Product";
import Support from "./../components/Support";
import About from "./../components/About";
import Newsletter from "./../components/Newsletter";
import Footer from "./../components/Footer";
import Notificationbar from "./../components/Notificationbar";
import Navigation from "./../components/Navbar";

const Home = () => {
  return (
    <div>
      <>
        <Notificationbar />
        <Navigation />
        <Slider />
        <Banner />
        <Product />
        <Support />
        <About />
        <Newsletter />
        <Footer />
      </>
    </div>
  );
};

export default Home;
