import React from 'react'
import styled from 'styled-components'
import HeaderLogo from './HeaderLogo'
import HeaderNav from './HeaderNav'
import HeaderRight from './HeaderRight'
const Header = () => {
    return (
    <HeaderWrapper>
      <HeaderLogo />
      <HeaderNav />
      <HeaderRight />
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  width:100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export default Header