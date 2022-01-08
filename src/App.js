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
        {/* <Route exact path="/cars" component={Cars} />
<Route exact path="/motorcycles" component={Motorcycles} />
<Route exact path="/houses" component={Houses} />
<Route exact path="/tv" component={TV} />
<Route exact path="/tablets" component={Tablets} />
<Route exact path="/addpost" component={PostAdd} />
<Route exact path="/details" component={Details} />
<Route exact path="/login" component={LoginSetting} /> */}
      </Switch>
    </div>
  );
}

export default App;
