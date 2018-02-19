import React, { Component } from 'react';

class Student extends Component {
    handleDelete(id) {
        this.props.onDelete(id);
    }
    render() {
        return (
                <tr>
                    <td>{this.props.data.name}</td>
                    <td>{this.props.data.group}</td>
                    <td>{this.props.data.age}</td>
                    <td className="text-center"><a className='btn btn-info btn-xs' href="#" onClick={this.handleDelete.bind(this, this.props.data.id)}><span className="glyphicon glyphicon-remove"></span> Del</a></td>
                </tr>

           
        
        );
    }
}

export default Student;
