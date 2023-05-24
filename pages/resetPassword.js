import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const { token } = router.query;
  const { email } = router.query;

  const resetPasswordHandler = async (e) => {
    e.preventDefault();
    if(password!==confirmPassword){
      toast.error('Password do not Match!');
      return;
    }
    try {
      const res = await fetch("/api/auth/resetPassword", {
        method: "POST",
        body: JSON.stringify({
          token,
          password,
          email
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (!data.success) toast.error(data.message);
      else toast.success(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <Container>
      <ForgetPasswordContainer>
        <Form onSubmit={resetPasswordHandler}>
          <H1>Reset Password</H1>
          <Input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Enter Password"
          />
          <Input
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            type="password"
            placeholder="Confirm Password"
          />
          <Button type="submit">Reset Password</Button>
        </Form>
      </ForgetPasswordContainer>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
`;
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
export default ResetPassword;
