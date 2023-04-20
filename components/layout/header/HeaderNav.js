import Link from 'next/link';
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import styled from 'styled-components'
import { App } from '../Layout';

const HeaderNav = () => {
  const Router = useRouter();
  const ThemeToggler = useContext(App);
  return (
    <HeaderNavWrapper >
      <Link passHref href={'/'}><HeaderNavLinks active={Router.pathname == "/" ? true : false} themeColor = {ThemeToggler.theme =='light'?'black':'white'}>
        Campaigns
      </HeaderNavLinks></Link>
      <Link passHref href={'/createCampaign'}><HeaderNavLinks active={Router.pathname == "/createCampaign" ? true : false} themeColor = {ThemeToggler.theme =='light'?'black':'white'}>
        Create Campaign
      </HeaderNavLinks></Link>
      <Link passHref href={'/dashboard'}><HeaderNavLinks active={Router.pathname == "/dashboard" ? true : false}  themeColor = {ThemeToggler.theme =='light'?'black':'white'}>
        Dashboard
      </HeaderNavLinks></Link>
    </HeaderNavWrapper>
  )
}

const HeaderNavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.bgDiv};
  padding: 6px;
  height: 50%;
  width: 35%;
  border-radius: 10px;
  
`
const HeaderNavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.bgSubDiv };
  height: 100%;
  font-family: 'Roboto';
  margin: 5px;
  border-radius: 10px;
  padding: 0 5px 0 5px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  font-size: small;
  color: ${(props) => props.themeColor};
  width: 100%;
`



export default HeaderNav