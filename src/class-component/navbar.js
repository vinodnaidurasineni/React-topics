import React from "react";


class NavbarComponent extends React.Component{

    constructor() {
        super();
        this.state= {
            page: "Navbar" ,
            name:'',
            place:'',
            signup:{
                username:'',
                dob:''
            },
            login:{
                username:'',
                password:''
            }
        
           }
     this.handleChange = this.handleChange.bind(this);
    }



    handleChange(event){
        console.log(this.state);
        console.log(event.target.value)
        console.log(event.target.id)
        console.log(event);

        this.setState({ signup:{...this.state.signup,[event.target.id]:event.target.value}},()=>{
            console.log("data")
        });
    }

    render() {
        return (
            <div>
            <h1> This page is {this.state.page}</h1>
            <input type="text"  name="name" id="username" value={this.state.signup.username}  onChange={this.handleChange}/>
            <input type="text"  name="dob" id="dob" value={this.state.signup.dob}  onChange={this.handleChange}></input>
            </div>
        )
    }


}
export default NavbarComponent;