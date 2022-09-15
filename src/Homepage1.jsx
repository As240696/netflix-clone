import React from 'react';
import "./Homepage1.css";
import {Link} from "react-router-dom";

function Homepage1() {
  return (
    <div>
        <div class="container-1">
            <img class="background-image" src={require("./Images/back.jpg")} alt="" />
            <img class="logo" src={require("./Images/logo.png")} alt="Netflix Logo" />
            <button class="button" type="button" name="button">Sign In</button>

            <div class="heading">
                <h1 class="heading-h1">Unlimited movies, TV shows and more.</h1>
                <h3 class="heading-h2">Watch anywhere. Cancel anytime.</h3>
                <p>Ready to watch? Enter your email to create or restart your membership.</p>
            </div>

            <div class="search-box">
                <input type="text" placeholder="Email address" />
                <button class="button-1" type="button" name="button"><Link style={{textDecoration: "none", color: "white"}} to="/explore">Get Started</Link></button>
            </div>
        </div>

        <div class="container-2">
            <div class="box">
                <div class="heading-2">
                    <h1>Enjoy on your TV.</h1>
                    <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                </div>
                <img class="part1-img" src={require("./Images/part1.png")} alt="part1" />
            </div>
        </div>

        <div class="container-3">
            <div class="box">
                <img class="part2-img" src={require("./Images/part2.jpg")} alt="part2" />
                <div class="heading-3">
                    <h1>Download your shows to watch offline.</h1>
                    <p>Save your favourites easily and always have something to watch.</p>
                </div>
            </div>
        </div>

        <div class="container-4">
            <div class="box">
                <div class="heading-4">
                    <h1>Watch everywhere.</h1>
                    <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                </div>
                <img class="part3-img" src={require("./Images/part3.png")} alt="part3" />
            </div>
        </div>

        <div class="container-5">
            <div class="box">
                <img class="part4-img" src={require("./Images/part4.png")} alt="part4" />
                <div class="heading-5">
                    <h1>Create profiles for children.</h1>
                    <p>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
                </div>
            </div>
        </div>

        <div class="container-6">
            <h5 class="footer">Questions? Call 000-800-040-1843</h5>
            <div class="box-2">
                <div class="one">
                    <ul class="a">
                        <li>FAQ</li>
                        <li>Investor Relations</li>
                        <li>Privacy</li>
                        <li>Speed Test</li>
                    </ul>
                </div>
                
                <div class="two">
                    <ul class="a">
                        <li>Help Centre</li>
                        <li>Jobs</li>
                        <li>Cookie Preferences</li>
                        <li>Legal Notices</li>
                    </ul>
                </div>
  
                <div class="three">
                    <ul class="a">
                        <li>Account</li>
                        <li>Ways to Watch</li>
                        <li>Corporate Information</li>
                        <li>Only on Netflix</li>
                    </ul>
                </div>

                <div class="four">
                    <ul class="a">
                        <li>Media Centre</li>
                        <li>Terms of Use</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Homepage1;