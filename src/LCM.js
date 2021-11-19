import React from "react";
class LcmComp extends React.Component {
    //we might want to fetch data from backend server before a component takes birth
    // initialization- initial component setup, setting up props and state
    //mounting- when the component is mounted to the dom tree
    //updating- when a component is being updated with new state, new props are being recieved
    //un-mounting- destroying component from DOM tree

    //Mounting Phase 
    //After preparing component with basic needs, state and props, it is ready to mount
    componentWillMount() {
     //exec just before compoent is about to mount on DOM
     console.log("component will mount ")
     debugger
    }
    render() {
        return (
            <h1>Hello</h1>
        )
    }
    componentDidMount() {
    //exec after comp is mounted on DOM
    console.log("AFter Mounting")
    }

}

export default LcmComp;