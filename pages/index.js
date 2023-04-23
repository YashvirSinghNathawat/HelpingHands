import React from "react";
import styled from "styled-components";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import EventIcon from "@mui/icons-material/Event";
import PaidIcon from "@mui/icons-material/Paid";
import Image from "next/image";

const index = () => {
  return (
    <HomeWrapper>
      <FilterWrapper>
      <FilterAltIcon style={{fontSize:40}} />
        <Category>Health</Category>
        <Category>Education</Category>
        <Category>Animal</Category>
      </FilterWrapper>

      <CardsWrapper>
        <Card>
          <CardImg>
            <Image
              alt="Crowdfunding dapp"
              layout="fill"
              src="https://th.bing.com/th/id/R.e5b2c41a0ad4270f4f5e93c0dd179807?rik=%2fGTzWNp%2bgHG5bA&riu=http%3a%2f%2fwww.thebrandbite.com%2fwp-content%2fmedia%2f2015%2f07%2fapple-7.jpg&ehk=saAP6a9SQpJk7MWpy48N8xroyzdOU%2buuwArpCCHTKNE%3d&risl=&pid=ImgRaw&r=0"
            />
          </CardImg>
          <Title>Treatment for my Dog</Title>
          <CardData>
            <Text>
              Owner <AccountBoxIcon />
            </Text>
            <Text>0xc2o4r23nrnjwknr3j32nri23r32hir</Text>
          </CardData>
          <CardData>
            <Text>
              Amount
              <PaidIcon />
            </Text>
            <Text>100 Matic</Text>
          </CardData>
          <CardData>
            <Text>
              <EventIcon />
            </Text>
            <Text>2/2/2022 , 4:00:09 PM</Text>
          </CardData>
          <Button>Go to Campaign</Button>
        </Card>
      </CardsWrapper>
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  margin-top: 1.5vh;
`;
const Category = styled.div`
  padding: 10px 15px;
  background-color: ${(props) => props.theme.bgDiv};
  margin: 0px 15px;
  border-radius: 8px;
  font-family: "Poppins";
  font-weight: normal;
  cursor: pointer;
`;

const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  width: 80%;
  margin-top: 2vh;
`;
const Card = styled.div`
  width: 20%;
  height: 100%;
  border-radius: 1vh;
  padding: 1vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${(props) => props.theme.bgDiv};
  &:hover {
    transform: translateY(-10px);
    transition: transform 0.5s;
  }

  &:not(:hover) {
    transition: transform 0.5s;
  }
`;
const CardImg = styled.div`
  position: relative;
  height: 120px;
  width: 100%;
`;
const Title = styled.h2`
  font-family: "Roboto";
  font-size: 18px;
  margin: 2px 0px;
  background-color: ${(props) => props.theme.bgSubDiv};
  padding: 5px;
  cursor: pointer;
  font-weight: normal;
`;
const CardData = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2px 0px;
  background-color: ${(props) => props.theme.bgSubDiv};
  padding: 5px;
  cursor: pointer;
`;
const Text = styled.p`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  font-family: "Roboto";
  font-size: 18px;
  font-weight: bold;
`;
const Button = styled.button`
  padding: 8px;
  text-align: center;
  width: 100%;
  background-color: #00b712;
  background-image: linear-gradient(180deg, #00b712 0%, #5aff15 80%);
  border: none;
  cursor: pointer;
  font-family: "Roboto";
  text-transform: uppercase;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`;
export default index;
