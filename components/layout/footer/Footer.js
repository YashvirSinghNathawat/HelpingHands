import React, { useContext } from "react";
import styled from "styled-components";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PlaceIcon from '@mui/icons-material/Place';
import { App } from "../Layout";
import Link from "next/link";
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
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">Team</Link>
            </li>
            <li>
              <Link href="#blogs">Blogs</Link>
            </li>
            <li>
              <Link href="/contactus">Support</Link>
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
          <Link href="/">Home</Link>
          <Link href="">F.A.Q</Link>
          <Link href="">Cookies Policy</Link>
          <Link href="">Terms Of Service</Link>
          <Link href="">Support</Link>
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
