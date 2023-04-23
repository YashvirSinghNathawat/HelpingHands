import styled from "styled-components"
import Image from "next/image"

const detail = () => {
  return (
    <DetailWrapper>
        <LeftContainer>
            <ImageSection>
                <Image 
                    layout="fill"
                    src={"https://thumb1.shutterstock.com/image-photo/stock-photo-apple-450w-121357330.jpg"}
                />
            </ImageSection>
            <Text>
            My head is spinning. My legs feel numb like they do after getting off a roller coaster. Finally, after standing in the same spot for what feels like an eternity, my mind switches to what you could call flight mode. I sprint over to the giant vent and rip the grate off. I squeeze in the best I can and replace the grate, completely unconscious of what I’m doing.

            Tears are streaming down my face as I pull myself further and further back into the whirring metal box. The sound of gunshots echo in my ears. That moment from no longer than forty-five minutes ago plays on repeat in my head. Kids scurrying through the hallways with looks of terror on their faces. The moment when we all realized this was it. This was the end of our lives. Everything ended in the hallways of a shitty high school. 
            </Text>
        </LeftContainer>
        <RightContainer>
            <Title>Treatment for my Dogs Injury</Title>
            <DonateSection>
                <Input type="number" placeholder="Enter Amount to Donate" />
                <Donate>Donate</Donate>
            </DonateSection>
            <FundsData>
                <Funds>
                    <FundText>Required Amount</FundText>
                    <FundText>100 Matic</FundText>
                </Funds>
                <Funds>
                    <FundText>Received Amount</FundText>
                    <FundText>60 Matic</FundText>
                </Funds>
            </FundsData>
            <Donated>
                <LiveDonation>
                    <DonationTitle>Recent Donation</DonationTitle>
                    <Donation>
                        <DonationData>0xc2814...E25</DonationData>
                        <DonationData>100 Matic</DonationData>
                        <DonationData>3/13/2022 , 0:12:01 AM</DonationData>
                    </Donation>
                </LiveDonation>
                <MyDonation>
                    <DonationTitle>My Past Donation</DonationTitle>
                    <Donation>
                        <DonationData>0xg2914...E25</DonationData>
                        <DonationData>100 Matic</DonationData>
                        <DonationData>3/13/2022 , 9:12:01 PM</DonationData>
                    </Donation>
                </MyDonation>
            </Donated>
        </RightContainer>
    </DetailWrapper>
  )
}

const DetailWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    /* align-items: center; */
    gap: 5vh;
    padding: 10vh;
    /* width: 100%; */
`
const LeftContainer = styled.div`
    width: 35%;
`
const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 5vh;
    width: 50%;
    
`
const ImageSection = styled.div`
    width: 100%;
    position: relative;
    height: 35vh;
`
const Text = styled.p`
    font-family: "Roboto";
    font-size: large;
    color: ${(props)=>props.theme.color};
    display: flex;
    text-align: justify;
`
const Title = styled.h1`
    padding: 0;
    display: flex;
    justify-content: center;
    text-align: center;
    font-family: "poppins";
    font-size: x-large;
    color: ${(props)=>props.theme.color};
`
const DonateSection = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-top: 1vh;
`
const Input = styled.input`
    padding: 1vh 1.5vh;
    background-color: ${(props)=>props.theme.bgDiv};
    color: ${(props)=>props.theme.color};
    border: none;
    border-radius: 1vh;
    outline: none;
    font-size: large;
    width: 60%;
    height: 4vh;
`

const Donate = styled.button`
    padding: 1vh 1.5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #00b712;
    background-image: linear-gradient(180deg, #00b712 0%, #5aff15 80%);
    font-weight: bold;
    font-size: large;
    height: 6vh;
    cursor: pointer;
    color: white;
    border: none;
    border-radius: 1vh;
    width: 30%;
`

const FundsData = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 1vh;
`

const Funds = styled.div`
    width: 45%;
    background-color: ${(props)=>props.theme.bgDiv};
    padding: 0.8vh;
    border-radius: 1vh;
    outline: none;
    text-align: center;
`
const FundText = styled.p`
    margin: 0.2vh;
    padding: 0;
    font-family: "poppins";
    font-size: normal;
`
const Donated = styled.div`
    height: 28vh;
    margin-top: 1.5vh;
    background-color: ${(props)=>props.theme.bgDiv};
`
const LiveDonation = styled.div`
    height: 65%;
    overflow-y: auto;
`
const MyDonation = styled.div`
    height: 65%;
    overflow-y: auto;
`

const DonationTitle = styled.div`
    font-family: "Roboto";
    font-size: x-small;
    text-transform: uppercase;
    padding: 0.5vh;
    display: flex;
    justify-content: center;
    text-align: center;
    background-color: #4cd138;
`
const Donation = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 0.5vh;
    background-color: ${(props)=>props.theme.bgSubDiv};
    padding: 0.4vh 1vh;
`
const DonationData = styled.p`
    color: ${(props)=>props.theme.color};
    font-family: "Roboto";
    font-size: large;
    margin: 0;
    padding: 0;
`

export default detail