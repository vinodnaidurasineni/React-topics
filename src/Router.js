import React from "react";
import { BrowserRouter as Router, Route, Link,  Routes } from "react-router-dom"
import NavbarComponent from "./class-component/navbar";
import Home from "./functional-components/home";
import LcmComp from './LCM';
import Parent from './parentComp';
import PropsUsageComp from "./PropsUsage";
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
                    <li>
                        <Link to="/lcm" >Lcm</Link>
                    </li>
                    <li>
                        <Link to="/props" >Props</Link>
                    </li>
                    <li>
                        <Link to="/propsusage" >Props Usage</Link>
                    </li>
                </ul>
                <Routes>
                    <Route exact path="/home" element={<Home/>}></Route>
                    <Route exact path="/navbar" element={<NavbarComponent/>}></Route>
                    <Route exact path="/lcm" element={<LcmComp/>}/>
                    <Route exact path="/props" element={<Parent/>}/>
                    <Route exact path="/propsusage" element={<PropsUsageComp name="Jane" greeting="Morning"/>}/>
                </Routes>
            </Router>

        )
    }
}

export default RouterLink;