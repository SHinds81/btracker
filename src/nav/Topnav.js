import '../index.css';
import './Topnav.css';
import React from 'react';

function Topnav(){
    return(
        <div class="flex-container">
            <div>Home</div>
            <div>Statistics</div>
            <div>My Bugs</div>
            <div></div>
            <div>Account</div>
            <div>Login</div>
        </div>
    )
}

export default Topnav;