import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <Link to='/home'>Home</Link>
            <Link to='/manage'>Manage Inventories</Link>
        </header>
    );
};

export default Header;