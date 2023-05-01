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
      <div class="row primary">
        <div class="column about">
          <h3 class="h3Tag">Connect</h3>
          <div className="location">
          <PlaceIcon /> 
          <div class="text">Shop No. 196, Vaishali Nagar, Near T Mall, Jaipur, Rajasthan</div>
          </div>
          <div class="social">
            <FacebookIcon />
            <TwitterIcon />
            <LinkedInIcon />
            <InstagramIcon />
          </div>
        </div>

        <div class="column link">
          <h3 class="h3Tag">Links</h3>
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

        <div class="column Newsletter">
          <h3 class="h3Tag">Newsletter</h3>
          <div className="emailbox">
            <input
              class="email"
              type="email"
              placeholder="Your email id here"
            />
            <button class="subscribe">Subscribe</button>
          </div>
        </div>
      </div>
      <div class="row copyright">
        <div class="footer-menu">
          <a href="">Home</a>
          <a href="">F.A.Q</a>
          <a href="">Cookies Policy</a>
          <a href="">Terms Of Service</a>
          <a href="">Support</a>
        </div>
        <p>Copyright &copy; 2023</p>
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
