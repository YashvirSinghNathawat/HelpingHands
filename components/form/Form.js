import React from 'react'
import styled from 'styled-components'
import FormLeftWrapper from './Module/FormLeftWrapper'
import FormRightWrapper from './Module/FormRightWrapper'

const Form = () => {
  return (
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