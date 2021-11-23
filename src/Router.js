import React from "react";
import { BrowserRouter as Router, Route, Link,  Routes } from "react-router-dom"
import NavbarComponent from "./class-component/navbar";
import Home from "./functional-components/home";

class RouterLink extends React.Component {

    render() {
        return (
            <Router>
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/navbar">navbar</Link>
                    </li>
                </ul>
                <Routes>
                    <Route exact path="/home" element={<Home/>}></Route>
                    <Route exact path="/navbar" element={<NavbarComponent/>}></Route>
                </Routes>
            </Router>

        )
    }
}

export default RouterLink;