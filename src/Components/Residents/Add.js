import React, { Component } from 'react';
import uuid from 'uuid';

class Add extends Component {
    static defaultProps = {
        groups: ['Group A', 'Group B', 'Group C', 'Group D', 'Group E'],
    }
    handleSubmit(e) {
        e.preventDefault();
        //console.log(this.refs.name.value);
       /* if(typeof(this.refs.name.value) === 'undefined') {
            console.log('not null')
        } else {
            console.log('null')
        }*/
        
        if(this.refs.name.value === '' ||  this.refs.age.value === '' || this.refs.group.value ==='' ) {
            this.setState({
                validationError: 'Please fill all the required field'
            });
        } else {
            this.setState({validationError: '',addStudent:{
                id:uuid.v4(),
                name: this.refs.name.value,
                age: this.refs.age.value,
                group: this.refs.group.value,
                sex: this.state.sex,
                
            }}, function(){
                this.props.newStudent(this.state.addStudent);
            })
            this.refs.name.value = '';
            this.refs.age.value = '';
            this.refs.group.value = '';
            
        }
    }
    constructor() {
        super();
        this.state = {
            addStudent: {},
            sex: '',
            validationError: ''
        }
    }
    setGender(event) {
        
        this.setState({
            sex: event.target.value
        });
       
      }
     
    render() {
        let defaultOptions = this.props.groups.map(group => {
            return (
                <option key={group} value={group}>{group} </option>
            )
        });
        
        return (
            <form className="form-horizontal"  onSubmit={this.handleSubmit.bind(this)}>
                <div className="bg-danger" >{this.state.validationError}</div>
                <div className="form-group">
                <label  className="col-md-1 control-label"> Name</label>
                <div className="col-md-2">
                    <input type="text"  className="form-control" id="name" ref="name"  placeholder="Name" />
                </div>
               
                <div className="col-md-2" id="group">
                   <select ref='group'>
                       {defaultOptions}
                   </select>
                </div>
               
                <div className="col-md-2">
                    
                    <input type="text" className="form-control" ref='age' id="age" placeholder="Age"/>
                </div>
                <div onChange={this.setGender.bind(this)} className="col-md-2">
                    <input type="radio" name="sex" value="Male" />Male
                    <input type="radio" name="sex" value="Female"/> Female
                </div>
                <button type="submit" className='btn btn-primary'>Submit</button>
                </div>
            </form>
        );
    }
}

export default Add;
