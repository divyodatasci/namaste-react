const User = (props) => {
    return(
        <div className="user-card">
            <h1>Name: {props.name} </h1>
            <h3>Location: {props.location}</h3>
            <h4>Contact: divyosmiley9</h4>
        </div>
    )
}

export default User;