import AddProduct from "./ui/add_product_page/AddProduct";
import Product from "./ui/all_product_page/Product";
import EditProduct from "./ui/edit_product_page/EditProduct";
import Strings from "./utill/Strings";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="root">
                <Route path={Strings.GET_PRODUCT} exact>
                    <Product />
                </Route>
                <Switch>
                    <Route path={Strings.ADD_PRODUCT} exact>
                        <AddProduct />
                    </Route>
                    <Route path={Strings.EDIT_PRODUCT} exact>
                        <EditProduct />
                    </Route>
                </Switch>
            </div>
        </Router >
    );
}
export default App;