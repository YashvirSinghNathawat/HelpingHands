import React, { useContext } from 'react'
import LightModeIcon from '@mui/icons-material/LightMode';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import styled from 'styled-components';
import {App} from '../Layout';
import Wallet from './Wallet';



const HeaderRight = () => {
    const ThemeToggler = useContext(App);
  return (
    <HeaderRightWrapper>
        <Wallet />
        <ThemeToggle>
            {ThemeToggler.theme === 'light' ? <LightModeIcon onClick={ThemeToggler.changeTheme}/>
            : <ModeNightIcon onClick={ThemeToggler.changeTheme}></ModeNightIcon>} 
            
        </ThemeToggle>
    </HeaderRightWrapper>
  )
}

const HeaderRightWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5vh;
    height: 50%;
    padding: 2vh;
`
const ThemeToggle = styled.div`
    background-color: ${(props)=> props.theme.bgDiv};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 5px;
    width: 5vh;
    border-radius: 2vh;
    cursor: pointer;
`
export default HeaderRight