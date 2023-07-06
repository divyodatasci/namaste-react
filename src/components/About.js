import User from "./User";
import UserClass from "./UserClass";
import { Component } from 'react';

class About extends Component {
    constructor(props){
        super(props);
        console.log('Parent Constructor');
    }

    componentDidMount(){
        console.log('Parent Component did mount');
    }

    render(){
        console.log('Parent Render');
        return (
        <div className="about-us">
            <h1>About Us Page</h1>
            <User name= 'DJ' location= 'London' />
            <UserClass name= 'First' location ='Norwich'/>
            <UserClass name='Second' />
        </div>);
    }
}


export default About;