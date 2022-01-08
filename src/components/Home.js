import Hero from "./Hero";
import Header from "./Header";
import Footer from "./Footer";
import ProductContainer from "../modules/products/productContainer";

function Home() {
  return (
    <div className="Home">
      <Header />
      <Hero />
      <ProductContainer />
      <Footer />
    </div>
  );
}

export default Home;
