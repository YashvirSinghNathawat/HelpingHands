import styled from "styled-components"

const FormRightWrapper = () => {
  return (
    <FormRight>
      <FormInput>
        <FormRow>
          <RowFirstInput>
          <label>Required Amount</label>
           <Input type={'number'} placeholder="Enter required amount"></Input>
          </RowFirstInput>
          <RowSecondInput>
          <label>Choose Category</label>
           <Select>
            <option>Education</option>
            <option>Health</option>
            <option>Animal</option>
           </Select>
          </RowSecondInput>
        </FormRow>
      </FormInput>
      <FormInput>
        <label>Select Image</label>
        <Image type={'file'}  accept='image/*'>
        </Image>
      </FormInput>
      <Button >
          Upload Photo
        </Button>
      <Button>
        Start Campaign
      </Button>
    </FormRight>
  )
}

const FormRight = styled.div`
  width: 45%;
`
const FormInput = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'poppins';
  margin-top: 1vh;
`
const FormRow = styled.div`
  display: flex;
  justify-content:space-between;
  width:100% ;
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
const RowFirstInput = styled.div`
  display:flex ;
  flex-direction:column ;
  width:45% ;
`
const RowSecondInput = styled.div`
  display:flex ;
  flex-direction:column;
  width:45%;
`

const Select = styled.select`
  padding: 10%;
  margin-top: 0.5vh;
  color: ${(props)=>props.theme.color};
  font-size: large;
  border: none;
  border-radius: 1vh;
  outline: none;
  background-color: ${(props)=> props.theme.bgDiv};
  width: 100%;
`

const Image = styled.input`
  background-color:${(props) => props.theme.bgDiv} ;
  color:${(props) => props.theme.color} ;
  margin-top:4px;
  border:none ;
  border-radius:8px ;
  outline:none;
  font-size:large;
  width:100% ;
  &::-webkit-file-upload-button {
    padding: 15px ;
    background-color: ${(props) => props.theme.bgSubDiv} ;
    color: ${(props) => props.theme.color} ;
    outline:none ;
    border:none ;
    font-weight:bold ;
  }  
`
const Button = styled.button`
  width: 100%;
  margin-top: 3vh;
  color: white;
  background-color: #00b712;
  border: none;
  border-radius: 1vh;
  outline: none;
  padding: 1.5vh;
  display: flex;
  justify-content: center;
  background-image: linear-gradient(180deg, #00b712 0%, #5aff15 80%);
  font-weight: bold;
  font-size: large;
  cursor: pointer;

`
export default FormRightWrapper