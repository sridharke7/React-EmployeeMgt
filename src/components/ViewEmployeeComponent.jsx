import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
        this.backToEmployee = this.backToEmployee.bind(this);
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( (res) => {
            this.setState({employee: res.data});
    });
}

backToEmployee(){
    this.props.history.push('/employees')
}
    render() {
        return (
            <div>
                <br></br>
                 <div className = "card col-md-6 offset-md-3 offset-md-3">
                    <h3 className="text-center">View Employee</h3>
                        <div className="card-body">
                        <div className = "row">
                            <label>First Name:  </label>
                            <div> {this.state.employee.firstName} </div>
                        </div>
                        <div className = "row">
                            <label>Last Name:   </label>
                            <div> {this.state.employee.lastName} </div>
                        </div>
                        <div className = "row">
                            <label>Email ID:    </label>
                            <div> {this.state.employee.emailId} </div>
                        </div>
                    </div>
                    <div className = "row">
                        <button className = "btn btn-primary" onClick={this.backToEmployee}>Back</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewEmployeeComponent;