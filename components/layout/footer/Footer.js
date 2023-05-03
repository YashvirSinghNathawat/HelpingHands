import React, { useContext } from "react";
import styled from "styled-components";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PlaceIcon from '@mui/icons-material/Place';
import { App } from "../Layout";
const Footer = () => {
    const ThemeToggler = useContext(App);
  return (
    <FooterContainer >
      <div className="row primary">
        <div className="column about">
          <h3 className="h3Tag">Connect</h3>
          <div className="location">
          <PlaceIcon /> 
          <div className="text">Shop No. 196, Vaishali Nagar, Near T Mall, Jaipur, Rajasthan</div>
          </div>
          <div className="social">
            <FacebookIcon />
            <TwitterIcon />
            <LinkedInIcon />
            <InstagramIcon />
          </div>
        </div>

        <div className="column link">
          <h3 className="h3Tag">Links</h3>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#team">Team</a>
            </li>
            <li>
              <a href="#blogs">Blogs</a>
            </li>
            <li>
              <a href="#support">Support</a>
            </li>
          </ul>
        </div>

        <div className="column Newsletter">
          <h3 className="h3Tag">Newsletter</h3>
          <div className="emailbox">
            <input
              className="email"
              type="email"
              placeholder="Your email id here"
            />
            <button className="subscribe">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="row copyright">
        <div className="footer-menu">
          <a href="">Home</a>
          <a href="">F.A.Q</a>
          <a href="">Cookies Policy</a>
          <a href="">Terms Of Service</a>
          <a href="">Support</a>
        </div>
        <p>Copyright &copy; 2023 Helping Hands | All Rights Reserved</p>
      </div>
    </FooterContainer>
  );
};
const FooterContainer = styled.div`
  background-color: black;
  color: white;
  bottom: 0;
  width: 100vw;
  font-size: 16px;
  box-sizing: border-box;
  border: none;
  outline: none;
`;
export default Footer;
