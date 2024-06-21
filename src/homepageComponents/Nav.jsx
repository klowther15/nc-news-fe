import React from 'react';
import {Link} from 'react-router-dom';
const Nav = () => {

    return (
        <nav className="nav">
            <Link to="/">
            <button>Homepage</button>
            </Link>
            <Link to="/articles">
            <button>Articles</button>
            </Link>
            <Link to="/users">
            <button>Users</button>
            </Link>
        </nav>
    )
}

export default Nav;