import React from "react";
import axios from "axios";
class FormsComp extends React.Component {

    constructor() {
        super();
        this.state = {
            signup: {
                username: '',
                dob: ''
            },
            login: {
                username: '',
                password: ''
            }
        }
        axios.get("http://localhost:8080/student").then(res=>{
            console.log(res)
        })
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        // console.log(this.state);
        // console.log(event.target.value)
        // console.log(event.target.id)
        // console.log(event);

        this.setState({ signup: { ...this.state.signup, [event.target.id]: event.target.value } }, () => {
            console.log("data")
        });
    }

    render() {
        <div>
            
        </div>
    }

}