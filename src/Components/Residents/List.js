import React, { Component } from 'react';
import Student from './Student';
class List extends Component {
    handleDelete1(id) {
        this.props.doDelete(id);
    }
    render() {
        
        let students;
         if(this.props.students) {
             students = this.props.students.map(student => {
                 return (
                     <Student  onDelete={this.handleDelete1.bind(this)} key={student.name} data={student} />
                 );
             });
         }
        return (
           <div>
              <div className="row col-md-8  custyle">
              <table className="table table-striped custab">
              <thead>
                  <tr>
                      <th>Name</th>
                      <th>Group</th>
                      <th>Age</th>
                      <th className="text-center">Action</th>
                  </tr>
              </thead>
                <tbody>
                      {students}
                      </tbody> 
              </table>
              </div>                     
            </div>
        
        );
    }
}

export default List;
