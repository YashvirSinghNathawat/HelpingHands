import React, { createContext, useState } from 'react'
import styled from 'styled-components'
import FormLeftWrapper from './Module/FormLeftWrapper'
import FormRightWrapper from './Module/FormRightWrapper'

const FormState = createContext();

const Form = () => {
    const [form,setForm] = useState({
        campaignTitle: "",
        story: "",
        requiredAmount: "",
        category:"Education"
    });

    const [image,setImage] = useState(null);
    const ImageHandler = (e) => {
        setImage(e.target.files[0]);
    }
    const formHandler = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }
  return (
    <FormState.Provider value={{form,setForm,image,setImage,ImageHandler,formHandler}} >
    <FormWrapper>
        <FormMain>
            <FormTitle>
                Create Campaign
            </FormTitle>
            <FormInputsWrapper>
                <FormLeftWrapper />
                <FormRightWrapper/>
            </FormInputsWrapper>
        </FormMain>
    </FormWrapper>
    </FormState.Provider>
  )
}

const FormWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

const FormMain = styled.div`
    width: 80%;
`

const FormTitle = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: capitalize;
    font-weight: bold;
    color: ${(props)=>props.theme.color};
    font-size: 40px;
    font-family: 'poppins';
    margin-top: 5vh;
`

const FormInputsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 3vh;

`
export default Form
export {FormState};