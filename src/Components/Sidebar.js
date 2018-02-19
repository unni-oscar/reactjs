import React, { Component } from 'react';
class Sidebar extends Component {
    render(){
        return(
            <div className="col-sm-2 sidenav">
                <p><a href="#">Sidebar link 1</a></p>
                <p><a href="#">Sidebar link 2</a></p>
                <p><a href="#">Sidebar link 3</a></p>
                </div>
        
        );
    }
}
export default Sidebar;