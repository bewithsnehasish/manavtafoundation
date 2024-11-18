import React from 'react';
import { NavLink } from "react-router-dom";
import './MiddleBar.css';

const MiddleBar = () => {
    return (
        <section class="header">
        <div class="logo">
            <img src="logos.png" alt="Manavta Nursery Logo"/>
        </div>
        <div className="title-box"> 
    <div className="title">
        <h1 className="bold-title">MANAVTA NURSERY</h1> 
        <p className="animated-text">मिशन घर घर हरियाली से गरीब के घर खुशहाली</p> 
    </div>
</div>
        {/* <div class="buttons">
            <button class="get-started"> <a href="login..html">LOGIN</a> </button>
            <button  class="get-started"> <a href="register.html">REGISTER</a></button>
        </div> */}
    </section>
    );
}

export default MiddleBar;