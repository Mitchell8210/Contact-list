import React from 'react'
import Users from './data.json'
import {Link} from 'react-router-dom'

function Singleview(props) {
    const id = props.match.params.id;
    const user = Users.find(e => e.id === Number(id))
    
        return (
            
            <div className="mainContainer">
                <Link className="back" to="/">Go Back</Link>
                 <div className="image-header" id={user.id}>
            <img className="image" src={user.picture.medium} alt="profile"/>
            </div>
            <div className="info">
            <div className="singleName">Name: {user.name.title} {user.name.first} {user.name.last}</div>
            <div className="email">Email: {user.email}</div>
            <div className="phone">Phone#: {user.phone}</div>
            <div className="location">Location: {user.location.city}, {user.location.state}</div>
        </div>       
            </div>
        )
    
}

export default Singleview
