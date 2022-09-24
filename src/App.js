import Login from "./components/Login";
import Home from "./components/Home";
import AddProduct from "./modules/products/addProduct";
import ItemDetail from "./modules/products/itemDetail";
import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/AddProduct" component={AddProduct} />
        <Route exact path="/itemDetails" component={ItemDetail} />
    
      </Switch>
    </div>
  );
}

export default App;
