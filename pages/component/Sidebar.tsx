import { Button, IconButton } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import ChatIcon from "@mui/icons-material/Chat";
import MorVericalIcon from "@mui/icons-material/MoreVert";
import LogoutIcon from "@mui/icons-material/Logout";
import SearchIcon from "@mui/icons-material/Search";

import styled from "styled-components";
import { signOut, useSession } from "next-auth/react";
import { Session } from "next-auth";
import { NextPage } from "next";

const StyleContainer = styled.div`
  height: 100vh;
  min-width: 300px;
  max-width: 350px;
  overflow-y: scroll;
  border-right: 1px solid whitesmoke;
`;

const StyleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 80px;
  border-bottom: 1px solid whitesmoke;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1;
`;
const StyleSearch = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 2px;
`;
const StyleSidebarButton = styled(Button)`
  width: 100%;
  font-weight: bolder;
  border-top: 1px solid whitesmoke;
`;

const StyleAvatar = styled(Avatar)`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;
const StyleName = styled.text`
  outline: none;
  width: 100px;
  flex: 1;
  border: none;
  font-size: 18px;
  padding: 10px;
  font-family: "Gill Sans";
  word-wrap: break-word;
`;
const StyleSearchInput = styled.input`
  outline: none;
  flex: 1;
  border: none;
  font-size: 15px;
`;
const Sidebar = () => {
  const { data: session } = useSession();
  return (
    <StyleContainer>
      <StyleHeader>
        <Tooltip title={session?.user?.email} placement="right">
          <StyleAvatar src={session?.user?.image as string} />
        </Tooltip>
        <StyleName>{session?.user?.name}</StyleName>
        <div>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MorVericalIcon />
          </IconButton>
          <IconButton onClick={() => signOut({ callbackUrl: "/login" })}>
            <LogoutIcon />
          </IconButton>
        </div>
      </StyleHeader>
      <StyleSearch>
        <SearchIcon />
        <StyleSearchInput placeholder="Search in conversations" />
      </StyleSearch>
      <StyleSidebarButton>Start a new conversation</StyleSidebarButton>
      {/* List of conversions */}
    </StyleContainer>
  );
};

export default Sidebar;
