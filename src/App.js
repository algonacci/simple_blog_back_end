import { Route, Switch } from "react-router-dom";
import PopupsCrud from "./component/PopupsCrud";
import { Login, ListProduct } from "./pages";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/list-products" component={ListProduct} />
        <Route path="/popups" component={PopupsCrud} />
      </Switch>
    </div>
  );
}

export default App;
