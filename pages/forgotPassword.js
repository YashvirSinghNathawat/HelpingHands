import React, { useState } from 'react'
import { toast } from 'react-toastify';
import styled from 'styled-components';


const forgotPassword = () => {
    const [email, setEmail] = useState("");
    const forgotPasswordHandler = async (e) => {
      e.preventDefault();
    try {
      const res = await fetch("/api/auth/forgotPassword", {
        method: "POST",
        body: JSON.stringify({
          email
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if(!data.success) toast.error(data.message);
      else toast.success(data.message);
      // router.push("/");
    } catch (error) {
      toast.error(error.message);
    }
    }
  return (
        <Container>
      <ForgetPasswordContainer>
        <Form onSubmit={forgotPasswordHandler}>
          <H1>Forgot Password</H1>
          <Input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Email"
          />
            <Button type="submit">Reset Password</Button>
        </Form>
      </ForgetPasswordContainer> 
      </Container>
  )
}

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;

`
const H1 = styled.h1`
  font-weight: bold;
  margin: 0;
  text-align: center;
  border-bottom: 1px solid silver;
  color: black;
`;
const ForgetPasswordContainer = styled.div`
  /* width: 40%; */
  /* height: 60%; */
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  /* padding: 3vh; */
  transition: all 0.6s ease-in-out;
  display: flex;
  justify-content: center;
  align-self: center;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* height: 100%; */
  /* width: 80%; */
  padding: 3vh;
  gap: 3vh;
  box-sizing: border-box;
`;
const Input = styled.input`
  /* width: 70%; */
  /* height: 40vh; */
  outline: none;
  padding: 10px 45px;
  font-size: 18px;
  background: none;
  caret-color: #5372f0;
  border-radius: 5px;
  border: 1px solid #bfbfbf;
  border-bottom-width: 2px;
  transition: all 0.2s ease;
`;
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1.5vh;
  color: white;
  background-color: black;
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-size: large;
  border-radius: 1vh;
`;
export default forgotPassword