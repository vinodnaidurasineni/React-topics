import React from "react";

class MapComp extends React.Component {

    constructor() {
        super();
        this.state = {
            tableData: [
                { name: 'vinod', age: '24' },
                { name: 'abhi', age: '5' },
                { name: 'shanu', age: '3' }
            ]
        }
    }

    render() {

        return (
            <table className="table table-hovered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.tableData.map(data => {
                        return <tr>
                            <td>{data.name}</td>
                            <td>{data.age}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        )

    }

}

export default MapComp;