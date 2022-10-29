import Button from "@mui/material/Button";
import Head from "next/head";
import styled from "styled-components";
import Image from "next/image";
import Google from "../asset/google.png";

const StyleContainer = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
  background-color: whitesmoke;
`;
const StyleLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: whitesmoke;
  padding: 100px;
  border-radius: 5px;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
`;
const StyleImageWrapper = styled.div`
  margin-bottom: 50px; ;
`;
const StyleLoginButton = styled(Button)`
  font-weight: bolder;
`;
const StyleIntro=styled.div`
font-weight: bold;
font-size:x-large;
`
const Login = () => {
  return (
    <StyleContainer>
      <Head>
        <title>Login in Chat-app</title>
      </Head>
      <StyleLoginContainer>
        <StyleImageWrapper>
          <Image src={Google} alt="Google Logo" height="200px" width="200px" />
        </StyleImageWrapper>
        <StyleLoginButton
          variant="outlined"
          onClick={() => {
            console.log("OKE");
          }}
        >
          Login with Google
        </StyleLoginButton>
      </StyleLoginContainer>
    </StyleContainer>
  );
};

export default Login;
