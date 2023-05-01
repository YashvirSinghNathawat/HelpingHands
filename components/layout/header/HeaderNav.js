import Link from 'next/link';
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import styled from 'styled-components'
import { App } from '../Layout';
import { Context } from './Clients';

const HeaderNav = () => {
  const router = useRouter();
  const ThemeToggler = useContext(App);
  const { user, setUser } = useContext(Context);
  return (
    <HeaderNavWrapper >
      <HeaderNavLinks onClick={()=> router.push('/')} themeColor = {ThemeToggler.theme =='light'?'black':'white'}>
        Home
      </HeaderNavLinks>
      <HeaderNavLinks onClick={()=> router.push('/about')} themeColor = {ThemeToggler.theme =='light'?'black':'white'}>
        About
      </HeaderNavLinks>
      <HeaderNavLinks  onClick={()=> router.push('/contactus')} themeColor = {ThemeToggler.theme =='light'?'black':'white'}>
        Contact Us
      </HeaderNavLinks>
      { user._id ?<>
      <HeaderNavLinks  onClick={()=> router.push('/seeCampaigns')} themeColor = {ThemeToggler.theme =='light'?'black':'white'}>
        Campaigns
      </HeaderNavLinks>
      <HeaderNavLinks  onClick={()=> router.push('/createCampaign')} themeColor = {ThemeToggler.theme =='light'?'black':'white'}>
        Create Campaign
      </HeaderNavLinks>
      <HeaderNavLinks  onClick={()=> router.push('/dashboard')} themeColor = {ThemeToggler.theme =='light'?'black':'white'}>
        Dashboard
      </HeaderNavLinks></>:<></>}
    </HeaderNavWrapper>
  )
}

const HeaderNavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* background-color: ${(props) => props.theme.bgDiv}; */
  padding: 2vh;
  gap: 2vw;
`
const HeaderNavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* gap: 1vh; */
  /* background-color: ${(props) => props.theme.bgSubDiv }; */
  white-space: nowrap;
  font-family: 'Roboto';
  border-radius: 10px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  font-size: small;
  color: ${(props) => props.themeColor};
  width:  100%;
  height: 30%;
  /* padding: 0.5vw; */
`



export default HeaderNav