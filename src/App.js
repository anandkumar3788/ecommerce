import logo from './logo.svg';
import './App.css';

import { useState } from "react";
function App() {
    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    };

    return (
      <div className="Home">
        <div class="header">
                <div class="container">
                    <div class="navbar">
                        <div class="logo">
                           <h1 font-size="125px"> Demo Ecommerce </h1>
                           <div>website</div>
                        </div>
                        <nav>
                            <ul id="MenuItems" className={isActive ? 'show': 'hide'} >
                              <input type="search" id="form1" placeholder='Search Here' class="form-control" />&nbsp;
                           <button><label class="form-label" for="form1" style={{marginLeft: "0px"}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></label></button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-filter-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
  <path d="M6 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
</svg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Products</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">Account</a></li>
                            </ul>
                        </nav>
                        <a href="#"><img src="assets/images/cart.png" width="30px" height="30px" /></a>
                        <img src="assets/images/menu.png" class="menu-icon" id="menutoggle" onClick={toggleClass}  />
                    </div>
                    <div class="row">
                        <div class="col-2">
                            <h1>Give Your Workout <br /> A New Style!</h1>
                            <p>Success isn't always about greatness. It;s about consistency. Consistent <br /> hard work gains
                                success. Greatness will come.</p>
                            <a href="" class="btn">Explore Now &#8594;</a>
                        </div>
                        <div class="col-2">
                            <img src="assets/images/image1.png" />
                        </div>
                    </div>
                </div>
            </div>
            
          
            
            <div class="categories">
                <div class="small-container">
                    <div class="row">
                        <div class="col-3">
                            <img src="assets/images/category-1.jpg" />
                        </div>
                        <div class="col-3">
                            <img src="assets/images/category-2.jpg" />
                        </div>
                        <div class="col-3">
                            <img src="assets/images/category-3.jpg" />
                        </div>
                    </div>
                </div>
            </div>
            
         
            
            <div class="small-container">
                <h2 class="title">Featured Products</h2>
                <div class="row">
                    <div class="col-4">
                        <a href="#"><img src="assets/images/product-1.jpg" /></a>
                        <h4>Red Printed T-Shirt</h4>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                        </div>
                        <p>INR : 350.00 Rs</p>
                    </div>
                    <div class="col-4">
                        <img src="assets/images/product-2.jpg" />
                        <h4>HRX Mens Shoes</h4>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                        </div>
                        <p>INR : 1050.00 Rs</p>
                    </div>
                    <div class="col-4">
                        <img src="assets/images/product-3.jpg" />
                        <h4>Men's Track Pant</h4>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                        </div>
                        <p>INR : 450.00 Rs</p>
                    </div>
                    <div class="col-4">
                        <img src="assets/images/product-4.jpg" />
                        <h4>Men's Black T-Shirt</h4>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                        </div>
                        <p>INR : 350.00 Rs</p>
                    </div>
                </div>
                <h2 class="title">Latest Products</h2>
                <div class="row">
                    <div class="col-4">
                        <img src="assets/images/product-5.jpg" />
                        <h4>Men's Casual Shoes</h4>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                        </div>
                        <p>INR : 1500.00 Rs</p>
                    </div>
                    <div class="col-4">
                        <img src="assets/images/product-6.jpg" />
                        <h4>Men's Black T-Shirt</h4>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                        </div>
                        <p>INR : 350.00 Rs</p>
                    </div>
                    <div class="col-4">
                        <img src="assets/images/product-7.jpg" />
                        <h4>Men's Shocks</h4>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                        </div>
                        <p>INR : 250.00 Rs</p>
                    </div>
                    <div class="col-4">
                        <img src="assets/images/product-8.jpg" />
                        <h4>Men's Watch</h4>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                        </div>
                        <p>INR : 500.00 Rs</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-4">
                        <img src="assets/images/product-9.jpg" />
                        <h4>Men's Watch</h4>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                        </div>
                        <p>INR : 500.00 Rs</p>
                    </div>
                    <div class="col-4">
                        <img src="assets/images/product-10.jpg" />
                        <h4>Sparx Shoes For Men's</h4>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                        </div>
                        <p>INR : 850.00 Rs</p>
                    </div>
                    <div class="col-4">
                        <img src="assets/images/product-11.jpg" />
                        <h4>Casual Shoes For Men's</h4>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                        </div>
                        <p>INR : 650.00 Rs</p>
                    </div>
                    <div class="col-4">
                        <img src="assets/images/product-12.jpg" />
                        <h4>Men's Track Pant</h4>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                        </div>
                        <p>INR : 450.00 Rs</p>
                    </div>
                </div>
            </div>
            
           
            <div class="offer">
                <div class="small-container">
                    <div class="row">
                        <div class="col-2">
                            <img src="assets/images/exclusive.png" class="offer-img" />
                        </div>
                        <div class="col-2">
                            <p>Exclusively Available on RedStore</p>
                            <h1>Smart Band 4</h1>
                            <small>The Mi Smart Band 4 fearures a 39.9%larger (than Mi Band 3) AMOLED color full-touch display
                                with adjustable brightness, so everything is clear as can be.<br /></small>
                            <a href="products.html" class="btn">Buy Now &#8594;</a>
                        </div>
                    </div>
                </div>
            </div>
            
          
            <div class="testimonial">
                <div class="small-container">
                    <div class="row">
                        <div class="col-3">
                            <i class="fa fa-quote-left"></i>
                            <p>This item was good and worthable price.</p>
                            <div class="rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </div>
                            <img src="assets/images/user-1.png" />
                            <h3>Bhargavi</h3>
                        </div>
                        <div class="col-3">
                            <i class="fa fa-quote-left"></i>
                            <p>This item was excellent and good for me.</p>
                            <div class="rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </div>
                            <img src="assets/images/user-2.png" />
                            <h3>Anand</h3>
                        </div>
                        <div class="col-3">
                            <i class="fa fa-quote-left"></i>
                            <p>This products was good and worthable price.</p>
                            <div class="rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </div>
                            <img src="assets/images/user-3.png" />
                            <h3>Kumar</h3>
                        </div>
                    </div>
                </div>
            </div>
            
           
            
            <div class="brands">
                <div class="small-container">
                    <div class="row">
                        <div class="col-5">
                            <img src="assets/images/logo-godrej.png" />
                        </div>
                        <div class="col-5">
                            <img src="assets/images/logo-oppo.png" />
                        </div>
                        <div class="col-5">
                            <img src="assets/images/logo-coca-cola.png" />
                        </div>
                        <div class="col-5">
                            <img src="assets/images/logo-paypal.png" />
                        </div>
                        <div class="col-5">
                            <img src="assets/images/logo-philips.png" />
                        </div>
                    </div>
                </div>
            </div>
            
           
            <div class="footer">
                <div class="container">
                    <div class="row">
                        <div class="footer-col-1">
                            <h3>Download Our App</h3>
                            <p>Download App for Android and ios mobile phone.</p>
                            <div class="app-logo">
                                <img src="assets/images/play-store.png" />
                                <img src="assets/images/app-store.png" />
                            </div>
                        </div>
                        <div class="footer-col-2">
                        <h1 font-size="125px"> Demo Ecommerce </h1>
                           <div>website</div><br></br>
                            <p>Our Purpose Is To Sustainably Make the Pleasure and Benefits of Sports Accessible to the Many.
                            </p>
                        </div>
                        <div class="footer-col-3">
                            <h3>Useful Links</h3>
                            <ul>
                                <li>Coupons</li>
                                <li>Blog Post</li>
                                <li>Return Policy</li>
                                <li>Join Affiliate</li>
                            </ul>
                        </div>
                        <div class="footer-col-4">
                            <h3>Follow Us</h3>
                            <ul>
                                <li>Facebook</li>
                                <li>Twitter</li>
                                <li>Instagram</li>
                                <li>Youtube</li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <p class="copyright">Copyright 2023 - Alla Atchuta Anand Kumar</p>
                </div>
            </div>
      </div>
    );
  }
  

export default App;
