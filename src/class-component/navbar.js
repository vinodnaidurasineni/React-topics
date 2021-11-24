import axios from "axios";
import React from "react";


class NavbarComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            student: {
                id: "",
                name: "",
                age: "",
                email: "",
                error: {}
            },
            studentData: []

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validateStudent = this.validateStudent.bind(this);
        this.getStudents = this.getStudents.bind(this)
    }

    componentDidMount() {
      this.getStudents()
    }

    getStudents(){
        axios.get("http://localhost:8080/student").then(res => {
            console.log(res);
            this.setState({ studentData: res.data });
        })
    }



    handleChange(event) {
        console.log(this.state);
        this.setState({ student: { ...this.state.student, [event.target.id]: event.target.value } }, () => {
            console.log("data")
        });
    }

    validateStudent() {
        let valid = true;
        if (this.state.student.name.length < 5) {

            valid = false;
            this.setState({ student: { ...this.state.student, error: { ...this.state.student.error, name: "Username to Short" } } })
        }
        // var regex=/^[a-z]*$/;
        // if (!regex.match(this.state.student.email)) {

        //     valid = false;
        //     this.setState({ student: { ...this.state.student, error: { ...this.state.student.error, email: "Invalid email" } } })
        // }

        return valid;

    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.student);
        if (this.validateStudent()) {
            axios.post("http://localhost:8080/student", this.state.student).then(res => {
                console.log(res)
            })
            this.getStudents();
        } else {

        }


    }

    render() {
        return (
            <div>
                <table className="table table-hovered">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.studentData.map(data => {
                        return <tr>
                            <td>{data.id}</td>
                            
                            <td>{data.name}</td>
                            <td>{data.age}</td>
                            <td>{data.email}</td>
                        </tr>
                    })}
                </tbody>
            </table>
                
                <form className="form" method="post" onSubmit={this.handleSubmit}>
                    <label for="id"> Id</label>
                    <input type="text" id="id" value={this.state.student.id} className="form-control" onChange={this.handleChange} />

                    <label for="name"> Name</label>
                    <input type="text" id="name" value={this.state.student.name} className="form-control" onChange={this.handleChange} />
                    <div className="text-danger">{this.state.student.error['name']}</div>
                    <label for="age"> Age</label>
                    <input type="text" id="age" value={this.state.student.age} className="form-control" onChange={this.handleChange} />
                    <label for="email"> Email</label>
                    <input type="text" id="email" value={this.state.student.email} className="form-control" onChange={this.handleChange} />
                    <button type="submit" className="btn btn-primary" >Submit</button>
                </form>
            </div>
        )
    }


}
export default NavbarComponent;