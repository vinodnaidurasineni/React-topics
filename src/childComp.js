import React from "react";
class Child extends React.Component {
render() {
    return (
        //<h3> I am a child Component Rendered in a parent Component</h3>
        <h3>My parent is {this.props.action} at me!</h3>
    )
}
}

export default Child;