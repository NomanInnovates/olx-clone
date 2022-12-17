import Hero from "./Hero";
import Header from "./Header";
import Footer from "./Footer";
import ProductContainer from "../modules/products/productContainer";
import { useProducts } from "../modules/products/useProducts";

function Home() {
  const [products,loading,filterProducts] = useProducts();
  return (
    <div className="Home">
      <Header filterProducts={filterProducts} />
      <Hero />
      <ProductContainer products={products} loading={loading} />
      <Footer />
    </div>
  );
}

export default Home;
