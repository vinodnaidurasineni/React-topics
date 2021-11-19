import React from "react";
//state is a special variable which represents data associated with a component and the view
//state represents a components internal data set
class StateUsage extends React.Component {
    constructor(){
        super();
        //this.counter = 0;
        this.state ={
            counter: 0
        }
    }

    incrementCounter = () => {
        //set state will rerender the component
        //do not set state inside render() it will cause infinte loop
        console.log("Button Clicked");
        //this.counter= this.counter + 1;
        //this.state.counter = this.state.counter + 1;
        this.setState((previousState ) => { return {counter: previousState.counter+1}})
        this.setState((previousState ) => { return {counter: previousState.counter+1}})
        // this.setState({counter: this.state.counter+1})
        // this.setState({counter: this.state.counter+1})
        // this.setState({counter: this.state.counter+1})
        //console.log(this.counter)
    }
    render(){
        return(
            <div>
                <button onClick={this.incrementCounter}>Click</button>
                
                <p>{this.state.counter}</p>
            </div>
        )
    }
}

export default StateUsage;