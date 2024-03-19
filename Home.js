import React from 'react';
import './Home.css'
import { Link } from 'react-router-dom';
const Home = () => {
  return (
 <div>
<div class="hero-image">
  <div class="hero-text">
    <h1>Quality Management System</h1>
  </div>
  </div>
		<footer class="footer-distributed">
			<div class="footer-right">
				<a href="#"><i class="fa fa-facebook"></i></a>
				<a href="#"><i class="fa fa-twitter"></i></a>
				<a href="#"><i class="fa fa-linkedin"></i></a>
				<a href="#"><i class="fa fa-github"></i></a>
			</div>
      
			<div class="footer-left">
				<p class="footer-links">
					<a class="link-1" href="#">Home</a>
					<Link to="/about">About</Link>
					<Link to="/contact">Contact</Link>
					<Link to="/services">Services</Link>
				</p>
				<p>Company Name &copy; 2015</p>
			</div>
		</footer>
  </div>
  
  );
}

export default Home;
