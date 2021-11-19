import React, {Component} from "react";
import Child from "./childComp";
class Parent extends Component {
    action = 'Waving'
render() {
    return (
        <div>
        <h3> I am Parent Component </h3>
        <Child action={this.action}/>
        </div>

    )
}
}

export default Parent;