import type { NextPage } from "next";
import Head from "next/head";
import Sidebar from "./component/Sidebar";
import ChatMsg from "./component/ChatMsg";
import React from "react";
import { useSession } from "next-auth/react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const dev = process.env.NODE_ENV !== "production";

export const server = dev
  ? "http://localhost:3000"
  : "https://your_deployment.server.com";

const Home: NextPage = () => {
  const { data: session } = useSession();
  return (
    <div>
      <Head>
        <title>Chat app</title>
        <meta name="description" content="" />
      </Head>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={4}>
            <Sidebar></Sidebar>
          </Grid>
          <Grid item xs={6} md={8}>
            <ChatMsg />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Home;
