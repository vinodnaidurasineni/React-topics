import React from "react";
//component name should always start with capital letters other wise react consider them as norml html tags
class HelloComp extends React.Component{
    //if you do not implement render you will get typeError
    //return must have brackets otherwise it will take as return;
    constructor() {
        super();
        this.name ="Jane"
    }

    displayName = () => {
        return (
            <h1>{this.name}</h1>
        )
    }
    render(){
        return (
            <div>
            <h1>Hello Component Works</h1>
            <span> Hello {this.name}</span>
            <span>{this.displayName()}</span>
            </div>
        )
    }

    //for creating class methods arrow funtion syntax must be used
    //if we are using constructor super() must be the first statement if we want to use this keyword inside constructor 
}

export default HelloComp;
