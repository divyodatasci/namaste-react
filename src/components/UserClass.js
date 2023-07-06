import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            count2: 1,
        }
        console.log(`${this.props.name}Child Constructor`);
    }
    componentDidMount() {
        console.log(`${this.props.name}Child Component Did Mount`);
    }

    render() {
        console.log(`${this.props.name}Child Render`);
        const { name, location} = this.props;
        const {count, count2} = this.state;

        return (
            <div className="user-card">
                <h1> Count = {count} </h1>
                <button onClick = {() => {
                    this.setState({count: count+1,})
                }}> Click </button>
                <h2>Name: {name}</h2>
                <h3> Location: {location} </h3>
                <h4> Contact: @divyosmiley9</h4>
            </div>
        )
    }
}

export default UserClass;