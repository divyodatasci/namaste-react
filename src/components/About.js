import User from "./User";
import UserClass from "./UserClass";
import { Component } from 'react';
import UserContext from "../utils/UserContext";

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
            {/* <UserClass name= 'First' location ='Norwich'/>
            <UserClass name='Second' /> */}
            <div>
                <UserContext.Consumer>
                    {(data) => {
                        console.log(data.loggedInUser);
                        return <h1> {data.loggedInUser} </h1>
                    }}
                </UserContext.Consumer>
            </div>
        </div>);
    }
}


export default About;