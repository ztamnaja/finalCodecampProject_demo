import React, { Component } from "react";
import "./home.css";

export default function Footer() {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <h3>
          <span>CarReservation</span>System
        </h3>

        <p className="footer-links">
          <a href="#">Home</a>·<a href="#">Reservation</a>·<a href="#">Cars</a>·
          <a href="#">Services</a>·<a href="#">Locations</a>·
          <a href="#">Contact</a>
        </p>

        <p className="footer-company-name">zTamnaja &copy; 2020</p>
      </div>

      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker"></i>
          <p>
            <span>108 Sanpatong Street</span> Chiang Mai, Thailand
          </p>
        </div>

        <div>
          <i className="fa fa-phone"></i>
          <p>091 851 7034</p>
        </div>

        <div>
          <i className="fa fa-envelope"></i>
          <p>
            <a href="mailto:support@company.com">suchada_manowon@hotmail.com</a>
          </p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>About the company</span>
          Car reservation system web application project, for learning about
          fullstack javascript.
        </p>

        <div className="footer-icons">
          <a target="_blank" href="https://www.facebook.com/">
            <i className="fa fa-facebook"></i>
          </a>
          <a target="_blank" href="https://twitter.com/">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fa fa-linkedin"></i>
          </a>
          <a
            target="_blank"
            href="https://github.com/ztamnaja/finalCodecampProject_demo"
          >
            <i className="fa fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
