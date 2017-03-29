import React from 'react';

class Header extends React.Component {


    render() {
        return (
            <div className="header">
                <div className="logo">JobUp</div>
                <nav className="menu">
                    <ul>
                        <li className="active"><a  href="#">Dashboard</a></li>
                        <li><a href="#">History</a></li>
                    </ul>
                </nav>
                <ul className="profile">
                    <li>
                        <a href="#">Profile</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Header