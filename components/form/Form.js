import { ethers } from "ethers";
import React, { createContext, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { toast, ToastContainer } from "react-toastify";
import styled from "styled-components";
import FormLeftWrapper from "./Module/FormLeftWrapper";
import FormRightWrapper from "./Module/FormRightWrapper";
const FormState = createContext();
import CampaignFactory from "../../artifacts/contracts/Campaign.sol/CampaignFactory.json"
import Link from "next/link";
import { useRouter } from "next/router";



const Form = () => {
  const [form, setForm] = useState({
    campaignTitle: "",
    story: "",
    requiredAmount: "",
    category: "Education",
  });

  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState("");

  const [image, setImage] = useState(null);
  const [imageUrl,setImageUrl] = useState("");
  const [storyUrl, setStoryUrl] = useState();
  const [uploaded, setUploaded] = useState(false);
  const [imageDetail, setImageDetail] = useState();

  const startCampaign = async (e) => {
    e.preventDefault();  //Form does not reload as it will lost all data
    const provider = await new ethers.providers.Web3Provider(window.ethereum, "any");
    const signer = provider.getSigner();
    if(form.campaignTitle === ""){
        toast.warn("Title Field is Empty");
    } else if(form.story === ""){
        toast.warn("Story Field is Empty");
    } else if(form.requiredAmount === ""){
        toast.warn("Required Amount Field is Empty");
    } else if(uploaded == false){
        toast.warn("Please Upload Image of Campaign");
    } else {
        setLoading(true);
    }

    const contract = new ethers.Contract(
        process.env.NEXT_PUBLIC_ADDRESS,
        CampaignFactory.abi,
        signer
    );
    const campaignAmount = ethers.utils.parseEther(form.requiredAmount);

    const campaignData = await contract.createCampaign(
        form.campaignTitle,
        campaignAmount,
        imageUrl,
        form.category,
        form.story
    );

    await campaignData.wait();
    setAddress(campaignData.to);
    
  }
  const router = useRouter();
  const Imag eHandler = (e) => {
    setImage(e.target.files[0]);
  };
  const formHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <FormState.Provider
      value={{
        form,
        setForm,
        image,
        setImage,
        ImageHandler,
        formHandler,
        storyUrl,
        imageDetail,
        uploaded,
        setUploaded,
        setImageDetail,
        setStoryUrl,
        setLoading,
        setAddress,
        startCampaign,
        setImageUrl
      }}
    >
      <FormWrapper>
        <FormMain>
          {loading == true ? (
            address ===""?
            <Spinner>
            <TailSpin height={60} />
            </Spinner>:
            <Address>
                <h1>Campaign Started Successfully</h1>
                <h1> {address}</h1>
                <Button  onClick={()=> router.push('/')}>
                    Go To Campaign
                </Button>
            </Address>
          ) : (
            <FormContainer>
                <FormTitle>Create Campaign</FormTitle>
            <FormInputsWrapper>
                
              <FormLeftWrapper />
              <FormRightWrapper />
            </FormInputsWrapper>
            </FormContainer>
          )}
        </FormMain>
      </FormWrapper>
    </FormState.Provider>
  );
};

const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const FormMain = styled.div`
  width: 80%;
`;

const FormTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  font-weight: bold;
  color: ${(props) => props.theme.color};
  font-size: 40px;
  font-family: "poppins";
  margin-top: 5vh;
`;

const FormInputsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3vh;
`;

const Address = styled.div`
    background-color: ${(props)=> props.theme.bgSubDiv};
    height: 80vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 1vh;
`

const Spinner = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%;
    height: 10%;
    padding: 1.5vh;
    color: white;
    background-color: #00b712;
    background-image: linear-gradient(180deg, #00b712 0%, #5aff15 80%);
    border: none;
    margin-top: 3vh;
    cursor: pointer;
    font-weight: bold;
    font-size: large;
    border-radius: 1vh;
`
const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export default Form;
export { FormState };
