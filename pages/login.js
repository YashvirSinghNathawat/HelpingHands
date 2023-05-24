import Link from "next/link";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Context } from "../components/layout/header/Clients";
import { useRouter } from "next/router";
import { toast } from "react-toastify";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(Context);
  const router = useRouter();
  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if(!data.success) { 
        toast.error(data.message);
        return;
      }
      setUser(data.user);
      toast.success(data.message);
      router.push("/");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <Container>
      <SignInContainer>
        <Form onSubmit={loginHandler}>
          <H1>SIGNIN</H1>
          <Input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Email"
          />
          <Input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Password"
          />
          <Link href="/forgotPassword" style={{ color: "red" }}>
            Forgot your password?
          </Link>
          <Buttons>
            <Button type="submit">Sign In</Button>
            <Link
              href="/register"
              style={{
                textDecoration: "none",
                color: "red",
                width: "100%",
              }}
            >
              <Button>Register</Button>
            </Link>
          </Buttons>
        </Form>
      </SignInContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 80vh;
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
const SignInContainer = styled.div`
  width: 40%;
  height: 60%;
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
  height: 100%;
  width: 80%;
  padding: 3vh;
  gap: 3vh;
  box-sizing: border-box;
`;
const Input = styled.input`
  width: 70%;
  height: 40vh;
  outline: none;
  padding: 0 45px;
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
const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 2vh;
`;
export default Login;
