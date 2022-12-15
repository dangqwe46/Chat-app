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

export default function Body() {
  const [isChatMsg, setChatMsg] = useState(false);
  const handleOnClick = (id: number) => {
    if (id != null) {
      setChatMsg(true);
    }
    console.log(id);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid sx={{ paddingLeft: 3, paddingRight: 3 }} container spacing={2}>
        <Grid item xs={6} md={4}>
          <SidebarContainer>
            <Sidebar />
            <AlignItemsList handleOnClick={handleOnClick} />
          </SidebarContainer>
        </Grid>
        <Grid item xs={6} md={8}>
          {isChatMsg && <ChatMsg />}
        </Grid>
      </Grid>
    </Box>
  );
}
