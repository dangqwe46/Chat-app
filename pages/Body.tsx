import Sidebar from "./component/Sidebar";
import ChatMsg from "./component/ChatMsg";
import AlignItemsList from "./component/AlignItemsList";
import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useEffect, useState, memo } from "react";
import { useSession, signOut } from "next-auth/react";

const SidebarContainer = styled(Grid)`
  height: 100vh;
  min-width: 350px;
  max-width: 430px;
  overflow-y: scroll;
  border-right: 1px solid whitesmoke;
`;

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Body() {
  const { data: session, status } = useSession();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid sx={{ paddingLeft: 3, paddingRight: 3 }} container spacing={2}>
        <Grid item xs={6} md={4}>
          <SidebarContainer>
            <Sidebar />
            <AlignItemsList
              email={session?.user?.email}
            />
          </SidebarContainer>
        </Grid>
        <Grid item xs={6} md={8}>
          <ChatMsg />
        </Grid>
      </Grid>
    </Box>
  );
}
