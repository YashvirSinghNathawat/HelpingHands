import React from 'react'
import styled from 'styled-components'

const FormLeftWrapper = () => {
  return (
    <FormLeft>
      <FormInput>
        <label>Campaign title</label>
        <Input placeholder='Campaign Title'></Input>
      </FormInput>
      <FormInput>
        <label>Story</label>
        <TextArea placeholder='Describe your Story'></TextArea>
      </FormInput>
    </FormLeft>
  )
}

const FormLeft = styled.div`
  width: 48%;

`
const FormInput = styled.div`
  font-family: 'poppins';
  display: flex;
  flex-direction: column;
  margin-top: 1vh;
`
const Input = styled.input`
  padding: 1.8vh;
  margin-top: 0.5vh;
  color: ${(props)=>props.theme.color};
  font-size: large;
  border: none;
  border-radius: 1vh;
  outline: none;
  background-color: ${(props)=> props.theme.bgDiv};
  width: 100%;
`

const TextArea = styled.textarea`
  padding: 1.8vh;
  margin-top: 0.5vh;
  min-height: 30vh;
  color: ${(props)=>props.theme.color};
  font-size: large;
  border: none;
  border-radius: 1vh;
  outline: none;
  background-color: ${(props)=> props.theme.bgDiv};
  max-width: 100%;
  min-width: 100%;
  overflow-x: hidden;
  
`
export default FormLeftWrapper