import styled from "styled-components"
import Image from "next/image"
const HeaderLogo = () => {
  return (
    <Logo>
    <Image src="/myLogo.png" layout="fill" alt="HeaderLogo"/>
    </Logo>
  )
}

const Logo = styled.div`
  width: 15%;
  height: 60%;
  margin: 0;
  padding: 0;
  margin-left: 15vh;
  position: relative;
  border-radius: 1vh;
  border: solid 3px white;
`

export default HeaderLogo