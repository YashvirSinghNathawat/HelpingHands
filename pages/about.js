import React from 'react'
import styled from 'styled-components'

const About = () => {
  return (
    <Wrapper>
    <AboutHeader>
    <AboutHeaderDiv>
            <h1 style={{
              color: "#383636",
              fontWeight: "500",
              fontSize: '30px'
            }}>Our Vision</h1>
            <h6 style={{
              marginTop: "1rem",
              color: "#4e4c4c",
              fontWeight: "normal",
              fontSize: '15px'
            }}>A society who not only survive but live, happy and healthy.</h6>
            </AboutHeaderDiv>
        <img src="/about1.jpg" style={{
          display: "block",
          width: "100%"
        }}/>
        
        </AboutHeader>
    <MissionSection>
        <H1 >Our Mission</H1>
        <Hr />
        <MissionSectionDiv>
          <Product>
          <ImgBox> <img src="/about2.png" style={{
            display: "block",
            width: '80%',
            margin: '10px auto 0'
          }}/>
                    <h3 style={{
                      marginTop: '1rem'
                    }}>Build a community</h3>
                </ImgBox>
                <div class="specifies">
                    <Hr />
                </div>
          </Product>
                
            <Product>
            <ImgBox> <img src="/about2.png"  style={{
            display: "block",
            width: '80%',
            margin: '10px auto 0'
          }}/>
                    <h3 style={{
                      marginTop: '1rem'
                    }}>Raise awareness</h3>
                    </ImgBox>
                <div class="specifies">
                    <Hr style={{
                      height: "3px", 
                      color: "rgb(229,40,106)",
                       width: "20%",
                        margin: "5px auto"
                      }} />
                </div>
            </Product>
            
                <Product>
                <ImgBox>
                    <img src="/about2.png"  style={{
            display: "block",
            width: '80%',
            margin: '10px auto 0'
          }}/>
                    <h3 style={{
                      marginTop: '1rem'
                    }}>Support</h3>
                    </ImgBox>
                <div class="specifies">
                    <Hr />
                </div>
                </Product>
            </MissionSectionDiv>
      </MissionSection>
    <section id="about-us-main">
        <H1>Who We Are</H1>
        <Hr />
        <p style={{
          textAlign: 'left'
        }}>Helping Hand is an online platform that allows individuals, organizations, and non-profits to receive donations from the public. The platform provides a user-friendly interface that makes it easy for donors to find causes they care about and make a donation using a secure payment system. The platform can also provide tools and resources to help non-profits and organizations raise awareness about their causes and connect with potential donors.</p>
    </section>

    <section id="how-to-help">
        <h1>How you can help</h1>
        <div id="how-to-help-main">
            <div class="help-div">
                <div class="help-img">
                    <img src="/about3.png" />
                </div>
                <h3>Campaign</h3>
                <p>Help us create a society that is built for all children. Together we will listen to young people,
                    give them a voice, and campaign for the change they need.</p>
            </div>
            <div class="help-div">
                <div class="help-img">
                    <img src="/about4.png" />
                </div>
                <h3>Donate</h3>
                <p>Your gift will contribute to our vital work with children across the country, giving young people
                    hope, and a reason to believe in a brighter future.</p>
            </div>
            <div class="help-div">
                <div class="help-img">
                    <img src="/about3.png" />
                </div>
                <h3>Fund Raising</h3>
                <p>Baking, singing or running, however you choose to raise money, it all helps us to be there for young
                    people.</p>
            </div>
            <div class="help-div">
                <div class="help-img">
                    <img src="/about4.png" />
                </div>
                <h3>Volunteer</h3>
                <p>Either behind a till or mentoring a child in our services, as a volunteer you can make a huge
                    difference to your community and the young people in it.</p>
            </div>
        </div>
    </section>
    <section id="team-main">
        <h1>Our Team</h1>
        <div id="team">
            <div class="team-member">
                <img src="/about6.png" />
                <h4>Yashvir Singh Nathawat</h4>
                <ul >
                <li ><a><img src="/about7.png" /></a></li>
                <li><a><img src="/about8.png" /></a></li>
                <li><a><img src="/about9.png" /></a></li>
                </ul>
            </div>
            <div class="team-member">
                <img src="/about6.png" />
                <h4>Vinay Bansal</h4>
                <ul>
                    <li><a><img src="/about7.png" /></a></li>
                    <li><a><img src="/about8.png" /></a></li>
                    <li><a><img src="/about9.png" /></a></li>
                </ul>
            </div>
            <div class="team-member">
                <img src="/about6.png" />
                <h4>Vinay Raj</h4>
                <ul>
                    <li><a><img src="/about7.png" /></a></li>
                    <li><a><img src="/about8.png" /></a></li>
                    <li><a><img src="/about9.png" /></a></li>
                </ul>
            </div>
        </div>

    </section>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  box-sizing: border-box;
  min-width: 100%;
  height: 100%;
  font-family: Verdana, Arial, Helvetica, sans-serif;
  text-align: center;
  margin: 0px;
  padding: 0px;
`
const AboutHeader = styled.section`
  text-align: center;
  margin-top: 2rem;
  position: relative;
`
const AboutHeaderDiv = styled.section`
  text-align: center;
  width: 100%;
  /* position: absolute; */
`

const MissionSection = styled.section`
  text-align: center;
    margin-top: 5rem;
`
const MissionSectionDiv = styled.div`
  text-align: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 2rem;
`

const Product = styled.div`
  border-bottom: 6px solid rgb(33,183,184);
  margin: 1rem;
    transform: translate(0, 0);
    width: 220px;
    height: 240px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, .2);
    border-radius: 5px;
    background: #ffffff;
    overflow: hidden;
`

const ImgBox = styled.div`
height: 100%;
box-sizing: border-box
`
const Hr = styled.hr`
  color: rgb(221,3,3);
  height: 3px;
  width: 12%;
  margin: auto;
`

const H1 = styled.h1`
  font-weight: normal;
  color: black
`

export default About