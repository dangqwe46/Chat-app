import Button from "@mui/material/Button";
import Head from "next/head";
import styled from "styled-components";
import Image from "next/image";
import GoogleLogo from "../asset/google.png";
import { ClientSafeProvider, getProviders, signIn } from "next-auth/react";
import { GetServerSideProps } from "next";
interface IProps {
  providers: Awaited<ReturnType<typeof getProviders>>;
}
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
const StyleIntro = styled.div`
  font-weight: bold;
  font-size: x-large;
`;
const Login = ({ providers }: IProps) => {
  const { name: providerName, id: providerId } =
    providers?.google as ClientSafeProvider;
  return (
    <StyleContainer>
      <Head>
        <title>Login in Chat-app</title>
      </Head>
      <StyleLoginContainer>
        <StyleImageWrapper>
          <Image
            src={GoogleLogo}
            alt="Google Logo"
            height="200px"
            width="200px"
          />
        </StyleImageWrapper>
        <StyleLoginButton
          variant="outlined"
          onClick={() => {
            signIn(providerId, { callbackUrl: "/" });
          }}
        >
          Login with {providerName}
        </StyleLoginButton>
      </StyleLoginContainer>
    </StyleContainer>
  );
};

export default Login;

export const getServerSideProps: GetServerSideProps<IProps> = async (
  context
) => {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
};
