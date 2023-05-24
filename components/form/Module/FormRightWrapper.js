import { useContext, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { toast } from "react-toastify";
import styled from "styled-components";
import { FormState } from "../Form";

require("dotenv").config({ path: "./.env.local" });

const FormRightWrapper = () => {
  const Handler = useContext(FormState);
  const [uploadLoading, setUploadLoading] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const uploadFiles = async (e) => {
    e.preventDefault();
    setUploadLoading(true);
    if (Handler.image !== null) {
      try {
        const formData = new FormData();
        const fileInput = Handler.image;
        formData.append("file", fileInput);
        formData.append("upload_preset", "helping-hand");
        const data = await fetch(
          `https://api.cloudinary.com/v1_1/dlcibzu5m/image/upload`,
          {
            method: "POST",
            body: formData,
          }
        ).then((r) => r.json());
        console.log("data", data.secure_url);
        Handler.setImageUrl(data.secure_url);
      } catch (error) {
        toast.warn(`Error Uploading Image`);
      }
    }

    setUploadLoading(false);
    setUploaded(true);
    Handler.setUploaded(true);
    toast.success("Files Uploaded Sucessfully")
  };
  return (
    <FormRight>
      <FormInput>
        <FormRow>
          <RowFirstInput>
            <label>Required Amount</label>
            <Input
              type={"number"}
              onChange={Handler.formHandler}
              value={Handler.form.requiredAmount}
              placeholder="Enter required amount"
              name="requiredAmount"
            ></Input>
          </RowFirstInput>
          <RowSecondInput>
            <label>Choose Category</label>
            <Select
              onChange={Handler.formHandler}
              value={Handler.form.category}
              name="category"
            >
              <option>Education</option>
              <option>Health</option>
              <option>Animal</option>
            </Select>
          </RowSecondInput>
        </FormRow>
      </FormInput>
      <FormInput>
        <label>Select Image</label>
        <Image
          type={"file"}
          alt={"Image"}
          onChange={Handler.ImageHandler}
          name="image"
          accept="image/*"
        ></Image>
      </FormInput>
      {uploadLoading == true ? (
        <Button>
          <TailSpin color="#fff" height={20} />
        </Button>
      ) : uploaded == false ? (
        <Button onClick={uploadFiles}>Upload Images</Button>
      ) : (
        <Button style={{ cursor: "no-drop" }}>
          Files uploaded Sucessfully
        </Button>
      )}
      <Button onClick={Handler.startCampaign}>Start Campaign</Button>
    </FormRight>
  );
};

const FormRight = styled.div`
  width: 45%;
`;
const FormInput = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "poppins";
  margin-top: 1vh;
`;
const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const Input = styled.input`
  padding: 1.8vh;
  margin-top: 0.5vh;
  color: ${(props) => props.theme.color};
  font-size: large;
  border: none;
  border-radius: 1vh;
  outline: none;
  background-color: ${(props) => props.theme.bgDiv};
  width: 100%;
`;
const RowFirstInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
`;
const RowSecondInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
`;

const Select = styled.select`
  padding: 10%;
  margin-top: 0.5vh;
  color: ${(props) => props.theme.color};
  font-size: large;
  border: none;
  border-radius: 1vh;
  outline: none;
  background-color: ${(props) => props.theme.bgDiv};
  width: 100%;
`;

const Image = styled.input`
  background-color: ${(props) => props.theme.bgDiv};
  color: ${(props) => props.theme.color};
  margin-top: 4px;
  border: none;
  border-radius: 8px;
  outline: none;
  font-size: large;
  width: 100%;
  &::-webkit-file-upload-button {
    padding: 15px;
    background-color: ${(props) => props.theme.bgSubDiv};
    color: ${(props) => props.theme.color};
    outline: none;
    border: none;
    font-weight: bold;
  }
`;
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
`;
export default FormRightWrapper;
