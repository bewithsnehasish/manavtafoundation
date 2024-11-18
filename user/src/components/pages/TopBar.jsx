import React from 'react';
import './TopBar.css'; // Ensure you import the CSS file

const TopBar = () => {
  return (
    <header class="top-bar">
        <div class="social-links">
            <a href="https://www.facebook.com/yourprofile" target="_blank"><i class="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com/yourprofile" target="_blank"><i class="fab fa-twitter"></i></a>
            <a href="https://www.instagram.com/yourprofile" target="_blank"><i class="fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com/in/yourprofile" target="_blank"><i class="fab fa-linkedin-in"></i></a>
        </div>
        <div class="news-update-wrapper">
            <div class="news-update">⚡ News & Updates</div>
            <div class="new-products">New products arriving soon! Stay tuned!</div>
        </div>
        <div class="helpline">Helpline: +91-9918771888</div>

    </header>
  );
};

export default TopBar;
