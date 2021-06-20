import {useEffect} from 'react'
import Header from './Header'
// import Pros from '../config/pros'
import ProductContainer from '../modules/products/productContainer'
// import AddImg from './addImg'
// import Hero from './hero'
// import Footer from './footer'

function Home() {
  // useEffect(() => {
  //   console.log("before render")
  // },[]);
 
  return (
    <div className="Home">
     <Header/>
     {/* <Hero/> */}
     {/* <button onClick={addd}>Get</button> */}
     <ProductContainer/>
     {/* <Footer/> */}
     {/* <AddImg/> */}
     </div>
  );
}

export default Home;
