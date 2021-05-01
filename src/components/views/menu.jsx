import { 
    Route,
    Link,
    BrowserRouter as Router,
    Switch
} from 'react-router-dom';
import React from 'react';
// import components here
import Home from './home';
import Business from './business';
import Prototype from './prototype';
import Idea from './myIdea';
import Contact from './contact';
import Product from './product';
import Danger from '../logic/Danger';

class Menu extends React.Component {
    render() {
        return(
            <Router>
                    <nav>
                        <ul>
                            <li>
                                <Link to = '/' className = "link">Home</Link>
                            </li>
                            <li>
                                <Link to = '/business' className = "link">Business</Link>
                            </li>
                            <li>
                                <Link to = '/prototype' className = "link">Prototype</Link>
                            </li>
                            <li>
                                <Link to = '/myIdea' className = "link">Our Idea</Link>
                            </li>
                            <li>
                                <Link to = '/contact' className = "link">Contact Us</Link>
                            </li>
                            <li>
                                <Link to = '/product' className = "link">Our Products</Link>
                            </li>
                            <li>
                                <Link to = '/Danger' className = "link">Danger</Link>
                            </li>
                        </ul>
                    </nav>
                <hr />
                    <Switch>
                        <Route exact path = '/' component = {Home} />
                        <Route path = '/business' component = {Business} />
                        <Route path = '/prototype' component = {Prototype} />
                        <Route path = '/myIdea' component = {Idea} />
                        <Route path = '/contact' component = {Contact} />
                        <Route path = '/product' component = {Product} />
                        <Route path = '/Danger' component = {Danger} />
                    </Switch>
            </Router>
        )
    }
}

export default Menu;