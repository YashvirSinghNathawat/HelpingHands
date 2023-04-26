import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import EventIcon from "@mui/icons-material/Event";
import PaidIcon from "@mui/icons-material/Paid";
import Image from "next/image";

import CampaignFactory from "../artifacts/contracts/Campaign.sol/CampaignFactory.json";
import Link from "next/link";
import { ethers } from "ethers";
require("dotenv").config({ path: "./.env.local" });
const Dashboard = () => {
  const [campaignsData,setCampaignsData] = useState([]);
  useEffect(() => {
    const Request = async () => {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const Web3provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = Web3provider.getSigner();
      const Address = await signer.getAddress();

      const provider = new ethers.providers.JsonRpcProvider(
        process.env.NEXT_PUBLIC_RPC_URL
      );
  
      const contract = new ethers.Contract(
        process.env.NEXT_PUBLIC_ADDRESS,
        CampaignFactory.abi,
        provider
      );
  
      const getAllCampaigns = contract.filters.campaignCreated(null, null, Address);
      const AllCampaigns = await contract.queryFilter(getAllCampaigns);
      const AllData = AllCampaigns.map((e) => {
      return {
        title: e.args.title,
        image: e.args.imgURI,
        owner: e.args.owner,
        timeStamp: parseInt(e.args.timestamp),
        amount: ethers.utils.formatEther(e.args.requiredAmount),
        address: e.args.campaignAddress
      }
      })  
      setCampaignsData(AllData)
    }
    Request();
  }, [])
  return (
    <HomeWrapper>
      <CardsWrapper>
        {campaignsData.map((e) => {
          return (
            <Card>
              <CardImg>
                <Image
                  alt="Crowdfunding dapp"
                  layout="fill"
                  src= {e.image}
                />
              </CardImg>
              <Title>{e.title}</Title>
              <CardData>
                <Text>
                  Owner <AccountBoxIcon />
                </Text>
                <Text>{e.owner.slice(0,6)}...{e.owner.slice(39)}</Text>
              </CardData>
              <CardData>
                <Text>
                  Amount
                  <PaidIcon />
                </Text>
                <Text>{e.requiredAmount} Matic</Text>
              </CardData>
              <CardData>
                <Text>
                  <EventIcon />
                </Text>
                <Text>{new Date(e.timeStamp*1000).toTimeString()}</Text>
              </CardData>
              <Link passHref href={'/'+e.address}>
              <Button>Go to Campaign</Button>
              </Link>
              
            </Card>
          );
        })}
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


const CardsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 3vw;
  width: 80%;
  margin-top: 2vh;
  flex-wrap: wrap;
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
export default Dashboard;
