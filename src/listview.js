import React from 'react'
import Users from './data'
import './listview.css';
import {Link} from 'react-router-dom'

const listing = Users.map(user => {
    return(
        <div className="container" key={user.id}>
        <Link className="link" to={"/singleview/" + user.id}>
        
        <img src={user.picture.thumbnail} alt="profile"/>
        <div className="name">{user.name.title} {user.name.first} {user.name.last}</div>
        
    
    </Link>
    </div>
    )
})

function Listview(props) {
        return (
            <div>
                <header className="myPeeps">My Peeps</header>
                {listing}
            </div>  
        )
    
}

export default Listview
