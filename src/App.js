import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Cart from './Pages/Cart';
import Navigation from './Component/Navigation';
import SingleProduct from './Pages/SingleProduct';





function App() {
    return (
        <>
            <Router>
                < Navigation />
                <Switch>
                    <Route path="/" component={Home} exact></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/products/:_id" component={SingleProduct}></Route>
                    <Route path="/cart" component={Cart}></Route>






                </Switch>
            </Router>
        </>
    )
}
export default App;