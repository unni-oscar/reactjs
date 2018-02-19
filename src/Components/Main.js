import React, { Component } from 'react';
import Innerbar from './Innerbar';
import Add from './Residents/Add';
import List from './Residents/List';
import uuid from 'uuid';
class Main extends Component {
    
    constructor() {
        super();
        this.state = [];
    }

    componentWillMount(){
        this.setState({
            students: [
                {
                    id: uuid.v4(),
                    name: "Student Name 1",
                    group: "Group A",
                    age: 15,
                    sex: "Male"
                },
                {
                    id: uuid.v4(),
                     name: "Student Name 2",
                     group: "Group B",
                     age: 16,
                     sex: "Female"
                 },
                 {
                    id: uuid.v4(),
                     name: "Student Name 3",
                     group: "Group C",
                     age: 16,
                     sex: "Male" 
                 },
            ]
        });
    }
    handleNewStudent(student) {
        let newStudents = this.state.students;
        newStudents.push(student);
        this.setState({students:newStudents});
    }
    handleDelete(id) {
        let studetsData = this.state.students;
        let index = studetsData.findIndex(x  => x.id === id );
        studetsData.splice(index,1);
        this.setState({students: studetsData});
    }
    render() {
        return (
            <div>
              <div className="col-sm-8 text-left"> 
                <h1>Resident</h1>
                <hr/>
                <Add newStudent={this.handleNewStudent.bind(this)} />
                <List doDelete={this.handleDelete.bind(this)} students={this.state.students} />
              </div>
              <Innerbar/>
            </div>
        );
    }
}

export default Main;
