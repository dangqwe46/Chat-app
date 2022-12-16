import Sidebar from "./component/Sidebar";
import ChatMsg from "./component/ChatMsg";
import AlignItemsList from "./component/AlignItemsList";
import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useState } from "react";

const SidebarContainer = styled(Grid)`
  height: 100vh;
  min-width: 350px;
  max-width: 430px;
  overflow-y: scroll;
  border-right: 1px solid whitesmoke;
`;

export default function Body() {
  const [isChatMsg, setChatMsg] = useState(false);
  const [groupId, setGroupId] = useState("");
  const handleOnClick = (id: any) => {
    if (id != null) {
      setChatMsg(true);
      setGroupId(id);
    }
    return null;
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid sx={{ paddingLeft: 3, paddingRight: 3 }} container spacing={2}>
        <Grid item xs={6} md={3}>
          <SidebarContainer>
            <Sidebar />
            <AlignItemsList handleOnClick={handleOnClick} />
          </SidebarContainer>
        </Grid>
        <Grid item xs={6} md={6.5}>
          {isChatMsg && <ChatMsg props={groupId} />}
        </Grid>
        <Grid item xs={6} md={2.5}></Grid>
      </Grid>
    </Box>
  );
}
