import React from "react";
class PropsUsageComp extends React.Component{
  //prop is a special keyword in rect used for passing data from one component to other
  //props are immutable
  //component rerenders if props are updated 
  constructor(props) {
      super(props);
      console.log(this.props.name)
      console.log(this.props.greeting)
  }
  render() {
      return(
          <div>
          <h2>Hello {this.props.name}, Good {this.props.greeting}</h2>
          
          </div>
      ) 
  }
}

export default PropsUsageComp;